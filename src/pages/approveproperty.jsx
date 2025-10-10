import React from 'react'

const Approveproperty = () => {
  return (
    <div className=' min-h-screen p-10  bg-black  fixed inset-0  bg-opacity-50 z-50'>
       <div className='bg-white w-[150px] h-[120px] border-2 justify-self-center p-5'>
       <div className="flex gap-2">
       <h3 className='py-3 cursor-pointer'>Approve</h3>
       <div className='mt-4'>
       <ion-icon name="checkmark-outline"></ion-icon>
       </div>
       </div>
       <div className="flex gap-2">
       <h3 className='py-3 cursor-pointer'>Decline</h3>
       <div className='mt-4'>
       <ion-icon name="close-circle-outline"></ion-icon>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Approveproperty
