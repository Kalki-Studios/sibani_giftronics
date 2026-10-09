import Image from 'next/image';
import GlassPanel from './GlassPanel';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>Premium Mobile Retail in Damanjodi.</h1>
      <p className={styles.subtitle}>
        Latest smartphones, official warranty, and the best buyback rates.
      </p>
      
      <GlassPanel className={styles.showcase}>
        <Image 
          src="/images/storefront_hero.png" 
          alt="Sibani Giftronics Storefront" 
          fill
          style={{ objectFit: 'cover', borderRadius: 'inherit' }}
          priority
        />
      </GlassPanel>
    </section>
  );
}
