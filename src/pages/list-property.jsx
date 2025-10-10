import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import Newfeature from './new-feature';
import { Link } from 'react-router-dom';
import Newcategory from './new-category';
import Newtype from './new-type'




const Listproperty = () => {
  const [showtypeoverlay, setShowtypeoverlay] = useState(false);
  const [showcategoryoverlay, setShowcategoryoverlay] = useState(false);
  const [showfeatureoverlay, setShowfeatureoverlay] = useState(false);
  
    const handleNewtype=()=>{
      setShowtypeoverlay(true)
    }
    const handleNewcategories=()=>{
      setShowcategoryoverlay(true)
    }
    const handleNewfeature=()=>{
      setShowfeatureoverlay(true)
    }
      const closeOverlay=()=>{
        setShowcategoryoverlay(false);
        setShowtypeoverlay(false);
        setShowfeatureoverlay(false);
      }

      const handleSave = ()=>{
        alert("successfully saved")
      }

      return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px]'>
       <Admin/>
      <div className='mt-3 mx-5'>
        <h3 className='font-bold mx-5'>Settings</h3>
        <div className='w-full md:overflow-x-auto lg:overflow-x-hidden overflow-x-auto mt-4'>
             <div className=''>
             <div className='mt-5 mx-5 bg-white p-10 rounded-3xl min-w-[1000px]'>
            <div className='lg:flex md:flex grid grid-cols-1  lg:gap-10 md:gap-10 gap-5 lg:pr-0 md:pr-0 pr-[20px] font-semibold'>
               <Link to="/my-profile-one" >Edit Profile</Link>
                <Link to="/my-profile-three" >Security</Link>
                 <Link to="/settings" >commision</Link>
                 <Link to="/my-profile-two" >Subscription settings</Link>
                 <Link to="/list-property" className='border-b-2 border-[navy]'>Property settings</Link>
            </div>
            <hr />
                <h3 className='font-bold border-b-2 w-[110px] border-black'>List Properties</h3>
          
          
          <div className='mt-5'>
         <div className='my-5'>
         <div className='flex gap-5  '>
            <h3>All categories</h3>
            <div className='mt-1 cursor-pointer' onClick={handleNewcategories} >
            <ion-icon name="add-circle-outline" className="w-10 h-10"></ion-icon>
            </div>
           </div>
           <div className='flex gap-10  lg:w-[400px] md:w-[400px] w-[260px] border-2 border-gray h-fit rounded-3xl p-3'>
            <div className='flex'>
              <h3>Sale</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex'>
              <h3>Rent</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex'>
              <h3>Lease</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
           </div>
         </div>
         <div className='my-5'>
         <div className='flex gap-5 m '>
            <h3>All types</h3>
            <div className='mt-1 cursor-pointer' onClick={handleNewtype} >
            <ion-icon name="add-circle-outline" className="w-10 h-10"></ion-icon>
            </div>
           </div>
           <div className='flex flex-wrap lg:gap-10  md:gap-10 gap-3 lg:w-[400px] md:w-[400px] w-[260px]  border-2 boder-gray h-fit rounded-3xl p-3'>
            <div className='flex'>
              <h3>Residential</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex'>
              <h3>Industrial</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex'>
              <h3>Lodging</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
           </div>
         </div>

         <div>
         <div className='flex gap-5 '>
            <h3>All feature</h3>
            <div className='mt-1 cursor-pointer' onClick={handleNewfeature} >
            <ion-icon name="add-circle-outline" className="w-10 h-10"></ion-icon>
            </div>
           </div>
           <div className=' lg:w-[500px] md:w-[400px] w-[260px]  border-2 boder-gray gap-5 h-fit rounded-3xl p-3'>
             <div className="flex justify-between flex-wrap   ">
             <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Bedroom</h3>
             <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Balcony</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex  lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
             <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Bedroom</h3>
             <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Balcony</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
             <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Bedroom</h3>
             <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Balcony</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
             <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Bedroom</h3>
             <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Balcony</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
             <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Bedroom</h3>
             <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Balcony</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
             <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Bedroom</h3>
             <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Balcony</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
             <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Bedroom</h3>
             <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Balcony</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
             <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Bedroom</h3>
             <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className=' flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Balcony</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
            <div className='flex lg:w-1/5 md:w-1/5 w-1/2'>
              <h3>Electricity</h3>
              <div className='text-[red] '>
             <ion-icon name="close-outline"></ion-icon>
             </div>
            </div>
             
           
            
            
           </div>

           </div>
         </div>
          </div>
            < div onClick={handleSave} className='w-[198px] cursor-pointer h-[50px] rounded-3xl bg-[navy] text-white  text-center p-3 lg:justify-self-end md:justify-self-end justify-self-start mt-5'>
              <h3>Save</h3>
            </div>
        </div>
             </div>
        </div>
      </div>
      </div>

      <div className='cursor-pointer' onClick={closeOverlay} >
        {showcategoryoverlay && <Newcategory/>}
      </div>
      <div className='cursor-pointer' onClick={closeOverlay} >
        {showfeatureoverlay && <Newfeature/>}
      </div>
      <div className='cursor-pointer' onClick={closeOverlay} >
        {showtypeoverlay && <Newtype/>}
      </div>
    </div>
  )
}

export default Listproperty
