import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
    const [products, setProducts] = useState([
        {
            id: "pid-1",
            name: "Product 1",
            price: 10.0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
            isSelected: false,
        },
        {
            id: "pid-2",
            name: "Product 2",
            price: 10.0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
            isSelected: false,
        },
    ]);

    const addProduct = (newProduct) => {
        setProducts([...products, { ...newProduct, id: `pid-${products.length + 1}` }]);
    };

    return (
        <div className="p-4">
            <ProductForm addProduct={addProduct} />
            <ProductList products={products} />
        </div>
    );
}

export default App;
