import React from 'react';
import { ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from './components/ProductCard';
import { topSectionData, feachedData } from './data.js';
import CardUI from './components/CardUI.jsx';

const App = () => {
  return (
   <div>
     <div className="p-4 py-5 ">
      <h2 className="mb-2 font-serif text-xl font-bold text-center">Based on your search</h2>
      <div className="grid grid-cols-3 gap-6 p-4 mb-6">
        {topSectionData.map(item => <ProductCard key={item.id} item={item} />)}
      </div>

      

      <ToastContainer position="top-left" autoClose={3000} />
    </div>
    <div>
      <h2 className="px-10 mb-2 font-serif text-xl font-bold text-center">Featured Items</h2>
      <div className="grid grid-cols-4 gap-4 px-10">
        {feachedData.map(item => <CardUI key={item.id} item={item} />)}
      </div>
    </div>
   </div>
  );
};

export default App;