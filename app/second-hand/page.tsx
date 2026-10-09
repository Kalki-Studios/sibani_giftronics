import Navigation from '@/components/Navigation';
import CategoryLayout from '@/components/CategoryLayout';

export default function SecondHandPage() {
  const products = [
    { name: 'iPhone 13 (Used)', price: '₹35,000', img: '/images/secondhand_mock.png' },
    { name: 'iPhone 12 (Used)', price: '₹28,000', img: '/images/secondhand_mock.png' },
    { name: 'Samsung S22 (Used)', price: '₹28,000', img: '/images/secondhand_mock.png' },
    { name: 'OnePlus 11 (Used)', price: '₹32,000', img: '/images/secondhand_mock.png' }
  ];

  return (
    <main>
      <Navigation />
      <CategoryLayout 
        title="Second-hand Phones" 
        description="Quality checked, best price, reliable performance." 
        products={products} 
      />
    </main>
  );
}
