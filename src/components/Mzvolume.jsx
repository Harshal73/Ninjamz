import React from 'react'
import ninja2 from "../assets/mzvolumeprofile.png";

const Mzvolume = () => {
  return (
    <div
      name="products"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800
    text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold ">Mz Volume Profile</p>
        </div>
        <div className="mt-10">
          <img
            src={ninja2}
            alt="ninja2"
            className="h-50 w-100 mx-auto  md:w-full "
          />
        </div>
        <br />
        <p>
        Custom ranged, preconfigured periodic profiles (Session, Bar, Bars (each N bars), Daily, Weekly, Monthly, Quarterly, Yearly) and Composite profiles.
        Full ladders and volume profile statistics: Total volume, bid/ask volume, POC/dPOC, VAH/VAL/dVAH/dVAL, Delta
        </p>
    
           <div className="text-blue-600" >
           <a href="https://www.mzpack.pro/product-category/ninjatrader-8-indicators/" >Check the official pricing</a>
           </div>    
      </div>
    </div>
  )
}

export default Mzvolume