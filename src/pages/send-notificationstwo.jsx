import React, { useState } from 'react'


const Sendnotificationstwo = () => {
     const [title, setTitle] = useState("");
     const [description, setDescription ] = useState("");

   function handleSend(){
    if(title !== "" , description !== ""){
      console.log(title, description);
      
  } 
  else{alert("pls kindly fill all details")}
   }
  return (
    <div className='bg-black py-5 h-full'>
      <div className=' w-[600px]  h-[600px] bg-white p-10 justify-self-center ' >
      <div className='flex justify-between  '>
        <h3 className='text-2xl font-bold'> Send Notifications</h3>
        <div>
        <ion-icon name="close-outline"  className="w-[10px] h-[10px]"></ion-icon>
        </div>
     </div>
     <div className='mt-10'>

          <div > 
            <h3>Message Title</h3>
            <input type="text"
            placeholder="Title" className='w-[521px] h-[50px] pl-2 rounded-2xl text-center border-gray border-2 outline-none '       onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div > 
            <h3>Description</h3>
            <input type="text"
            placeholder="Description" className='w-[521px] h-[120px] pl-2 rounded-2xl text-center border-gray border-2 outline-none '       onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <div > 
            <h3> Recipients </h3>
            <div className='flex gap-2 my-3'>
            <input type="checkbox" name="" id=""  />
            <h3>Everyone</h3>
            </div>
            <div className='flex gap-2 my-3'>
            <input type="checkbox" name="" id=""  />
            <h3>Seller</h3>
            </div>
            <div className='flex gap-2 my-3'>
            <input type="checkbox" name="" id=""  />
            <h3>Renter</h3>
            </div>
          </div>

         <button className='w-[258px] h-[50px]  text-white bg-[#192252] font-bold  mt-[80px] cursor-pointer text-center p-3  rounded-3xl' onClick={handleSend}>
         Send

         </button>
     </div>

      
    </div>
    </div>
  )
}

export default Sendnotificationstwo
