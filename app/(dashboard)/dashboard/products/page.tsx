import ProductActions from '@/components/dashboard/product/ProductActions';
import ProductHeader from '@/components/dashboard/product/ProductHeader';
import Pagination from '@/components/others/Pagination';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductsPage = () => {
  // Sample data for products
  const products = [
    { id: 1, name: 'Product 1', price: '$100', category: 'Electronics', image: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: '$150', category: 'Clothing', image: '/product2.jpg' },
    { id: 3, name: 'Product 3', price: '$80', category: 'Home Appliances', image: '/product3.jpg' },
    { id: 4, name: 'Product 4', price: '$50', category: 'Books', image: '/product4.jpg' },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 my-4">
      <ProductHeader />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border dark:border-gray-500">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {products.map((product) => (
              <tr key={product.id} className="bg-white dark:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Image src={product.image} alt={product.name} width={40} height={40} className="h-10 w-10 rounded-full" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                 <ProductActions />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination totalPages={10} currentPage={1} pageName='productpage'/>
      </div>
    </div>
  );
};

export default ProductsPage;
