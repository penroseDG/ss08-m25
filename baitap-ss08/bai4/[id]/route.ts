import { NextResponse } from 'next/server';

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, name: 'Johnny Appleseed', email: 'johnny@example.com' },
];

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const userId = parseInt(id, 10);

  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return NextResponse.json({ message: 'Xóa thông tin người dùng thành công' });
  } else {
    return NextResponse.json({ message: `Không tìm thấy người dùng có id = ${id}` }, { status: 404 });
  }
}