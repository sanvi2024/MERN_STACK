import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product A', price: '$10', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product B', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product C', price: '$30', image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-16 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-8 px-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 shadow rounded">
            <img src={product.image} alt={product.name} className="mb-4" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <button
              onClick={() => navigate(`/product/${product.id}`)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
