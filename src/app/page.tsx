"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/working')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <main className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold text-gray-800">{message}</h1>
        <p className="text-lg text-gray-600">Estamos trabajando duro para traerte lo mejor.</p>
      </main>
    </div>
  );
}
