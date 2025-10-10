import React, { useState } from 'react'
import paymenticon from '../CepromasAssets/payment icon.png'
import energyicon from '../CepromasAssets/energy icon.png'
import { Link } from 'react-router-dom'

const Pricingplanthree = () => {
 const [subscription, setSubscription] = useState("");
    const [billing, setBilling] = useState("");
    const [country, setCountry] = useState("");
    const [number, setNumber] = useState("");
  
    const [usagelimit, setUsagelimit] = useState("");
  
    function handleCreate(){
      if (subscription !== ""   || billing !== ""  || country  !== "" || number !== "" || usagelimit !== ""){
       
       console.log(subscription);
       console.log(billing);
       console.log(country);
       console.log(number);
       console.log(usagelimit);
       
       
       
       
       
      } else{
        alert("fil out all details")
      }
    }
  return (
    <div className='border-2 min-h-screen p-10 fixed inset-0 bg-black bg-opacity-50 z-50'>
    <div className='bg-white justify-self-center lg:w-[700px] md:w-[700px] w-[300px] lg:h-[500px] md:h-[500px] h-[550px] rounded-2xl  '>
        <h3 className='font-bold p-10'> Editing Price Plan</h3>
   
     <div>
     <div className='flex pl-10 mt-5'>
        <h3>Name <span className='text-[red]'>*</span></h3>
    </div>
    <div className='lg:w-[610px] md:w-[610px] w-[250px] h-[40px] rounded-sm border-2 border-gray ml-10 mt-2 '>
  <input type="text" className='outline-none pl-2 pt-1' placeholder="Silver Subscription"     onChange={(e)=>{setSubscription(e.target.value)}} />
    </div>
     </div>
     <div>
     
    <div className='lg:flex md:flex grid gap-2 mt-5'>
    <div className=' ml-10 ' >
       <div>
       <h3>Price <span className='text-[red]'>*</span></h3>
       </div>
       <div className='flex  p-2 gap-2 lg:w-[280px] md:w-[280px] w-[250px] h-[40px] rounded-sm border-2 border-gray  mt-2  '>
     
       <div className='w-[60px] h-[20px] border-r-2 outline-none '><select name="" id="" className='outline-none' onSelect={(e)=>setCountry(e.target.value)} >
       <option value="" >EU</option>
        <option value="" >USD</option>
        <option value="" >NAIRA</option>
        </select></div>
        <input type="text" className='w-[196px] h-[20px] outline-none' placeholder='30' onChange={(e)=>{setNumber(e.target.value)}}/>
       </div>
    </div>
    <div className=' mx-10 ' >
       <div>
       <h3>Billing period <span className='text-[red]'>*</span></h3>
       </div>
       <div className='flex  p-2 gap-2 lg:w-[280px] md:w-[280px] w-[250px] h-[40px] rounded-sm border-2 border-gray  mt-2  '>    
       
        <input type="number" className='lg:w-[186px] md:w-[186px] w-[150px] h-[20px] border-r-2' placeholder='30' onChange={(e)=>{setBilling(e.target.value)}} />
        <h3 className='w-[5 0px]  text-center'>Months</h3>
       </div>
    </div>
    </div>
    <div className='flex gap-1'>
      <input type="checkbox" name="" id="" className='bg-[navy] ml-10 mt-5'  onChange={(e)=>{setUsagelimit(e.target.value)}} />
      <h3 className='mt-5 font-semibold'>Add usage limit</h3>
    </div>
    <input type="text" className='h-[40px] lg:w-[610px] md:w-[610px] w-[250px] ml-10 border-2 pl-2' placeholder='30' />
    <button className='text-center font-bold text-white  bg-[navy] lg:w-[612px] md:w-[612px] w-[252px] cursor-pointer h-[40px] ml-10 mt-5  rounded-md p-2' onClick={handleCreate}>
   create
    </button>
     </div>
    </div>
    </div>
  )
}

export default Pricingplanthree
