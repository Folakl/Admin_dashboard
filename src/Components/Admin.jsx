// import React from 'react'
// import Notifications from '../CepromasAssets/notificationtwo.png'
// import user from '../CepromasAssets/usertwo.png'

// const Admin = () => {
//   return (
//     <div className='flex justify-between w-full  items-center h-[60px] border-b border-gray-400 font-semibold'>
//       <h3>Good Mornings. Debs!</h3>
//       <div className='flex gap-5'>
//        <img src={Notifications} alt="" className='w-[30px] h-[30px]' />
//        <img src={user} alt="" className='w-[30px] h-[30px]' />
//       </div>
//     </div>
//   )
// }

// export default Admin

import React from 'react'
import Notifications from '../CepromasAssets/notificationtwo.png'
import user from '../CepromasAssets/usertwo.png'

const Admin = () => {
  return (
  <div className="flex items-center justify-between w-full p-4 h-[60px] border-b border-gray-400 font-semibold">

  {/* Left Text */}
  <h3 className="text-sm sm:text-base md:text-lg">Good Morning, Debs!</h3>

  {/* Right Icons */}
  <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0">
    <img src={Notifications} alt="Notification" className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]" />
    <img src={user} alt="User" className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]" />
  </div>
</div>
  )
}

export default Admin

