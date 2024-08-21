import { NextResponse } from 'next/server';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const userId = parseInt(id, 10); 
  const user = users.find(user => user.id === userId);

  if (user) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json({ message: `Không tìm thấy người dùng có id = ${id}` }, { status: 404 });
  }
}