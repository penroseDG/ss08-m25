import React from 'react'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
export default function Bai2() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.query.search) {
      setQuery(router.query.search as string);
    }
  }, [router.query.search]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
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
      {query && (
        <div style={{ marginTop: '20px' }}>
          <h2>Search Results for: "{query}"</h2>
        </div>
      )}
    </div>
  )
}
