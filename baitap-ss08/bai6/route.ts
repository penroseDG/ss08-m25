import { NextResponse } from 'next/server';

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, name: 'Johnny Appleseed', email: 'johnny@example.com' },
];

export async function PUT(request: Request) {
  try {
    const { id, name, email } = await request.json();

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      return NextResponse.json(
        { message: `Không tìm thấy người dùng có id = ${id}` },
        { status: 404 }
      );
    }

    users[userIndex] = { id, name, email };

    return NextResponse.json({
      message: 'Cập nhật thông tin người dùng thành công',
      user: users[userIndex],
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Lỗi khi cập nhật thông tin người dùng' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(users);
}