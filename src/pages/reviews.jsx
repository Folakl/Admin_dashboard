import React from 'react'
import star from '../CepromasAssets/star.png'
import halfstar from '../CepromasAssets/star half.png'

const Review = () => {
  return (
    <div className='min-h-screen p-10'>
       <div className='bg-white lg:w-[400px] md:w-[400px] w-[350px] lg:h-[220px] md:h-[220px] h-[250px] rounded-3xl border-2 justify-self-center p-5'>
        <h3 className= " font-bold">Gideon Peters </h3>
        <div class="flex gap-3 mt-3">
          <img src={star} alt=""  />
          <img src={star} alt=""  />
          <img src={star} alt=""  />
          <img src={star} alt=""  />
          <img src={halfstar} alt="" />

        </div>
        <h3 className='mt-3'>
        Quis sed quis vulputate nec a accumsan viverra cursus. Arcu suspendisse odio sit vitae fermentum.
         Vulputate morbi turpis bibendum nam non arcu. Sagittis libero mauris porttitor elit egestas. Commodo 
         lorem imperdiet morbi nulla imperdiet.
        </h3>
       </div>
    </div>
  )
}

export default Review
