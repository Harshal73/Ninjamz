import React from "react";
import ninja1 from "../assets/mzfootprint.png";


const Products = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800
    text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold  pt-10 ">NinjaTrader Mz pack pro</p>
        </div>
        <div className="mt-10">
          <img
            src={ninja1}
            alt="ninja"
            className="h-50 w-100 mx-auto  md:w-full "
          />
        </div>
        <br />
        <p>
        MZpack NinjaTrader 8  Indicators are based on analysis of order flow, order book, and market microstructure events.
         MZpack uses all available data from the feeds such as Level I & Level II.
         The indicators’ algorithms include elements of CME MDP 3.0 Market Data specification.
        </p>
        
           <div className="text-blue-600" >
           <a href="https://www.mzpack.pro/product-category/ninjatrader-8-indicators/ " >Check the official pricing</a>
           </div>
           
    
         
      </div>
    </div>
  );
};

export default Products;
