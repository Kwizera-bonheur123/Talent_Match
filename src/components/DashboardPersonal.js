import React from 'react'
import icon1 from '../components/Group 118989.png'
import icon2 from '../components/Group 118990.png'
import Logo from '../components/Group 119032.png'
import { useNavigate } from 'react-router-dom'
const DashboardNav = () => {
    const navigate = useNavigate();
    const Continue = () => {
        navigate("/Dashboard/Career")
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
                    <img src={icon2} className='w-[30px] h-[30px]'></img>
                    <di>
                        <h1 className='text-white text-xl font-bold'>Career verification</h1>
                        <h1 className='text-white text-sm font-semibold'>Professional verification</h1>
                    </di>
                </div>
                <div className='bg-white w-[3px] h-[90px] ml-[55px] mt-[295px] absolute'></div>
                <div className=' absolute mt-[400px] ml-[40px] flex gap-8'>
                    <img src={icon2} className='w-[30px] h-[30px]'></img>
                    <di>
                        <h1 className='text-white text-xl font-bold'>Additional information</h1>
                        <h1 className='text-white text-sm font-semibold'>Recommand your profile to recruiters</h1>
                    </di>
                </div>
            </div>
            <div>
                <div className='ml-[170px]'>
                    <h1 className='font-bold text-4xl icons mt-[30px]'>Personal information</h1>
                    <h1 className='text-semibold text-sm mt-[20px]'>
                        Lorem ipsum dolor sit amet consectetur. Tincidunt pellentesque quis vitae placerat. Nisi ut arcu sed vehicula.<br></br> Libero egestas lacus non quam at Facilisis  Tincidunt posuere nulla velit ut.
                    </h1>
                    <form className='grid gap-2 mt-[30px]'>
                        <label>Availability status</label>
                        <select className='input'>
                            <option>Select your current status</option>
                            <option>Employed</option>
                            <option>Unemployed</option>
                        </select>
                        <label>Phone number</label>
                        <input type="number" className='input' placeholder='+250'></input>
                        <label>Gender</label>
                        <select className='input'>
                            <option>Select your Gender</option>
                            <option>Employed</option>
                            <option>Unemployed</option>
                        </select>
                        <label>Date of birth</label>
                        <input type="date" placeholder='MM/DD/YYYY' className='input'></input>
                        <label>Address</label>
                        <input type="text" placeholder='Street address ' className='input'></input>
                        <div className='flex gap-1 w-[100px]'>
                            <div className='grid'>
                                <label>District</label>
                                <input type='text' className='district' placeholder='e.g Nyarugenge'></input>
                            </div>
                            <div className='grid'>
                                <label>Sector</label>
                                <input type='text' className='district' placeholder='e.g Nyamirambo'></input>
                            </div>
                        </div>
                        <input type='botton' onClick={Continue} className='w-[385px] cursor-pointer text-white font-bold pl-[150px] h-[40px] post' value="Continue"></input>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default DashboardNav
