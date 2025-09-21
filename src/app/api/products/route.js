import Product from "@/app/models/Product";
import cloudinary from "@/app/utils/cloudinary";
import dbConnect from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const products = await Product.find().sort({ createdAt: -1 }); // latest first
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  await dbConnect();

  try {
    const cookie = req.headers.get("cookie") || "";
    const role = cookie.split("role=")[1]?.split(";")[0];
    if (role !== "admin") {
      return NextResponse.json({ message: "Only admin can create products" }, { status: 403 });
    }

    const formData = await req.formData();
    const title = formData.get("title");
    const category = formData.get("category");
    const price = formData.get("price");
    const imageFile = formData.get("image");

    if (!title || !category || !price || !imageFile) {
      return NextResponse.json({ message: "Missing required fields", status: 400 });
    }

    // Convert File to Buffer
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload buffer to Cloudinary
    const uploadToCloudinary = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "products" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });

    const uploaded = await uploadToCloudinary();
    const imageUrl = uploaded.secure_url;

    const product = await Product.create({ title, category, price, image: imageUrl });
    return NextResponse.json({ message: "Product created", product });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}


