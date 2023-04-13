import React from 'react'
import icon1 from '../components/Group 118990 (1).png'
import icon3 from '../components/Group 118989.png'
import Logo from '../components/Group 119032.png'
import Image from '../components/default.jpg'
import Photo from '../components/add photo.png'
import LocationLogo from './Vector.png'
import { useNavigate } from 'react-router-dom'
const DashboardAddition = () => {
    const navigate = useNavigate();
    const Save = () => {
        alert("Account created successfull");
        navigate("Profile");
    }
    const Edit = () => {
        navigate("/EditProfilePictute");
    }
    return (
        <div className='flex'>
            <div className='post h-[700px] w-[350px]'>
                <div>
                    <img src={Logo} className='w-[80px] h-[80px] ml-[20px]'></img>
                    <h1 className='font-bold text-3xl text-white absolute ml-[110px] mt-[-55px]'>TALENT MATCH</h1>
                </div>
                <div className=' absolute mt-[100px] ml-[40px] flex gap-8'>
                    <img src={icon1} className='w-[30px] h-[30px]'></img>
                    <di>
                        <h1 className='text-white text-xl font-bold'>Personal information</h1>
                        <h1 className='text-white text-sm font-semibold'>Basic information about you</h1>
                    </di>
                </div>
                <div className='bg-white w-[3px] h-[90px] ml-[55px] mt-[145px] absolute'></div>
                <div className=' absolute mt-[250px] ml-[40px] flex gap-8'>
                    <img src={icon1} className='w-[30px] h-[30px]'></img>
                    <di>
                        <h1 className='text-white text-xl font-bold'>Career verification</h1>
                        <h1 className='text-white text-sm font-semibold'>Professional verification</h1>
                    </di>
                </div>
                <div className='bg-white w-[3px] h-[90px] ml-[55px] mt-[295px] absolute'></div>
                <div className=' absolute mt-[400px] ml-[40px] flex gap-8'>
                    <img src={icon3} className='w-[30px] h-[30px]'></img>
                    <di>
                        <h1 className='text-white text-xl font-bold'>Additional information</h1>
                        <h1 className='text-white text-sm font-semibold'>Recommand your profile to recruiters</h1>
                    </di>
                </div>
            </div>
            <div>
                <div className='ml-[170px]'>
                    <h1 className='font-semibold text-4xl icons mt-[30px]'>Additional information</h1>
                    <h1 className='text-semibold text-sm mt-[20px]'>
                        Lorem ipsum dolor sit amet consectetur. Tincidunt pellentesque quis vitae placerat. Nisi ut arcu sed vehicula.<br></br> Libero egestas lacus non quam at Facilisis  Tincidunt posuere nulla velit ut.
                    </h1>
                    <div onClick={Edit} className='bg-gray-200 w-[700px] rounded-t-[30px] h-[130px] mt-[40px]'>
                        <img src={Image} className='absolute w-[100px] rounded-full mt-[70px] ml-[25px] h-[100px]'></img>
                        <img src={Photo} className='absolute mt-[130px] ml-[100px]'></img>
                        <div className='absolute mt-[130px] ml-[140px]'>
                            <h1 className='h1 text-md font-bold'>ISHIMWE Serge</h1>
                            <h1 className='text-gray-500 text-sm text-semibold'>Product designer</h1>
                            <div className='flex gap-2'>
                                <img src={LocationLogo} className='h-[15px]'></img>
                                <h1 className='text-gray-600 text-[10px] text-semibold'>Kigali Rwanda</h1>
                            </div>
                        </div>
                    </div>
                    <form className='mt-[60px] grid gap-2'>
                        <label className='icons font-bold text-xl'>About</label>
                        <input type='textarea' className='learmore pl-8 -pt-[220px] rounded-2xl h-[200px]' placeholder='Write a description about you rself, and your career relevant to your job search '></input>
                        <div className='flex gap-5'>
                            <input type='button' onClick={() => navigate("/Dashboard/Career")} className=' w-[350px] text-2xl font-semibold h-[40px] learmore' value="Back"></input>
                            <input type='button' onClick={Save} className='post w-[350px] h-[40px] text-white text-2xl' value="SAVE"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DashboardAddition
