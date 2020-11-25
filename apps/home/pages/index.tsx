import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h2>My Main Site</h2>
      <p>Thank you for using and showing some ♥ for Nx.</p>
      <ul className={styles.links}>
        <li>
          <Link href="/blog">Show Blog!</Link>
        </li>
        <li>
          <Link href="/blog/1">Show Blog Uno!</Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
