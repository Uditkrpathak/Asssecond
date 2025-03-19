import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({ item }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    toast(`${item.name} added!`);
  };

  return (
    <div className="relative max-w-5xl p-4 m-auto border rounded-lg shadow-lg">
      <div className='flex justify-around gap-6 '>
         <div className='flex flex-col '>
           <h3 className="mt-4 mb-4 font-serif text-lg font-semibold">{item.name}</h3>
      {item.description && <p className="mt-4 font-serif text-sm font-semibold text-gray-800">{item.description}</p>}
      {item.price && <p className="mt-1 text-sm font-bold">{item.price}</p>} 

      <button
        onClick={handleAdd}
        disabled={added}
        className={`mt-2 px-3 py-2 text-lg font-semibold font-serif absolute rounded-xl top-40 right-6 ${added ? 'bg-green-500 text-white' : 'bg-white text-black'}`}
      >
        {added ? 'Added' : 'Add'}
      </button>
         </div>
      <img src={item.image} alt={item.name} className="object-cover w-40 rounded-2xl h-52 " />
      </div>
     
    </div>
  );
};

export default ProductCard;
