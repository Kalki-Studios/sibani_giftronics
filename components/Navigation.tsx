"use client";

import { useState } from 'react';
import Link from 'next/link';
import GlassPanel from './GlassPanel';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navWrapper}>
      <GlassPanel className={styles.navPanel} as="nav">
        <div className={styles.logo}>
          Sibani Giftronics
        </div>
        <div className={`${styles.links} ${styles.desktopLinks}`}>
          <Link href="/">Home</Link>
          <Link href="/#stock">Stock</Link>
          <Link href="/#exchange">Exchange</Link>
          <Link href="/finance">Finance</Link>
        </div>
        <div className={styles.actions}>
          <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </GlassPanel>
      {isOpen && (
        <div className={styles.mobileMenuWrapper}>
          <GlassPanel className={styles.mobileMenu}>
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/#stock" onClick={() => setIsOpen(false)}>Stock</Link>
            <Link href="/#exchange" onClick={() => setIsOpen(false)}>Exchange</Link>
            <Link href="/finance" onClick={() => setIsOpen(false)}>Finance</Link>
            <a href="tel:+917008121187" className={styles.mobileCallButton}>
              Call Now
            </a>
          </GlassPanel>
        </div>
      )}
    </div>
  );
}
