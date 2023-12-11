import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { useState } from 'react';

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={toggleMenu}>Toggle Menu</button>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
