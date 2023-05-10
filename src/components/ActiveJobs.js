import React from 'react'
import CompanyDashboard from './CompanyDashboard'
import frame from './Avalon-PNG 2.png'
import Icon2 from './Group (1).png'
const ActiveJobs = () => {
    return (
        <div>
            <CompanyDashboard>
                <div className='w-full max-h-[200%] h-screen'>
                    <div className='bg-gray-100 max-h-screen py-8 rounded-xl shadow-lg mt-[3%] w-full'>
                        <div className='py-6'>
                            <div className='flex justify-between '>
                                <div className='flex gap-8'>
                                    <img src={frame}></img>
                                    <div>
                                        <h1 className='text-md font-bold'>UX Design</h1>
                                        <h1 className='text-[14px]'>Kigali, Rwanda</h1>
                                        <h1 className='text-[14px]'>1 week ago</h1>
                                    </div>
                                </div>
                                <div>
                                    <img src={Icon2} className='absolute right-32'></img>
                                    <button className='h1 font-semibold mt-[25%] mr-24 px-6 border-2 border-gray-600 rounded-2xl bg-white'>Apply now</button>
                                </div>
                            </div>
                            <p className='h-[1px] mt-10 w-full bg-black'></p>
                        </div>
                        <div className='py-6'>
                            <div className='flex justify-between '>
                                <div className='flex gap-8'>
                                    <img src={frame}></img>
                                    <div>
                                        <h1 className='text-md font-bold'>UX Design</h1>
                                        <h1 className='text-[14px]'>Kigali, Rwanda</h1>
                                        <h1 className='text-[14px]'>1 week ago</h1>
                                    </div>
                                </div>
                                <div>
                                    <img src={Icon2} className='absolute right-32'></img>
                                    <button className='h1 font-semibold mt-[25%] mr-24 px-6 border-2 border-gray-600 rounded-2xl bg-white'>Apply now</button>
                                </div>
                            </div>
                            <p className='h-[1px] mt-10 w-full bg-black'></p>
                        </div>
                    </div>
                </div>
            </CompanyDashboard>
        </div>
    )
}

export default ActiveJobs
