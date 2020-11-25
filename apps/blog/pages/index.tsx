import React from 'react';

import styles from './index.module.css';
import Link from 'next/link';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h2>My Blog Site</h2>
      <p>Thank you for using and showing some ♥ for Nx.</p>
      <ul className={styles.links}>
        <li>
          <a href="/">Back to Main Site!</a>
        </li>
        <li>
          <Link href="/1">Show Blog Uno!</Link>
        </li>
      </ul>
    </div>
  );
}
export default Index;
