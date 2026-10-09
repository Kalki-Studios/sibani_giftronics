import Navigation from '@/components/Navigation';
import CategoryLayout from '@/components/CategoryLayout';

export default function AndroidFlagshipPage() {
  const products = [
    { name: 'Samsung Galaxy S24 Ultra', price: '₹1,29,999', img: '/images/flagship_mock.png' },
    { name: 'Samsung Galaxy Z Fold 5', price: '₹1,54,999', img: '/images/flagship_mock.png' },
    { name: 'Nothing Phone (2)', price: '₹44,999', img: '/images/flagship_mock.png' },
    { name: 'OnePlus 12', price: '₹64,999', img: '/images/flagship_mock.png' }
  ];

  return (
    <main>
      <Navigation />
      <CategoryLayout 
        title="Android Flagships" 
        description="Samsung, Nothing, OnePlus and more." 
        products={products} 
      />
    </main>
  );
}
