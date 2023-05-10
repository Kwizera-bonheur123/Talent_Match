import React from 'react'
import Layout from './Layout'
import Logo from './Rectangle 293.png'

const AppliedJob = () => {
  return (
    <Layout>
      <div className='Dashboard px-[40px] w-full shadow-xl rounded-2xl grid gap-10 max-h-screen overflow-y-auto py-[3%]'>
        <div className='flex justify-between'>
          <h1 className='text-black text-3xl font-bold'>Applications</h1>
          <h1 className='h1 text-lg font-bold'>See all</h1>
        </div>
        <div className=' grid gap-4 '>
          <div className=' bg-white shadow-lg shadow-slate-300 h-[120px] rounded-2xl flex justify-between pb-[1%] px-[40px]'>
            <div className='flex gap-4'>
              <img src={Logo} className='mt-4'></img>
              <div className=' grid mt-[25px]'>
                <h1 className='text-black font-bold text-xl'>Senior product designer</h1>
                <h1 className='text-md text-gray-500 font-md font-semibold'>Full time, On site</h1>
                <h1 className='text-md text-gray-500 font-md font-semibold'>Kigali, Rwanda</h1>
              </div>
            </div>
            <div className='grid gap-6 mt-[25px] '>
              <button className='text-green-700 text-md font-bold'>More details</button>
            </div>
          </div>
          <div className='flex justify-between px-[40px] bg-white shadow-lg shadow-slate-300 h-[120px] rounded-2xl pb-[1%]'>
            <div className='flex gap-4'>
              <img src={Logo} className='mt-4'></img>
              <div className=' grid mt-[25px]'>
                <h1 className='text-black font-bold text-xl'>Senior product designer</h1>
                <h1 className='text-md text-gray-500 font-md font-semibold'>Full time, On site</h1>
                <h1 className='text-md text-gray-500 font-md font-semibold'>Kigali, Rwanda</h1>
              </div>
            </div>
            <div className='grid gap-6 mt-[25px] '>
              <button className='text-green-700 text-md font-bold'>More details</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AppliedJob
