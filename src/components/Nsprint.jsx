import React from 'react'
import ns1 from "../assets/nsprintprofiler.png";

const Nsprint = () => {
  return (
    <div
    name="products"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800
  text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div>
        <p className="text-4xl font-bold ">Nuerostreets Print profiler</p>
      </div>
      <div className="mt-10">
        <img
          src={ns1}
          alt="nss1"
          className="h-50 w-100 mx-auto  md:w-full "
        />
      </div>
      <br />

      
         <div className="text-blue-600" >
         <a href="https://architectsai.com/ " >Check the official pricing</a>
         </div>
     
    </div>
  
  </div>
  )
}

export default Nsprint
