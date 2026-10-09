import Image from 'next/image';
import Link from 'next/link';
import GlassPanel from './GlassPanel';
import styles from './StockGallery.module.css';

const STOCK_CATEGORIES = [
  { id: 'new-iphones', title: 'New iPhones', desc: 'Latest models in stock.', img: '/images/iphone_mock.png' },
  { id: 'second-hand', title: 'Second-hand Phones', desc: 'Quality checked, best price.', img: '/images/secondhand_mock.png' },
  { id: 'accessories', title: 'Premium Accessories', desc: 'Cases, chargers, audio.', img: '/images/accessories_mock.png' },
  { id: 'android-flagship', title: 'Android Flagships', desc: 'Samsung, Nothing, and more.', img: '/images/flagship_mock.png' }
];

export default function StockGallery() {
  return (
    <section id="stock" className={styles.gallerySection}>
      <div className={styles.galleryScroll}>
        {STOCK_CATEGORIES.map(cat => (
          <GlassPanel key={cat.id} className={styles.stockCard} as={Link} href={`/${cat.id}`}>
            <div className={styles.cardImageContainer}>
              <Image 
                src={cat.img} 
                alt={cat.title} 
                fill
                style={{ objectFit: 'cover', borderRadius: 'inherit' }}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardDesc}>{cat.desc}</p>
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
