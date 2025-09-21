import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/db";
import User from "@/app/models/User";

export async function POST(req) {
  await dbConnect();

  try {
    const { email, password } = await req.json();

    // check if user exists
    const exists = await User.findOne({ email });
    if (exists) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    // check if first user → make admin
    const userCount = await User.countDocuments();
    const role = userCount === 0 ? "admin" : "user";

    const newUser = await User.create({ email, password, role });

    return NextResponse.json(
      { message: "User registered", user: { email: newUser.email, role: newUser.role } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
