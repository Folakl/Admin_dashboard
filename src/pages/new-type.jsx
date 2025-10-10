import React, { useState } from 'react'


const NewType = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  function handleAdd(){
   console.log(name);
   console.log(description);

   if(name === "" || description === ""){
          alert("pls fill out all details")
   }else{
    console.log(name);
    console.log(description);
   }
   
   
  }
  return (
   <div className=' py-5 min-h-screen fixed inset-0 bg-black bg-opacity-50 z-50'>
      <div className='bg-white lg:w-[450px] md:w-[450px] w-[330px] h-[480px] p-5 border-2  justify-self-center'>
     <h3>Add new type</h3>
     <div className='mt-10'>

          <div > 
            <h3>type</h3>
            <input type="text"
            placeholder="input" className='lg:w-[400px] md:w-[400px] w-[280px] h-[70px] pl-2 rounded-2xl  border-gray border-2 outline-none '
            onChange={(e)=>{setName(e.target.value)}}
            />
          </div>
          <div className='mt-5' > 
            <h3>Type Description</h3>
            <input type="text"
            placeholder="input" className='lg:w-[400px] md:w-[400px] w-[280px] h-[150px] pl-2 rounded-2xl  border-gray border-2 outline-none '
            onChange={(e)=>{setDescription(e.target.value)}} />
          </div>
     </div>
     <div className='w-[150px] h-[50px] py-3 mt-10 rounded-3xl text-center font-bold bg-[#192252] text-white cursor-pointer' onClick={handleAdd}>
        Add
     </div>
      
    </div>
   </div>
    
  )
}

export default NewType
