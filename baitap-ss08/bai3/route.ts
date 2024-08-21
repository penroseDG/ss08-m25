import { NextResponse } from 'next/server';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, name: 'Johnny Appleseed', email: 'johnny@example.com' },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const nameQuery = searchParams.get('name')?.toLowerCase();

  if (!nameQuery) {
    return NextResponse.json({ message: 'Vui lòng cung cấp tên để tìm kiếm.' }, { status: 400 });
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(nameQuery)
  );

  if (filteredUsers.length > 0) {
    return NextResponse.json(filteredUsers);
  } else {
    return NextResponse.json({ message: `Không tìm thấy người dùng với tên chứa '${nameQuery}'` }, { status: 404 });
  }
}