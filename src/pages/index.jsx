import React, { useState } from 'react'
import backgroundimg from '../CepromasAssets/Rectangle 5726 (1).png'
import cepromasicon from '../CepromasAssets/CEPROMAS (1).png'
import { useNavigate } from 'react-router-dom'


const Index  = () => {
    const navigate = useNavigate("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     function handleSave(){
        // if(email === "" || password === ""){
        //     alert("please fill in all details")
        // }else{
        //     navigate("/dashboard")
        // }

        navigate("/dashboard")
        
     }
     return (
    <div className='fixed  flex min-h-screen '>
        <div className='w-1/2 lg:block md:block hidden'>
        <img src={backgroundimg} alt="" className='h-screen w-full  ' />
      </div>
        <div className=' lg:m-10 md:mt-[200px] md:mx-5 mt-10 mx-10 w-1/2'>
              <img src={cepromasicon} alt=""  />
              <h3 className='font-semibold my-5 lg:text-5xl md:text-4xl text-2xl'>Sed penatibus massa elementum dictum in odio ipsum pretium.</h3>

              <div className='mt-[40px]'>
                <div>
                <h3>Email Address</h3>
                <input type="email" 
                className='lg:w-[382px] md:w-[382px] w-[300px] h-[60px] pl-2 border-2 outline-none rounded-2xl'
                 placeholder='Email-address' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='my-5'>
                <h3>Password</h3>
                <input type="password" 
                className='lg:w-[382px] md:w-[382px] w-[300px] h-[60px] pl-2 border-2 outline-none rounded-2xl'
                placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}  />
                
                </div>

                <div className='bg-[#192252] h-[60px] lg:w-[470px] md:w-[350px] w-[200px] text-white rounded-3xl text-center pt-4 cursor-pointer' onClick={handleSave}>Sign in</div>
              </div>
        </div>
      
    </div>
  )
}

export default Index
