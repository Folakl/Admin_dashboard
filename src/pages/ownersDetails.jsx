import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import group1 from "../CepromasAssets/Istocktwo.png"
import threedot from '../CepromasAssets/ri_more-2-line.png'
import Victoria from '../CepromasAssets/victoria.png'
import Suspend from './suspend'
import { useNavigate } from 'react-router-dom'


const OwnersDetails = () => {
  const [showOverlay, setShowOverlay] =  useState(false)
  const navigate = useNavigate()
  const handleOverlay=() =>{
    setShowOverlay(true)

  }
  const closeOverlay=()=>{
    setShowOverlay(false)
  }
  const handleSend = ()=>{
    navigate("/chats")
  }
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] min-h-screen relative lg:left-[225px] md:left-[100px] left-[30px]'>
       <Admin/>
       <div className='px-10 pt-5 bg-[#FAFAFA] '>
        <h1 className='font-semibold'> Owner's Details</h1>
       <div className='bg-white rounded-2xl mt-5 p-10 h-[745px] w-[1108px] '>
         <div>
          <img src={group1} alt="" className='relative lg:w-full md:w-[640px] w-[250px]  lg:h-full md:h-[200px] h-[100px]' />
          <img src={Victoria} alt="" className='absolute lg:top-[320px] md:top-[320px] top-[250px] left-[100px] lg:w-[200px] md:w-[190px] w-[90px] ' />
          <div className='absolute lg:ml-[230px] md:ml-[230px] ml-[110px]'>
            <h3 className='lg:text-3xl md:text-3xl text-md font-bold'>Clark Victoria</h3>
            <h3 className='md:text-md lg:text-md text-sm '>Product Designer</h3>
            <h3 className='text-[#FE8C07] font-bold md:text-md lg:text-md text-sm'> 30 Properties </h3>
          </div>
          <div className='lg:ml-[970px] md:ml-[600px] ml-[245px] flex  lg:gap-3 md:gap-3 gap-0'>
            <div className='mt-5 cursor-pointer ' onClick={handleSend}>
              <ion-icon name="send-outline" h-5 w-5></ion-icon>
            </div>
          
          <img src={threedot} alt="" className=' mt-5 cursor-pointer' onClick= {handleOverlay} />
          </div>
          
         </div>

         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10   lg:mt-[100px] md:mt-[100px] mt-[50px] lg:min-w-full md:w-[620px]  '>
            <div className='lg:w-[300px] md:w-[300px] w-[250px] h-[91px]  p-5 rounded-md shadow-[0_15px_10px_#7090B01F]'>
              <h3>First Name</h3>
              <h3 className='font-semibold'>Victora</h3>

            </div>
            <div className='lg:w-[300px] md:w-[300px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md'>
              <h3>Gender</h3>
              <h3 className='font-semibold'>Female</h3>

            </div>
            <div className='lg:w-[300px] md:w-[300px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md '>
              <h3>Address</h3>
              <h3 className='font-semibold'>35820 11th Street, Dothan 97393-0152</h3>

            </div>
            <div className='lg:w-[300px] md:w-[300px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md'>
              <h3>Last Name</h3>
              <h3 className='font-semibold'>Clark</h3>

            </div>
            <div className='lg:w-[300px] md:w-[300px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md'>
              <h3>Marital Status</h3>
              <h3 className='font-semibold'>Single</h3>

            </div>
            <div className='w-[300px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md'>
              <h3>Phone Number</h3>
              <h3 className='font-semibold'>+234 900 111 2222</h3>

            </div>
            <div className='lg:w-[300px] md:w-[300px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md'>
              <h3>Birthday</h3>
              <h3 className='font-semibold'>30 10, 2000</h3>
pr
            </div>
            <div className='lg:w-[300px] md:w-[300px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md'>
              <h3>Email</h3>
              <h3 className='font-semibold'>victoriaaccc@gmail.com</h3>

            </div>
            

          </div>
        </div>
       
       
    
        

         
      
      </div>
      </div>
       <div onClick={closeOverlay} >
           {showOverlay && <Suspend/>}
        </div>
    </div>
  )
}

export default OwnersDetails
