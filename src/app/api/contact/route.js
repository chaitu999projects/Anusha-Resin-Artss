// app/api/contact/route.js
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import ContactModel from '@/app/models/Contact';

export async function POST(request) {
  try {
    // Connect to MongoDB if not already connected
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    const { name, phone, description } = await request.json();

    // Create new contact entry
    const newContact = new ContactModel({
      name,
      phone,
      description
    });

    await newContact.save();

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json(
        { message: 'This phone number has already been used' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: 'Error submitting form', error: error.message },
      { status: 500 }
    );
  }
}