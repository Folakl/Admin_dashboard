import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Admin from '../Components/Admin'
import Whitespace from '../CepromasAssets/image 1.png';
import { Link } from 'react-router-dom';



const Myprofileone = () => {
  const [name,setName]= useState("");
  const [email,setEmail] = useState("");
  const [dob, setDob ]= useState("");
  const [permanentaddress, setPermanentaddress]= useState('');
  const [postalcode,setPostalcode] = useState("");
  const [username,setUserame]= useState("");
  const [password,setPassword] = useState("");
  const [city,setCity] = useState("");
  const [presentaddress, setPresentaddress]= useState('');
  const [country, setCountry] = useState("");

  const handleSave=()=>{
    if(name === "" || email === "" || city ==="" || dob ==="" || permanentaddress === "" || postalcode === "" || username === "" || password === "" || presentaddress === "" || country === "" ){
      alert("enter necessary details")
    }else{
      
    }
  }

  return (

    
    <div className='flex'>
      <Sidebar/>
      <div className='bg-[#FAFAFA] relative lg:left-[225px] md:left-[100px] left-[30px]'>
       <Admin/>
      <div className='mt-3 lg:mx-5 md:mx-5 mx-10'>
        <h3 className='font-bold'>My Profile</h3>
        <div className='mt-5 mx-5'>
            <div className='flex flex-wrap   lg:gap-10 md:gap-10 gap-3 lg:pr-0 md:pr-0 pr-[80px] font-semibold'>
                <Link to="/my-profile-one" className='border-b-2 border-[navy]'>Edit Profile</Link>
                <Link to="/my-profile-three">Security</Link>
                <Link to="/settings">Commision</Link>
                <Link to="/my-profile-two">Subscription settings</Link>
                <Link to="/list-property">Property settings</Link>
            </div>
          <div className='mt-5'>
          <div className=' lg:flex md:grid grid gap-10  '>
            <div>
               <div className='py-2'>
               <h3>Your Name</h3>
               <input type="text" value= {name} onChange={(e)=>setName(e.target.value)} className='outline-none lg:w-[418px] md:w-[400px] w-[270px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='Full name' />
               </div>
               <div className='py-2'>
               <h3>Email</h3>
               <input type='email' value= {email} onChange={(e)=>setEmail(e.target.value)} className=' outline-none lg:w-[418px] md:w-[400px] w-[270px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='Email Address' />
               </div>
               <div className='py-2'>
               <h3>Date of Birth</h3>
               <input type="text" value= {dob} onChange={(e)=>setDob(e.target.value)} className=' outline-none lg:w-[418px] md:w-[400px] w-[270px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='25, January, 1990' />
               </div>
               <div className='py-2'>
               <h3>Permanent Address</h3>
               <input type="text" value = {permanentaddress} onChange={(e)=>setPermanentaddress(e.target.value)} className='lg:w-[418px] md:w-[400px] w-[270px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='San Jose,California,USA' />
               </div>
               <div>
               <h3 className='py-2'>Postal Code</h3>
               <input type="text" value={postalcode}  onChange={(e)=>setPostalcode(e.target.value)} className='lg:w-[418px] md:w-[400px] w-[270px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='45962' />
               </div>
            </div>
            <div>
               <div className='py-2'>
               <h3>User Name</h3>
               <input type="text" value={username} onChange={(e)=>setUserame(e.target.value)} className='lg:w-[418px] md:w-[400px] w-[270px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='Full name' />
               </div>
               <div className='py-2'>
               <h3>Password</h3>
               <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='lg:w-[418px] md:w-[400px] w-[270px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200'  />
               </div>
               <div className='py-2'>
               <h3>Present Address</h3>
               <input type="text" value={presentaddress} onChange={(e)=>setPresentaddress(e.target.value)} className='lg:w-[418px] md:w-[400px] w-[270px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='San Jose,California,USA' />
               </div>
               <div>
               <h3 className='py-2'>City</h3>
               <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className='lg:w-[418px] md:w-[400px] w-[270px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='San Jose' />
               </div>
               <div>
               <h3 className='py-2'>Country</h3>
               <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} className='lg:w-[418px] md:w-[400px] w-[270px] h-[50px] rounded-2xl pl-4 text-[#718EBF] border-2 border-gray-200' placeholder='USA' />
               </div>
            </div>
            <div className='relative'>
                <img src={Whitespace} alt="" className='w-[80px] h-[80px] rounded-full relative' />
                <div className='absolute ml-12 top-16 bg-[navy] w-[25px] text-white h-[25px] flex justify-center p-1 rounded-full'>
                <ion-icon name="pencil-outline"></ion-icon>
                </div>
            </div>
           </div>
           <div className='mt-10 mr-[200px] flex justify-end'>
            <button className='bg-[navy] text-white rounded-2xl w-[190px] h-[50px] cursor-pointer' onClick={handleSave}>Save</button>
          </div>
          </div>
      
            
        </div>
      </div>
      </div>
    </div>
  )
}

export default Myprofileone
