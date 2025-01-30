'use client'; // Mark this as a Client Component

import React, { useState } from 'react';
import ProductCard from './productCard';

interface Product {
    id: string;
    imageUrl: string;
    brand: string;
    model: string;
    description: string;
    price: string;
}


const ProductCarousel = () => {
    const [startIndex, setStartIndex] = useState(0);

    // Number of products to show at a time
    const visibleCount = 4;

    const products: Product[] = [
        {
            id: '1',
            imageUrl: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UF1000,1000_QL80_.jpg',
            brand: 'Apple',
            model: 'MacBook Pro',
            description: 'M4 16GB RAM 512GB SSD',
            price: '$1,999',
        },
        {
            id: '2',
            imageUrl: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129743-1_large.jpg',
            brand: 'Apple',
            model: 'iPhone 13',
            description: '8GB RAM 1TB SSD',
            price: '$799',
        },
        {
            id: '3',
            imageUrl: 'https://sharafstore.com/web/image/product.image/13119/image_1024/Samsung%20QE55Q60CAU%2055%22%20QLED%204K%20HDR%20Smart%20TV%20%28SHR20%29?unique=74eb4c6',
            brand: 'Samsung',
            model: 'QLED 4K Smart TV',
            description: 'Experience stunning picture quality with Quantum Dot technology and smart features.',
            price: '$1,299',
        },
        {
            id: '4',
            imageUrl: 'https://cdn.dsmcdn.com/ty1551/product/media/images/ty1552/prod/QC/20240917/11/b2245b4c-b7a5-34c5-8eab-5e4e42c4cdb6/1_org_zoom.jpg',
            brand: 'Sony',
            model: 'WH-1000XM4',
            description: 'Industry-leading noise cancellation and exceptional sound quality.',
            price: '$349',
        },
        {
            id: '5',
            imageUrl: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129743-1_large.jpg',
            brand: 'Apple',
            model: 'iPhone 13',
            description: 'A powerful smartphone with a stunning Super Retina XDR display and A15 Bionic chip.',
            price: '$799',
        },
    ];

    // Handle next button click
    const handleNext = () => {
        if (startIndex + visibleCount < products.length) {
            setStartIndex(startIndex + 1);
        }
    };

    // Handle previous button click
    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    // Get the subset of products to display
    const visibleProducts = products.slice(startIndex, startIndex + visibleCount);

    return (
        <div className="relative">
            {/* Previous Button */}
            <button
                onClick={handlePrevious}
                disabled={startIndex === 0}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 disabled:opacity-50 hover:bg-gray-700 transition-colors"
            >
                &larr;
            </button>

            {/* Product List */}
            <div className="flex overflow-hidden space-x-4 p-4">
                {visibleProducts.map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-1/4 transform transition-transform duration-300">
                        <ProductCard
                            imageUrl={product.imageUrl}
                            brand={product.brand}
                            model={product.model}
                            description={product.description}
                            price={product.price}
                            productId={product.id}
                        />
                    </div>
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={handleNext}
                disabled={startIndex + visibleCount >= products.length}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 disabled:opacity-50 hover:bg-gray-700 transition-colors"
            >
                &rarr;
            </button>
        </div>
    );
};

export default ProductCarousel;