import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react';
export default function Bai3() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const router = useRouter();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const query = {
      ...(name && { name }),
      ...(category && { category }) 
    };
    router.push({
      pathname: '/products',
      query: query,
    });
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>
      <form onSubmit={handleSearch}>
        <div>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter product name" 
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <input 
            type="text" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            placeholder="Enter product category" 
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Tìm kiếm</button>
      </form>
    </div>
  )
}
