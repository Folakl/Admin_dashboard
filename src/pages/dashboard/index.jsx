import React from 'react'
import Sidebar from '../../Components/Sidebar';
import Admin from '../../Components/Admin'
import DashboardStats from '../../Components/Dashboardststats';
import Listedproperties from '../../Components/listed-properties';
import Recentannouncement from '../../Components/Recent-announcement';
import { Link } from 'react-router-dom';
import Dashboardchart from '../../Components/Dashboardchart';
const  Dashboard = () => {
  
 

  return (
    <div className="flex min-h-screen ">
   
       <Sidebar/>
     
       
     <div className='flex-1 lg:pl-[148px]  md:pl-[10px] pl-[10px]'>
        <div className="w-full px-4 md:px-6">
       <Admin/>
         <div className=' '>
         <div className=' flex-shrink-0  lg:flex md:flex grid '>
         <div className='mt-10 mx-10 '>
         <div >
          <h3 className='font-semibold text-2xl mb-5'>Sales Overview</h3>
            <Dashboardchart/>
          </div>
          <div className ="my-10">
            
          <DashboardStats/>   
            </div>
         
         
          <div className='lg:flex md:flex grid justify-between mt-5'>
          <h3 className='font-bold'>Listed Property</h3>
          <Link to="/all-properties" className='text-[red] font-semibold'>View all</Link>
          </div>
          <Listedproperties/>
         </div>
         <div className='lg:ml-0 md:ml-0 ml-[60px]'>
          <Recentannouncement/>
         </div> 
         </div>


         </div>


       </div>

     </div>
    </div>
    
  );
};

export default Dashboard;
