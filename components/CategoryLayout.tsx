import Image from 'next/image';
import Link from 'next/link';
import GlassPanel from './GlassPanel';
import styles from './CategoryLayout.module.css';

interface Product {
  name: string;
  price: string;
  img: string;
}

interface CategoryLayoutProps {
  title: string;
  description: string;
  products: Product[];
}

export default function CategoryLayout({ title, description, products }: CategoryLayoutProps) {
  return (
    <div className={styles.pageContainer}>
      <Link href="/#stock" className={styles.backButton}>
        ← Back to Stock
      </Link>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <GlassPanel key={index} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <Image 
                src={product.img} 
                alt={product.name} 
                fill
                style={{ objectFit: 'cover', borderRadius: 'inherit' }}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  );
}
