import { NextResponse } from 'next/server';

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, name: 'Johnny Appleseed', email: 'johnny@example.com' },
];

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const newUser = { id: newId, name, email };
    users.push(newUser);
    return NextResponse.json({
      message: 'Thêm mới thông tin người dùng thành công',
      user: newUser,
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Lỗi khi thêm người dùng mới' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(users);
}