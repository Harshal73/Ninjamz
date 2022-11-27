import React from 'react'
import ninja3 from "../assets/mztpo.png";

const Mztpo = () => {
  return (
    
            <div
      name="products"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800
    text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold ">MZ Tpo</p>
        </div>
        <div className="mt-10">
          <img
            src={ninja3}
            alt="ninja3"
            className="h-50 w-100 mx-auto  md:w-full "
          />
        </div>
        <br />
        <p>
         
        TPO or Market Profile with naked/extended levels: Open/Close, High/Low/Mid, IB High/Low, TPO POC/VAH/VAL
        </p>
        
           <div className="text-blue-600" >
           <a href="https://www.mzpack.pro/product-category/ninjatrader-8-indicators/ " >Check the official pricing</a>
           </div>
       
      </div>
    
    </div>
  )
}

export default Mztpo