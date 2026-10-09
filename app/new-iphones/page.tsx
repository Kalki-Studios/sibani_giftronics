import Navigation from '@/components/Navigation';
import CategoryLayout from '@/components/CategoryLayout';

export default function NewIphonesPage() {
  const products = [
    { name: 'iPhone 15 Pro Max', price: '₹1,59,900', img: '/images/iphone_mock.png' },
    { name: 'iPhone 15 Pro', price: '₹1,34,900', img: '/images/iphone_mock.png' },
    { name: 'iPhone 15', price: '₹79,900', img: '/images/iphone_mock.png' },
    { name: 'iPhone 14', price: '₹69,900', img: '/images/iphone_mock.png' }
  ];

  return (
    <main>
      <Navigation />
      <CategoryLayout 
        title="New iPhones" 
        description="Latest models in stock with official warranty." 
        products={products} 
      />
    </main>
  );
}
