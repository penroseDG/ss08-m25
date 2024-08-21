import { NextResponse } from 'next/server';

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, name: 'Johnny Appleseed', email: 'johnny@example.com' },
];

export async function GET() {
  return NextResponse.json(users);
}