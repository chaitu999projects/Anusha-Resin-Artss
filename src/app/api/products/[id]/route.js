import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/db";
import Product from "@/app/models/Product";

// GET a single product
export async function GET(req, { params }) {
  await dbConnect();
  const { id } = params;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return NextResponse.json({ message: "Invalid product ID" }, { status: 400 });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// PUT: update a product
export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = params;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return NextResponse.json({ message: "Invalid product ID" }, { status: 400 });
  }

  try {
    const cookie = req.headers.get("cookie") || "";
    const role = cookie.split("role=")[1]?.split(";")[0];
    if (role !== "admin") {
      return NextResponse.json({ message: "Only admin can update products" }, { status: 403 });
    }

    const { title, category, price } = await req.json();
    if (!title || !category || price === undefined) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const updated = await Product.findByIdAndUpdate(
      id,
      { title, category, price },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product updated", product: updated });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// DELETE: delete a product
export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = params;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return NextResponse.json({ message: "Invalid product ID" }, { status: 400 });
  }

  try {
    const cookie = req.headers.get("cookie") || "";
    const role = cookie.split("role=")[1]?.split(";")[0];
    if (role !== "admin") {
      return NextResponse.json({ message: "Only admin can delete products" }, { status: 403 });
    }

    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted successfully", product: deleted });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
