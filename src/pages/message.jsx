import React from 'react'

const Message = () => {
  return (
    <div className=' min-h-screen p-10 fixed inset-0 bg-black bg-opacity-50 z-50   '>
      <div className='justify-self-center bg-white border-2 lg:h-[420px] md:h-[420px] h-[530px]  lg:w-[400px] md:w-[400px] w-[320px] rounded-3xl p-10'>
       <h3>10:00am</h3>
       <h3 className='pt-3'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo dicta facere  odio error?
       </h3>
       <h3 className='py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatem, laboriosam iste error repellendus doloribus alias necessitatibus doloremque voluptates quos!</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore harum sunt beatae repellendus iste quo ratione distinctio ut nobis eaque.</h3>
     
 
     <h3 className='font-bold  text-[#0E1D70]'>Sent by : <span className='text-black font-normal'>Adeolu Adeola (Admin, HiZuma)</span></h3>
    
    
      </div>
     
    </div>
  )
}

export default Message
