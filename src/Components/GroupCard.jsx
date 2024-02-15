import React from 'react'

const GroupCard = ({name ,animation, description}) => {
  return (
<div data-aos={animation}
    data-aos-duration="3000">
  <div>
    <div className='w-full h-60 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 gold-bg overflow-auto'> 
      <h1 className='text-2xl font-bold text-center py-8'>{name}</h1>
      <div>
        <p className='text-center font-medium mx-8'>{description}</p>
      </div>
    </div>
  </div>
</div>


  )
}

export default GroupCard