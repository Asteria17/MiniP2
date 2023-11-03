import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components';

export const NavBar = () => {
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
    <div className="mt-5 text-center ">
      <form className="ml-20 mr-20">
        <label
          for="default-search"
          class="mb-2  text-sm font-bold text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <h1 className="text-center text-4xl font-extrabold underline-offset-4	mb-5 leading-relaxed">
        Products
      </h1>
      <div className="inline-flex rounded-md shadow-sm">
      <button
              onClick={() => <Link to="products/:id" />}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600 "
            >
              All
            </button>

            <button
              onClick={() => filterProducts('electronics')}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600"
            >
              Electronics
            </button>
            <button
              onClick={() => filterProducts("women's clothing")}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600"
            >
              Women's Clothing
            </button>
            <button
              onClick={() => filterProducts("men's clothing")}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600"
            >
              Men's Clothing
            </button>
            <button
              onClick={() => filterProducts('jewelery')}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600"
            >
              Jewelry
            </button>
      </div>
    <section className="container flex flex-wrap max-w-7x1 mx-auto py-7 items-center rounded-lg">
    <div className="flex flex-wrap inline-grid grid-cols-4 gap-2">
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
      {filter.map((product) => (
        <Card
          key={product.id}
          data={product}
        />
      ))}
    </div>
  </section>
    </div>
  );
};
