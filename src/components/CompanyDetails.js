import React from 'react'
import icon3 from '../components/Group 118989.png'
import Logo from '../components/Group 119032.png'
import { useNavigate } from 'react-router-dom'
const CompanyDetails = () => {
    const navigate = useNavigate();
    const Send = () => {
        alert("Account created successfull")
        navigate('/Company/profile')
    }
    return (
        <div className='flex gap-48'>
            <div className='post h-[700px] w-[350px]'>
                <div>
                    <img src={Logo} className='w-[80px] h-[80px] ml-[20px]'></img>
                    <h1 className='font-bold text-3xl text-white absolute ml-[110px] mt-[-55px]'>TALENT MATCH</h1>
                </div>
                <div className=' absolute mt-[150px] ml-[40px] flex gap-8'>
                    <img src={icon3} className='w-[30px] h-[30px]'></img>
                    <di>
                        <h1 className='text-white text-xl font-bold'>Company details</h1>
                    </di>
                </div>
            </div>
            <div className='mt-[70px]'>
                <h1 className='h1 text-4xl font-bold '>Company details</h1>
                <p className='mt-[30px] text-md'>Lorem ipsum dolor sit amet consectetur. Tincidunt pellentesque quis vitae placerat. Nisi ut arcu sed <br></br>vehicula. Libero egestas lacus non quam at Facilisis  Tincidunt posuere nulla velit ut.</p>
                <form onSubmit={Send} className=' mt-[40px] grid gap-2'>
                    <label className='label'>Company name</label>
                    <input className='border-2 pl-4 border-gray-300 w-[300px]' type="text" placeholder='Company name'></input>
                    <label className='label'>Company email</label>
                    <input className='border-2 pl-4 border-gray-300 w-[300px]' type="email" placeholder='Company email'></input>
                    <label className='label'>Phone number</label>
                    <input className='border-2 pl-4 border-gray-300 w-[300px]' type='number' placeholder='+250'></input>
                    <label className='label'>Office address</label>
                    <input className='border-2 pl-4 border-gray-300 w-[300px]' type='text' placeholder='Office address'></input>
                    <label className='label'>About company</label>
                    <input className='border-2 pl-4 border-gray-300 h-[80px] w-[300px]' type="textarea" placeholder='About company'></input>
                    <input className='post h-[40px] w-[300px] text-white text-2xl' type="submit" value='Save'></input>
                </form>
            </div>
        </div>
    )
}

export default CompanyDetails
