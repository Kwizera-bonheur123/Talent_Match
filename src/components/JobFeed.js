import React from 'react'
import Nav from './ProfileNav'
import Slvt from './SLVT.png'
import CS from '../components/CS.png'
import Tech from '../components/TCH.png'
import Footer from './Footer.js'
import Searchbar from './Searchbar'
import { useNavigate } from 'react-router-dom'
const JobFeed = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex gap-14'>
        <Nav />
        <div className='w-[930px]'>
          <Searchbar />
          <div className='grid grid-cols-3 gap-10 mt-[40px]'>
            <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
              <img src={Slvt} className='w-[150px] h-[130px]'></img>
              <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
              <h1 className='font-bold text-2xl ml-10'>Front End Developer</h1>
              <h1 className='ml-10 text-gray-600 mt-6'>HTML,CSS3,Javascript,Bootstrap<br></br>React js</h1>
              <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                <button onClick={() => navigate("/Job/moredetail")} className='font-bold text-gray-600 mause-pointer'>More details</button>
                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
              </div>
            </div>
            <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
              <img src={CS} className='w-[150px] h-[100px] mt-8'></img>
              <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
              <h1 className='font-bold text-2xl ml-10'>Graphic Designer</h1>
              <h1 className='ml-10 text-gray-600 mt-6'>Adobe photoshop, Adobe illistrator<br></br>Logos</h1>
              <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
              </div>
            </div>
            <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
              <img src={Tech} className='w-[150px] h-[130px]'></img>
              <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
              <h1 className='font-bold text-2xl ml-10'>Back Developer</h1>
              <h1 className='ml-10 text-gray-600 mt-6'>Python, Ruby, Java, PHP<br></br>MongoDB</h1>
              <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
              </div>
            </div>
            <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
              <img src={Slvt} className='w-[150px] h-[130px]'></img>
              <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
              <h1 className='font-bold text-2xl ml-10'>Web Developer</h1>
              <h1 className='ml-10 text-gray-600 mt-6'>Web Design Hack Accelerator<br></br>Branding value.</h1>
              <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
              </div>
            </div>
            <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
              <img src={CS} className='w-[150px] h-[100px]'></img>
              <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
              <h1 className='font-bold text-2xl ml-10'>UI/UX Designer</h1>
              <h1 className='ml-10 text-gray-600 mt-6'>Figma, Adobexd, Adobe<br></br>Photoshop, illistrator</h1>
              <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
              </div>
            </div>
            <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
              <img src={Slvt} className='w-[150px] h-[130px]'></img>
              <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
              <h1 className='font-bold text-2xl ml-10'>Front End Developer</h1>
              <h1 className='ml-10 text-gray-600 mt-6'>HTML,CSS3,Javascript,Bootstrap<br></br>React js</h1>
              <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
              </div>
            </div>
            <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
              <img src={Slvt} className='w-[150px] h-[130px]'></img>
              <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
              <h1 className='font-bold text-2xl ml-10'>Web Developer</h1>
              <h1 className='ml-10 text-gray-600 mt-6'>Web Design Hack Accelerator<br></br>Branding value.</h1>
              <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
              </div>
            </div>
            <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
              <img src={CS} className='w-[150px] h-[100px]'></img>
              <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
              <h1 className='font-bold text-2xl ml-10'>UI/UX Designer</h1>
              <h1 className='ml-10 text-gray-600 mt-6'>Figma, Adobexd, Adobe<br></br>Photoshop, illistrator</h1>
              <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
              </div>
            </div>
            <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
              <img src={Slvt} className='w-[150px] h-[130px]'></img>
              <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
              <h1 className='font-bold text-2xl ml-10'>Front End Developer</h1>
              <h1 className='ml-10 text-gray-600 mt-6'>HTML,CSS3,Javascript,Bootstrap<br></br>React js</h1>
              <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default JobFeed
