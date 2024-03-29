import React from 'react'



const Cards = ({team,animation, paragraph,img}) => {
  return (
    <div className="hover:scale-105 duration-300">
<div
data-aos={animation}
data-aos-duration="3000"
 className="bg-white border border-gray-200 rounded-lg shadow-xl md:h-[300px] "> 
  <img className="rounded-t-lg object-cover md:h-[200px] w-full" src={img} alt="" /> 
  <div className="p-4 ">
    <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#fcbf49] dark:text-white">{team}</h3>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{paragraph}</p>
  </div>
</div>
</div>


  )
}

export default Cards