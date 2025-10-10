import React, {useState} from 'react'
import Decline from './decline'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import image from '../CepromasAssets/image4.png'
import imagetwo from '../CepromasAssets/BG (2).png'
import imagethree from '../CepromasAssets/Group 482201.png'
import imagefour from "../CepromasAssets/BG (1).png"
import imagefive from "../CepromasAssets/image three.png"
import bedicon from  '../CepromasAssets/Bed Icon.png'
import bathicon from '../CepromasAssets/Bath Icon.png'
import sqft from '../CepromasAssets/Frame 72 (1).png'
import kitchenicon from '../CepromasAssets/Build Icon.png'
import packicon from '../CepromasAssets/Parking Icon.png' 
import homeicon from '../CepromasAssets/property.png' 
import whitespace from '../CepromasAssets/whitecheck.png'
import propertyone from '../CepromasAssets/glass house.png'
import propertytwo from '../CepromasAssets/Rectangle 5729.png'
import propertythree from '../CepromasAssets/Rectangle 5727 (1).png'
import propertyfour from '../CepromasAssets/broken glass.png'
import propertyfive from '../CepromasAssets/image2.png'
import propertysix from '../CepromasAssets/Rectangle 5727 (4).png'
import { Link } from 'react-router-dom'
import Approveproperty from './approveproperty'






