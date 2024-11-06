import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';" />
        <title>Zoi</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <main className="flex flex-col items-center justify-center gap-8 text-center max-w-2xl mx-auto p-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold drop-shadow-lg animate-pulse tracking-wide">
            Zoi
          </h1>
          <p className="text-xl sm:text-2xl font-light drop-shadow-md max-w-lg leading-relaxed px-4">
            Estamos trabajando en nuestro sitio web. <br /> ¡Vuelve pronto para descubrir más!
          </p>
        </main>
      </div>
    </>
  );
}
