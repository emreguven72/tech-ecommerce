import React from 'react';
import ProductCard from './productCard';

interface Product {
    id: string;
    imageUrl: string;
    brand: string;
    model: string;
    description: string;
    price: string;
}


const ProductList = () => {
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
            description: 'A powerful smartphone with a stunning Super Retina XDR display and A15 Bionic chip.',
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

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        imageUrl={product.imageUrl}
                        brand={product.brand}
                        model={product.model}
                        description={product.description}
                        price={product.price}
                        productId={product.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;