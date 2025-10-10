import React, { useState } from 'react'


const Newcategory = () => {
  const [name, setName] = useState("")
      const [description, setDescription] = useState("")
    
      function handleAdd(){
       if(name === "" ||  description === ""){
        alert("pls fill out all details")
       }
       else{
        console.log(name);
       console.log(description);
       
       }
       
      }

  return (
   <div className=' py-5 min-h-screen fixed inset-0 bg-black bg-opacity-50 z-50'>
      <div className='bg-white lg:w-[450px] md:w-[450px] w-[330px] border-2 h-[520px] p-5  justify-self-center'>
     <h3>Add new category</h3>
     <div className='mt-10'>

          <div > 
            <h3>Category name</h3>
            <input type="text"
            placeholder="input" className='lg:w-[400px] md:w-[400px] w-[280px] h-[70px] pl-2 rounded-2xl  border-gray border-2 outline-none ' onChange={(e)=>{setName(e.target.value)}} />
          </div>
          <div className='mt-10' > 
            <h3>Category Description</h3>
            <input type="text"
            placeholder="input" className='lg:w-[400px] md:w-[400px] w-[280px]  h-[150px] pl-2 rounded-2xl  border-gray border-2 outline-none ' onChange={(e)=>{setDescription(e.target.value)}} />
          </div>
     </div>
     <div className='w-[150px] h-[60px] py-5 mt-10 rounded-3xl text-center font-bold bg-[#192252] text-white cursor-pointer' onClick={handleAdd}>
        Add
     </div>
      
    </div>
   </div>
    
  )
}

export default Newcategory
