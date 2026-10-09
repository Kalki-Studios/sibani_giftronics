'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <div className={styles.logoName}>Sibani Giftronics</div>
          <div className={styles.infoText}>
            Premium mobile retail in Damanjodi. Latest smartphones, accessories, and official warranty.
          </div>
        </div>
        
        <div className={styles.footerCol}>
          <div className={styles.infoText} style={{ color: 'white', fontWeight: 600 }}>Visit Us</div>
          <div className={styles.infoText}>
            Bhejaput main road,<br/>
            Damanjodi, Koraput,<br/>
            Odisha, India 763008
          </div>
        </div>

        <div className={styles.footerCol}>
          <div className={styles.infoText} style={{ color: 'white', fontWeight: 600 }}>Contact</div>
          <a href="tel:+917008121187" className={styles.link}>+91 7008121187</a>
          <a href="https://www.instagram.com/sibani.giftronics/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Instagram @sibani.giftronics
          </a>
        </div>
      </div>
      
      <div className={styles.copyright}>
        © 2026 Sibani Giftronics.
      </div>
    </footer>
  );
}
