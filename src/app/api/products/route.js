import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/db";
import Product from "@/app/models/Product";

// GET all products
export async function GET() {
  await dbConnect();

  try {
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// POST: create a product (optional)
export async function POST(req) {
  await dbConnect();

  try {
    const cookie = req.headers.get("cookie") || "";
    const role = cookie.split("role=")[1]?.split(";")[0];
    if (role !== "admin") {
      return NextResponse.json({ message: "Only admin can create products" }, { status: 403 });
    }

    const { title, category, price } = await req.json();
    if (!title || !category || price === undefined) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const product = await Product.create({ title, category, price });
    return NextResponse.json({ message: "Product created", product });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
