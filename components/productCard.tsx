'use client'

import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  imageUrl: string;
  brand: string;
  model: string;
  description: string;
  price: string;
  productId: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  brand,
  model,
  description,
  price,
  productId
}) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col">
      {/* Product Image */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={`${brand} ${model}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority // Optional: Use for above-the-fold images
        />
      </div>

      {/* Product Details */}
      <div className="p-6 h-full flex flex-col flex-1 gap-4">
        {/* Brand and Model */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-gray-800">{brand}</h2>
          <span className="text-sm text-gray-600">{model}</span>
        </div>

        {/* Product Description */}
        <p className="text-gray-600 text-sm flex-1">{description}</p>

        {/* Price and Buy Button */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800">{price}</span>
          <button
            onClick={() => {
                
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300 text-sm"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;