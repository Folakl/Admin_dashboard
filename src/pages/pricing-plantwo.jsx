import React, { useState } from 'react'
import paymenticon from '../CepromasAssets/payment icon.png'
import energyicon from '../CepromasAssets/energy icon.png'
import { Link } from 'react-router-dom'

const Pricingplantwo = () => {
  const [name , setName] = useState("");
  const [price, SetPrice] = useState("");
  const [duration, SetDuration] = useState("");

  const [days,Setdays] = useState("")

  function handleSave(){
    if (name !== "" || price !== "" || duration !== "" || days !== ""){
      console.log(name);
      console.log(price);
      console.log(duration);
      
    console.log(days);
    } else{
      alert("fil out all details")
    }
  }

  return (
    <div className='bg-black min-h-screen p-10'>
    <div className='bg-white justify-self-center lg:w-[700px] md:w-[700px] w-[300px] h-fit rounded-2xl py-2 '>
        <h3 className='font-bold p-10'> Editing Price Plan</h3>
    <div className='lg:flex md:flex grid  lg:gap-10 md:gap-10 gap-5  pl-10'>
       <div className='lg:w-[288px] md:w-[288px] w-[250px] h-fit bg-[#3658C90A] p-5' >
           <img src={paymenticon} alt="" />
           <h3 className='font-semibold pt-3'>One-Time payment</h3>
           <h3>Charge users a one-time payment fee to access the content</h3>
      
       </div>
       <div className='lg:w-[288px] md:w-[288px] w-[250px] h-fit bg-[white] border-2 border-gray-50 p-5'>
      <div className='w-[40px] h-[40px] bg-[#F5F8FD] flex justify-center items-center'>
      <img src={energyicon} alt="" />
      </div>
       <h3 className='font-semibold pt-3'>Membership</h3>
       <h3>Split the full bundle price over several monthly payments</h3>
       </div>
     </div>
   
     <div>
     <div className='flex pl-10 mt-5'>
        <h3>Name <span className='text-[red]'>*</span></h3>
    </div>
    <div className='lg:w-[610px] md:w-[610px] w-[250px] h-[40px] rounded-sm border-2 border-gray ml-10 mt-2 '>
        <input type="text" className='outline-none pl-2 pt-1' placeholder="Pro Subscription"  onChange={(e)=>{setName(e.target.value)}} />
    </div>
     </div>
     <div>
     
    <div className='lg:flex md:flex grid  mt-5'>
    <div className=' ml-10 ' >
       <div>
       <h3>Price <span className='text-[red]'>*</span></h3>
       </div>
       <div className='flex  p-2 gap-2 lg:w-[280px] md:w-[280px] w-[240px] h-[40px] rounded-sm border-2 border-gray  mt-2  '>
     
       <div className='w-[60px] h-[20px] border-r-2 outline-none'><select name="" id="" >
          <option value="" >EU</option>
          <option value="" >USD</option>
          <option value="" >NAIRA</option>
        </select></div>
        <input type="text" className='w-[196px] h-[20px] outline-none' placeholder='30' onChange={(e)=>{SetPrice(e.target.value)}} />
       </div>
    </div>
    <div className=' mx-10 ' >
       <div>
       <h3>Enrollment Duration</h3>
       </div>
       <div className='flex  p-2 gap-2 lg:w-[290px] md:w-[290px] w-[250px]  h-[40px] rounded-sm border-2 border-gray  mt-2  '>
     
       
        <input type="number" className='lg:w-[186px] md:w-[186px] w-[170px] h-[20px] border-r-2' placeholder='30' onChange={(e)=>{SetDuration(e.target.value)}} />
        <h3 className='w-[5 0px]  text-center'>Months</h3>
       </div>
    </div>
    </div>
    <div className='flex gap-1'>
      <input type="checkbox" name="" id="" className='bg-[navy] ml-10 mt-5' />
      <h3 className='mt-5 font-semibold'>Change a setup fee</h3>
    </div>
    <div className='flex gap-1'>
      <input type="checkbox" name="" id="" className='bg-[navy] ml-10 mt-5' />
      <h3 className='mt-5 font-semibold'>Add usage limit</h3>
    </div>
    <div className='flex gap-1'>
      <input type="checkbox" name="" id="" className='bg-[navy] ml-10 mt-5' />
      <h3 className='mt-5 font-semibold'>This plan has a trial period</h3>
    </div>
   <div className='lg:flex md:flex grid  gap-2'>
    <input type="text" className='h-[40px] lg:w-[290px] md:w-[290px] w-[250px] ml-10 border-2 pl-2 outline-none' placeholder='30' />
    <select name="" className='h-[40px] lg:w-[290px] md:w-[290px] w-[250px] ml-10 border-2 pl-2 outline-none'  id="" onChange={(e)=>{Setdays(e.target.value)}}>
    <option value="">Days</option>
    <option value="">Month</option>
    <option value="">Years</option>
    </select>
    </div>
    <div className='text-center font-bold text-white  bg-[navy] lg:w-[612px] md:w-[612px] w-[252px] cursor-pointer h-[40px] ml-10 mt-5  rounded-md p-2' onClick={handleSave}>
    Save 
    </div>
     </div>
    </div>
    </div>
  )
}

export default Pricingplantwo 
