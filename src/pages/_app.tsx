import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // Output a helpful message about images in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(
        '%c🔥 Rhinebeck Fire Department Website 🔥',
        'font-size: 16px; font-weight: bold; color: #CD0000;'
      );
      console.log(
        '%cImages: To get your images from Webflow, run: npm run import-images',
        'font-size: 14px; color: #002B5B;'
      );
      console.log(
        '%cCheck missing images with: npm run check-images',
        'font-size: 14px; color: #002B5B;'
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>Rhinebeck Fire Department</title>
        <meta name="description" content="Protecting the village of Rhinebeck since 1834" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
} 