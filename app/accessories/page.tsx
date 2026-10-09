import Navigation from '@/components/Navigation';
import CategoryLayout from '@/components/CategoryLayout';

export default function AccessoriesPage() {
  const products = [
    { name: 'AirPods Pro 2', price: '₹24,900', img: '/images/accessories_mock.png' },
    { name: '20W Power Adapter', price: '₹1,900', img: '/images/accessories_mock.png' },
    { name: 'MagSafe Charger', price: '₹4,500', img: '/images/accessories_mock.png' },
    { name: 'Galaxy Watch 6', price: '₹29,999', img: '/images/accessories_mock.png' }
  ];

  return (
    <main>
      <Navigation />
      <CategoryLayout 
        title="Premium Accessories" 
        description="Cases, chargers, audio and wearables." 
        products={products} 
      />
    </main>
  );
}
