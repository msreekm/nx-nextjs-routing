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
      <h2>Blog #1</h2>
      <p>There is nothing here!</p>
      <ul className={styles.links}>
        <li>
          <Link href="/">Go to Blog Home!</Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
