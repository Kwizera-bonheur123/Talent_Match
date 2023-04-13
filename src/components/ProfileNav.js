import React from 'react'
import Logo from './Group 119032.png'
import { Link, useNavigate } from 'react-router-dom'
import Profile from './Profile'
import Message from '../components/Message.js'
import JobFeed from './JobFeed'
import AppliedJob from './AppliedJob'
import ProfileIcon from './Profile.png'
import JobFeedIcon from './Job (1).png'
import AppliedJobIcon from './bookmark.png'
import MessageIcon from './Messages.png'
import LogoutIcon from './Login.png'
const ProfileNav = () => {
    const navigate = useNavigate();
    const Logout = () => {
        alert("do you want to log out?");
        navigate("/Login");
    }
    return (
        <div>
            <div className='post h-[1350px] w-[350px]'>
                <div className='mt-[20px] absolute'>
                    <img src={Logo} className=' w-[80px] h-[80px] ml-[20px]'></img>
                    <h1 className='font-bold text-3xl text-white ml-[110px] mt-[-55px]'>TALENT MATCH</h1>
                </div>
                <div className='absolute mt-[110px] text-white text-2xl grid gap-2'>
                    <div className='link w-[350px] pt-[20px] h-[70px] pl-[100px] flex'><img src={ProfileIcon} className=' w-[30px] h-[30px]'></img><Link to='/Profile' element={<Profile />}>Profile</Link></div>
                    <div className='link w-[350px] pt-[20px] h-[70px] pl-[100px] flex gap-2'><img src={JobFeedIcon} className=' w-[30px] h-[30px]'></img><Link to='/Job' element={<JobFeed />}>Job feed</Link></div>
                    <div className='link w-[350px] pt-[20px] h-[70px] pl-[100px] flex gap-2'><img src={AppliedJobIcon} className=' w-[30px] h-[30px]'></img><Link to='/Applied' element={<AppliedJob />}>Applied Job</Link></div>
                    <div className='link w-[350px] pt-[20px] h-[70px] pl-[100px] flex gap-2'><img src={MessageIcon} className=' w-[30px] h-[30px]'></img><Link to='/Message' element={<Message />}>Message</Link></div>
                    <div onClick={Logout} className='link absolute mt-[340px] w-[350px] font-bold pt-[30px] h-[70px] pl-[100px] flex gap-2'>
                        <img src={LogoutIcon} className=' w-[30px] h-[30px]'></img>
                        <button>LOG OUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileNav
