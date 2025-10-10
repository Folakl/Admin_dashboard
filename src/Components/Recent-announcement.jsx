import React from 'react'
import Announcement from './Announcement'

const Recentannouncement = () => {
  return (
    <div className='mt-10'>
      <h3 className='font-bold '>Recent Announcements</h3>
    
        {Announcement.map((announcement, index)=> (
         <div key={index} className='bg-white opacity-90 border-gray  border-[0.5px] flex w-[270px] h-[64px] gap-10 rounded-md  p-2 my-3'>
            <div >
            <h3 className='font-bold'>{announcement.name} </h3>  
            <h3 className='text-[10px]'>{announcement.subhead}</h3>
            </div>
         <div>
        <ion-icon name="notifications-outline"></ion-icon>
        </div>
        <div>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>

             
         </div>
        
        
) ) }
    
    </div>
  )
}

export default Recentannouncement 
