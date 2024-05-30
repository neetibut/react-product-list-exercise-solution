/* eslint-disable react/prop-types */
function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-[200px] h-auto object-cover rounded"
          />
          <div className="mt-2">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
