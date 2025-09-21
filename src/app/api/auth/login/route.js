import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/db";
import User from "@/app/models/User";

export async function POST(req) {
  await dbConnect();

  try {
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // set cookie
    const res = NextResponse.json({ message: "Login successful", role: user.role });
    res.cookies.set("role", user.role, { httpOnly: true });
    res.cookies.set("user", user._id.toString(), { httpOnly: true });

    return res;
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
