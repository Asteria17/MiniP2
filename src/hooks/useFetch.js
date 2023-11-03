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
};