const Propertiesdetails = () => {

 const [showoverlay, setShowoverlay]  = useState(false)
 const [showoverlaytwo, setShowoverlaytwo]  = useState(false)
   

 const handleApprove = ()=>{
  setShowoverlay(true)
 }
 const handleDecline = ()=>{
  setShowoverlaytwo(true)
 }
 
 const closeOverlay = ()=>{
  setShowoverlay(false)
  setShowoverlaytwo(false)
 }




  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] relative lg:left-[205px] md:left-[100px] left-[50px]'>
       <Admin/>
    <div className='m-8'>
        <h3 className='font-bold'>Properties Details</h3>

         <div className='bg-white lg:flex md:grid grid gap-5 rounded-md   p-2'>
        <div className=' border-r-2 p-2'>
        <div className='lg:flex md:grid grid gap-5'>
              <div className='flex gap-2 '>
               <div>
               <img src={image} alt="" className='rounded-md  lg:w-[426px] md:w-[426px] w-[280px] h-[277px]' />
                <div className=' grid lg:grid-cols-4 md:grid-cols-4 grid-cols-3 gap-2 mt-5'>
                  <img src={imagefive} alt=""  className='lg:w-[98px] md:w-[98px] w-[90px]  h-[70px]' />
                  <img src={imagefour} alt=""  className='lg:w-[98px] md:w-[98px] w-[90px] h-[70px]'/>
                  <img src={imagetwo} alt=""  className='lg:w-[98px] md:w-[98px] w-[90px] h-[70px]'/>
                  <img src={imagethree} alt=""  className='lg:w-[98px] md:w-[98px] w-[90px] h-[70px]'/>
                 
                </div>
               </div>
               <div>
              
               </div>
              </div>
              <div>
                <h3 className='font-semibold text-2xl'>NGN 5,000,000/Year</h3>
                <div className='flex gap-2 my-4'>
                    <h3>location</h3>
                    <h3>Lekki Phase 1, Lagos</h3>
                </div>
                <h3 className='border-2 border-[#FF5A3C] text-[#FF5A3C] w-[83px] h-[30px] text-center rounded-2xl  '>
                    Share
                </h3>

                <h3 className='mt-4'>Overview</h3>
                     {/* overview */}
                <div className='grid grid-cols-2 lg:pr-0 md:pr-0 pr-10'>
                  <div className='flex gap-3'>
                    <img src={bedicon} alt="" className='w-[30px] h-[30px] border-2 p-1 rounded-full'/>
                    <div>
                      <h3>Bedroom</h3>
                      <h3>4</h3>
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <img src={homeicon} alt="" className='w-[30px] h-[30px] border-2 p-1 rounded-full' />
                    <div>
                      <h3>Type</h3>
                      <h3>Home</h3>
                    </div>
                  </div>
                  <div className='flex gap-3 text-[#FF5A3C]'>
                    <img src={bathicon} alt="" className='w-[30px] h-[30px] border-2 p-1 rounded-full bg-[#FF5A3C]' />
                    <div>
                      <h3 >Bath</h3>
                      <h3>3</h3>
                    </div>
                  </div>
                  <div className='flex gap-3 '>
                    <img src={packicon} alt="" className='w-[30px] h-[30px] border-2 p-1 rounded-full' />
                    <div>
                      <h3 >Parking</h3>
                      <h3>yes</h3>
                    </div>
                  </div>
                 
                  <div className='flex gap-3 '>
                    <img src={sqft} alt="" className='w-[30px] h-[30px] p-1 rounded-full' />
                    <div>
                      <h3 >Sqft</h3>
                      <h3>$200</h3>
                    </div>
                  </div>
                  <div className='flex gap-3 '>
                    <img src={kitchenicon} alt="" className='w-[30px] h-[30px] border-2 p-1 rounded-full' />
                    <div>
                      <h3 >Kitchen</h3>
                      <h3>3</h3>
                    </div>
                  </div>
                  <div className='flex gap-3 '>
                    <img src={sqft} alt="" className='w-[30px] h-[30px]  p-1 rounded-full' />
                    <div>
                      <h3 >Wifi</h3>
                      <h3>26/7</h3>
                    </div>
                  </div>
                  <div className='flex gap-3 '>
                    <img src={kitchenicon} alt="" className='w-[30px] h-[30px] border-2 p-1 rounded-full' />
                    <div>
                      <h3 >Balcony</h3>
                      <h3>1</h3>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          
            <div>
            <div className="mt-5">
            <h3 className='font-semibold'>APARTMENT</h3>
            <h3 className='font-bold text-[#0E0F3B]'>Two-Storey-Building</h3>
            <h3 className='mt-3 font-bold text-[#0E0F3B]'>Description</h3>
           </div>

          <div className="lg:w-[680px] md:w-[570px] w-[280px] ">
            <h3 className='py-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam doloribus cumque explicabo minus, voluptatem illum earum distinctio quia officia laudantium!  
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut soluta aliquid ratione iure voluptatibus iusto consequuntur velit possimus sed maiores.
              
            </h3>
            <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem explicabo laboriosam, quam ullam reiciendis dolorem dicta maxime aut obcaecati iure deserunt fugit sed expedita. Nulla possimus minus laudantium est et?
            </h3>
            <h3>
                
            </h3>
          </div>
          <div className='mt-[50px] lg:flex md:flex grid gap-2'>
            <h3 className='bg-[#192252] w-[200px] h-[52px] rounded-3xl text-white text-center p-3 cursor-pointer' onClick={handleApprove}>
            Approve
            </h3>
            <h3 className='bg-[#192252] w-[200px] h-[52px] rounded-3xl text-white text-center p-3 cursor-pointer' onClick={handleDecline}>
            Decline
            </h3>
          </div>
            </div>
            

        </div>
           {/* owners details */}
        <div className='mt-5  w-full' >
          <div className='lg:justify-self-center md:justify-self-center justify-self-start text-center'>
          <h3 className=' font-bold'>Owners Details</h3>
          <img src={whitespace} alt="" className='mt-5 justify-self-center' />
          <h3 className='font-bold'>Jane Peters</h3>
          <h3 className='mb-4'>AGENT</h3>
           <div className='flex gap-2 justify-self-center'>
            <div className='mb-5'>
                   <ion-icon name="location-outline"></ion-icon></div>
           <h3 >Lekki Phase 1, Lagos</h3>
           </div>
           <h3 className='font-semibold'> 20 properties</h3>
            <div className='flex  lg:gap-5 md:gap-5 gap-2  my-10 font-semibold lg:justify-self-center md:justify-self-center justify-self-start'>
            <Link to ="/chats" className ='w-[145px] h-[48px] cursor-pointer rounded-3xl text-[#192252] border-2 d border-black text-center p-2 '> Chat with Agent</Link>
            <Link to ="/ownersDetails" className='w-[145px] h-[48px] cursor-pointer rounded-3xl text-[#192252] border-2  border-black text-center p-2 '> View profile</Link>
            </div>

              <h3 className='mb-2'>More properties from Agents</h3>

             <div className='grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2  gap-5 lg:pr-0 md:pr-0 pr-4 '>
              <img src={propertyone} alt=""   className='lg:w-[156px] md:w-[156px] w-[130px] h-[119px]' />
              <img src={propertytwo} alt=""   className='lg:w-[156px] md:w-[156px] w-[130px] h-[119px]' />
              <img src={propertythree} alt="" className='lg:w-[156px] md:w-[156px] w-[130px] h-[119px]' />
              <img src={propertyfour} alt=""  className='lg:w-[156px] md:w-[156px] w-[130px] h-[119px]' />
              <img src={propertyfive} alt=""  className='lg:w-[156px] md:w-[156px] w-[130px] h-[119px]' />
              <div className='relative'>
              <img src={propertysix} alt=""  className='lg:w-[156px] md:w-[156px] w-[130px] h-[119px]' />
              <h3 className='text-center font-semibold text-2xl text-white absolute top-10 left-5'>+10 more</h3>
              </div>

             </div> 
          



          </div>
        
        </div>
     
        </div>
   

     </div>
      </div>
      <div  onClick={closeOverlay}  >
           {showoverlay && <Approveproperty/>}
      </div>
      <div  onClick={closeOverlay} >
           {showoverlaytwo && <Decline/>}
      </div>
    </div>
  )
}

export default Propertiesdetails
