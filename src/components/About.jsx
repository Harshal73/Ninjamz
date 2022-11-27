import React from 'react'

const About = () => {
  return (
    <div name='pricing' className='w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800
    text-white' >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
        <div>
        <p className='text-4xl font-bold inline border-b-4 border-gray-300 '>Pricing</p>
      </div>
        <br/>
       <h1 className='text-4xl font-bold' >Ninjatrader + Orderflowfootprints : 10000 Rs or 122 usd /-</h1>
       <h1 className='text-4xl font-bold pt-10 '>Mzpack : 3999rs or 48 usd /-</h1>
       <h1 className='text-4xl font-bold pt-10'>Neurostreet: 4999rs or 61 usd /-</h1>
       
       <div className='flex flex-col pt-10' >
        <h1 className='text-2xl font-bold pb-10' >Explanation video Malayalam</h1>
       <iframe width="350" height="215"  src="https://www.youtube.com/embed/CCHdMIEGaaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
       <div className='pt-10' >
       <iframe width="350" height="215" src="https://www.youtube.com/embed/ySLc8gZ3oEc" title="YouTube video play" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
       
    </div>
    
    </div>
  )
}

export default About