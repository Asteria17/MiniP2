import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components';
import { Carousel } from '../pages/Hero';
import { Home } from '../pages/Home';

export const Categorized = ({ products }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [id, title, category, price] = data;
  useEffect(() => {
    getCategorized();
  }, []);

  const getCategorized = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    setData(await response.json());
    setFilter(data);
    console.log(data);
  };

  const filterProducts = (category) => {
    const updatedItems = data.filter((item) => item.category === category);
    console.log(updatedItems);
    setFilter(updatedItems);
  };

  return (
    <>
      <div className="container mx-auto flex flex-row">
        <div className=" mt-20 ml-10 bg-neutral-200">
          <div className="flex flex-wrap w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <button
              onClick={() => data}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              All Products
            </button>

            <button
              onClick={() => filterProducts('electronics')}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Electronics
            </button>
            <button
              onClick={() => filterProducts("women's clothing")}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Women's Clothing
            </button>
            <button
              onClick={() => filterProducts("men's clothing")}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Men's Clothing
            </button>
            <button
              onClick={() => filterProducts('jewelery')}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
            >
              Jewelry
            </button>
          </div>
          {/* <CArousel /> */}
        </div>
      </div>

      {/* <Home /> */}

      <section className="container flex flex-wrap max-w-7x1 mx-auto py-7 items-center rounded-lg">
        <div className="flex flex-wrap inline-grid grid-cols-4 gap-4">
          {filter.map((product) => (
            <Card
              key={product.id}
              data={product}
            />
          ))}
          {filter.map((product) => (
            <Card
              key={product.id}
              data={product}
            />
          ))}
          {filter.map((product) => (
            <Card
              key={product.id}
              data={product}
            />
          ))}
        </div>
      </section>
    </>
  );
};
