// 'use client';

// import { useEffect } from 'react';
// import { fetchProducts } from '../GlobalRedux/features/product/productThunks';
// import { useAppDispatch, useAppSelector } from '../GlobalRedux/store';

// const generateRandomDiscount = () => {
//   return Math.floor(Math.random() * (50 - 20 + 1)) + 20;
// };

// const Products = () => {
//   const dispatch = useAppDispatch();
//   const { products, loading, error } = useAppSelector((state: any) => state.products);
//   console.log(products, "product------------>");

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className='container mx-auto px-2 py-4'>
//       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 xl:grid-cols-4 gap-4">
//         {products.map((product: any) => (
//           <li key={product.id} className="bg-gray-100 rounded-md shadow-lg p-4 ransform transition-transform duration-300 hover:scale-110">
//             <h2 className="bg-green-600 rounded-md py-2 px-2 text-xl font-semibold text-white">
//               {product.title}
//             </h2>
//             <p className="my-2">{product.description}</p>
//             <div className='flex flex-col'>
//               <span className="text-3xl font-medium text-black">
//                 Offer Price: ₹ {(product.price * 2).toFixed(2)}
//               </span>
//               <span className="text-xl font-medium text-gray-400 line-through">
//                 MRP Price: ₹ {(product.price * 3).toFixed(2)}
//               </span>
//               <span className="text-xl font-medium text-green-600">
//                 Discount: {generateRandomDiscount()}%
//               </span>
//             </div>
//             <div className="relative overflow-hidden rounded-md mt-4">
//               <img
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="transform transition-transform duration-300 hover:scale-110"
//               />
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Products;

import { GetServerSideProps } from 'next';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  // Add other fields as needed
}

// Fetch data function
async function getData() {
  const res = await fetch('https://dummyjson.com/products');
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// Define the component
const Page = async () => {
  const data = await getData();

  // Ensure data is an array
  const products = data.products || []; // Adjust based on API response structure

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Render other product details */}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;

