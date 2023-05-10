import React from 'react'
import Photo from '../components/Rectangle 293.png'
import Question from '../components/Component 15.png'
import Icon from './Group 25.png'
import Layout from './Layout'
import dot from './Ellipse 28.png'
import frame from './Avalon-PNG 2.png'
import Icon2 from './Group (1).png'
const ProfileDashboard = () => {
    return (
        <Layout>
            <div className='w-full'>
                <h1 className='font-semibold text-4xl'>Dashboard</h1>
                <div className=' mt-8 w-full grid gap-3 py-[3%] Dashboard shadow-2xl rounded-2xl px-4'>
                    <div className='flex justify-between'>
                        <h1 className='  font-bold text-2xl'>Applications</h1>
                        <button className='  font-bold text-lg h1'>See all</button>
                    </div>
                    <div className='bg-white rounded-xl shadow-slate-300 shadow-lg w-full h-[120px] flex justify-between'>
                        <div className='flex gap-7 pt-[20px] pl-[20px]'>
                            <img src={Photo} className=''></img>
                            <div>
                                <h1 className=' font-bold text-lg'>Senior product designer</h1>
                                <h1 className='font-selif text-gray-400 text-[15px]'>Full time, On site</h1>
                                <h1 className='font-semibold text-gray-500 text-md'>Kigali, Rwanda</h1>
                            </div>
                        </div>
                        <div className='flex gap-1 mt-[40px] mr-[40px]'>
                            <h1 className=' text-red-800 bg-red-300 font-semibold px-[24px] pt-[2px] max-w-[100%] text-sm rounded-2xl h-[25px]'>Reject</h1>
                            <img src={Question} className='h-[30px] w-[30px]'></img>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-xl shadow-slate-300 w-full h-[120px] flex justify-between'>
                        <div className='flex gap-7 pt-[20px] pl-[20px]'>
                            <img src={Photo} className=''></img>
                            <div>
                                <h1 className=' font-bold text-lg'>Senior product designer</h1>
                                <h1 className='font-selif text-gray-400 text-[15px]'>party time, work from home</h1>
                                <h1 className='font-semibold text-gray-500 text-md'>Kigali, Rwanda</h1>
                            </div>
                        </div>
                        <div className='flex gap-1 mt-[40px] mr-[40px]'>
                            <h1 className=' text-yellow-600 bg-yellow-200 font-semibold px-[24px] pt-[2px] max-w-[100%] text-sm rounded-2xl h-[25px]'>In progress</h1>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-xl shadow-slate-300 w-full h-[120px] flex justify-between'>
                        <div className='flex gap-7 pt-[20px] pl-[20px]'>
                            <img src={Photo} className=''></img>
                            <div>
                                <h1 className=' font-bold text-lg'>Senior product designer</h1>
                                <h1 className='font-selif text-gray-400 text-[15px]'>party time, work from home</h1>
                                <h1 className='font-semibold text-gray-500 text-md'>Kigali, Rwanda</h1>
                            </div>
                        </div>
                        <div className='flex gap-1 mt-[40px] mr-[40px]'>
                            <h1 className=' text-green-600 bg-green-200 font-semibold px-[24px] pt-[2px] max-w-[100%] text-sm rounded-2xl h-[25px]'>In progress</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between pt-8'>
                    <h1 className='text-4xl font-bold'>Job recomanded for you</h1>
                    <div><img src={Icon}></img></div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-6'>
                        <div className='flex gap-1'>
                            <img src={dot} className='h-4 pt-1'></img>
                            <h1 className='text-[15px] font-semibold'>UX Designer</h1>
                        </div>
                        <div className='flex gap-1'>
                            <img src={dot} className=' h-4 pt-1'></img>
                            <h1 className='text-[15px] font-semibold'>Kigali, Rwanda</h1>
                        </div>
                    </div>
                    <button className='h1 font-bold text-md'>See all</button>
                </div>
                <div className='bg-gray-100 max-h-[40%] py-8 rounded-xl shadow-lg px-[3%] mt-[3%] w-full'>
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
        </Layout>
    )
}

export default ProfileDashboard
