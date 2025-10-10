import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import kunle from '../CepromasAssets/Kunle.png'
import group1 from "../CepromasAssets/istock.png"
import threedot from '../CepromasAssets/ri_more-2-line.png'
import Suspend from './suspend'
import { useNavigate } from 'react-router-dom'


const RentersDetails = () => {
  const [showOverlay, SetShowOverlay] =useState(false)
  const navigate = useNavigate();

  const handleOverlay=()=>{
    SetShowOverlay(true)
  }
  const CloseOverlay =()=>{
   SetShowOverlay(false)
  }
  const handleSend =  ()=>{
    navigate("/tenant-chats")
  }
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] relative min-h-screen lg:left-[225px] md:left-[100px] left-[30px] '>
       <Admin/>
       <div className='px-10 pt-5 bg-[#FAFAFA] '>
        <h1 className='font-semibold'> Renter's Details</h1>
       <div className='bg-white rounded-2xl mt-5 p-10 lg:h-[745px] md:h-full h-full  lg:w-[1108px] md:w-[600px] w-[800px] '>
         
         <div>
          <img src={group1} alt="" className='relative lg:w-full md:w-[640px] w-[250px]  lg:h-full md:h-[200px] h-[100px]' />
          <img src={kunle} alt="" className='absolute lg:top-[320px] md:top-[320px] top-[250px] left-[100px] lg:w-[200px] md:w-[190px] w-[90px] ' />
          <div className='absolute lg:ml-[230px] md:ml-[230px] ml-[110px]'>
            <h3 className='lg:text-3xl md:text-3xl text-md font-bold'>Clement Josh</h3>
            <h3 className='md:text-md lg:text-md text-sm '>Chief Finance Analyst</h3>
            <h3 className='text-[#FE8C07] font-bold md:text-md lg:text-md text-sm'>Property acquired: 04 </h3>
          </div>
          <div className='lg:ml-[970px] md:ml-[600px] ml-[245px] flex lg:gap-3 md:gap-3 gap-0'>
            <div className='mt-5 cursor-pointer ' onClick={handleSend}>
              <ion-icon name="send-outline" h-5 w-5></ion-icon>
            </div>
          
          <img src={threedot} alt="" className=' mt-5 cursor-pointer' onClick= {handleOverlay} />
          </div>
          
         </div>

         <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10  mt-16  '>
            <div className=' lg:w-[300px] md:w-[280px] w-[250px] h-[91px]  p-5 rounded-md shadow-[0_15px_10px_#7090B01F]'>
              <h3>First Name</h3>
              <h3 className='font-semibold'>Clement</h3>

            </div>
            <div className='lg:w-[300px] md:w-[280px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md'>
              <h3>Gender</h3>
              <h3 className='font-semibold'>Male</h3>

            </div>
            <div className='lg:w-[300px] md:w-[280px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md '>
              <h3>Address</h3>
              <h3 className='font-semibold'>35820 11th Street, Dothan 97393-0152</h3>

            </div>
            <div className='lg:w-[300px] md:w-[280px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md'>
              <h3>Last Name</h3>
              <h3 className='font-semibold'>josh</h3>

            </div>
            <div className='lg:w-[300px] md:w-[280px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md'>
              <h3>Marital Status</h3>
              <h3 className='font-semibold'>Single</h3>

            </div>
            <div className='lg:w-[300px] md:w-[280px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md'>
              <h3>Phone Number</h3>
              <h3 className='font-semibold'>+234 900 111 2222</h3>

            </div>
            <div className='lg:w-[300px] md:w-[280px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md'>
              <h3>Birthday</h3>
              <h3 className='font-semibold'>31st Jan., 1900</h3>

            </div>
            <div className='lg:w-[300px] md:w-[280px] w-[250px] h-[91px] shadow-[0_15px_10px_#7090B01F] p-5 rounded-md'>
              <h3>Email</h3>
              <h3 className='font-semibold'>joshclement@gmail.com</h3>

            </div>
            

          </div>
        </div>
       
       
    
        

         
      
      </div>
      </div>
       <div  onClick={CloseOverlay} >
                 {showOverlay && <Suspend/>}
              </div>
    </div>
  )
}

export default RentersDetails
