import React from 'react'
import ns7 from "../assets/nsgoldfib.png";

const Nsgoldfib = () => {
  return (
    <div
    name="products"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800
  text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div>
        <p className="text-4xl font-bold ">Nuerostreets Goldenfib</p>
      </div>
      <div className="mt-10">
        <img
          src={ns7}
          alt="nss7"
          className="h-50 w-100 mx-auto  md:w-full "
        />
      </div>
      <br />
      
      
         
     
    </div>
  
  </div>
  )
}

export default Nsgoldfib
