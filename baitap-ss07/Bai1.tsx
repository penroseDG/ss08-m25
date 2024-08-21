import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react';
export default function Bai1() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Append the search query to the URL
    if (query.trim()) {
      router.push(`/posts?search=${query}`);
    }
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Posts</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Enter search query" 
        />
        <button type="submit">Tìm kiếm</button>
      </form>
    </div>
  )
}
