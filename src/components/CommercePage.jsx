import { useState } from 'react';
import Header from './Header.jsx';
import Products from './Products.jsx';
import Footer from './Footer.jsx';

function CommercePage() {
  const [cartValue, setCartValue] = useState(0);

  return (
    <div>
      <Header cartValue={cartValue} />
      <Products setCartValue={setCartValue} />
      <Footer />
    </div>
  );
}

export default CommercePage;