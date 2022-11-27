import React from 'react'
import ninja3 from "../assets/mzBigtrades.png";

const Mzbigtrades = () => {
  return (
    <div
    name="products"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800
  text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div>
        <p className="text-4xl font-bold ">Mz BigTrades</p>
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
      Tape Reconstruction
Filtering by: Trade size (min/max), Iceberg order size, DOM pressure (min/max), DOM support (min/max) with ANY/ALL combination
Auto-filtered order flow
Extra filters: Aggressive trades (initiative/stop runs) and Smart/Predatory trades
Two algorithms for Iceberg orders searching: Hard and Soft
Liquidity pushing/pulling indication
Market-Limit orders search
Variety of trades visualization: Stacked Tape, Bubble, Box, Bar, Line
Pop-up hints with detailed trade information
      </p>
      
         <div className="text-blue-600" >
         <a href="https://www.mzpack.pro/product-category/ninjatrader-8-indicators/ " >Check the official pricing</a>
         </div>
        
      

       
    </div>
  </div>
  )
}

export default Mzbigtrades