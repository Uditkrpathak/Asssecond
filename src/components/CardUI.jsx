import React, { useState } from 'react';
import { toast } from 'react-toastify';


const CardUI = ({item}) => {
   const [added, setAdded] = useState(false);
  
    const handleAdd = () => {
      setAdded(true);
      toast(`${item.name} added!`);
    };
  return (
    <div>
 <div className="relative p-2 border rounded-md shadow-lg ">
      <div className='flex flex-col justify-around gap-6 '>
      <img src={item.image} alt={item.name} className="object-cover w-full rounded-lg h-52 " />
         <div className='flex flex-col '>
           <h3 className="mt-1 mb-1 font-serif text-lg font-semibold">{item.name}</h3>
      {item.description && <p className="font-serif text-sm font-semibold text-gray-800">{item.description}</p>}
      {item.price && <p className="mt-1 mb-2 text-sm font-bold">{item.price}</p>} 

      <button
        onClick={handleAdd}
        disabled={added}
        className={`mt-3 px-6 py-2  rounded-xl font-serif text-lg font-bold absolute right-8 top-36 ${added ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
      >
        {added ? 'Added' : 'Add'}
      </button>
         </div>
     
      
      </div>
     
    </div>
    </div>
  )
}

export default CardUI