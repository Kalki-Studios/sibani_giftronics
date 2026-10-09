import Link from 'next/link';
import GlassPanel from './GlassPanel';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={styles.navWrapper}>
      <GlassPanel className={styles.navPanel} as="nav">
        <div className={styles.logo}>
          Sibani Giftronics
        </div>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/#stock">Stock</Link>
          <Link href="/#exchange">Exchange</Link>
          <Link href="/finance">Finance</Link>
        </div>
        <a href="tel:+917008121187" className={styles.callButton}>
          Call Now
        </a>
      </GlassPanel>
    </div>
  );
}
