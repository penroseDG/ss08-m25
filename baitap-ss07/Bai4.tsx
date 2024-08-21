import React from 'react'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Bai4() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.query.name) {
      setName(router.query.name as string);
    }
    if (router.query.category) {
      setCategory(router.query.category as string);
    }
  }, [router.query]);

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

      {/* Display the query parameters */}
      <div style={{ marginTop: '20px' }}>
        {name && <p>Product Name: {name}</p>}
        {category && <p>Product Category: {category}</p>}
      </div>
    </div>
  )
}
