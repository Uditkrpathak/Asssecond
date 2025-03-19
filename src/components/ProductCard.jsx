import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({ item }) => {
  const [added, setAdded] = useState("Add");

  const handleAdd = () => {
    if(added ==="Add" ) setAdded("Added");
        else if(added === "Added") setAdded("Add");
      else ("Add");
    toast(`${item.name} added!`);
  };

  return (
    <div className="relative max-w-5xl p-4 m-auto border shadow-xl rounded-xl">
      <div className='flex justify-around gap-6 '>
         <div className='flex flex-col '>
           <h3 className="mt-4 mb-4 font-serif text-lg font-semibold">{item.name}</h3>
      {item.description && <p className="mt-4 font-serif text-sm font-semibold text-gray-800">{item.description}</p>}
      {item.price && <p className="mt-1 text-sm font-bold">{item.price}</p>} 

      <button
        onClick={handleAdd}
       
        className={`mt-2 px-3 py-2 text-lg font-semibold font-serif absolute rounded-xl top-40 right-6 ${
        added === "Add"
          ? "bg-white text-black border border-gray-300 hover:bg-gray-100"
          : "bg-green-500 text-white hover:bg-green-600"
      } `}
      >
        {added}
      </button>
         </div>
      <img src={item.image} alt={item.name} className="object-cover w-40 rounded-2xl h-52 " />
      </div>
     
    </div>
  );
};

export default ProductCard;
