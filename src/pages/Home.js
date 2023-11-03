import { useState, useEffect } from 'react';

import {} from '../components';
import { Card } from '../components';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [setFilter] = useState(products);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=4');
    setProducts(await response.json(products));
    console.log(response);
  };

  return (
    <main>
      <section className="bg-blue-900 max-w-7x1 mx-auto py-2 items-center rounded-lg">
        <h1
          className="text-4xl font-extrabold text-center
        p-2 mb-5 	"
        >
          Best Seller{' '}
        </h1>
        <div className="flex flex-wrap inline-grid grid-cols-4 gap-4">
          {products.map((data) => (
            <Card
              key={data.id}
              data={data}
            />
          ))}
          {/* <Card /> */}
        </div>
      </section>
    </main>
  );
};
