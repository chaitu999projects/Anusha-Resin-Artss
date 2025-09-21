
import JoinModel from '@/app/models/Join';
import dbConnect from '@/app/utils/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await dbConnect();

    const { name, email } = await request.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubmission = await JoinModel.findOne({ email });
    if (existingSubmission) {
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 409 }
      );
    }

    // Create new submission
    const newSubmission = await JoinModel.create({ name, email });

    return NextResponse.json(
      { 
        message: 'Successfully joined newsletter', 
        data: newSubmission 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PATCH() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}