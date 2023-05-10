import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Message from '../components/Message.js'
import JobFeedIcon from './Job (1).png'
import DashboardIcon from './dashboard setting.png'
import AppliedJobIcon from './bookmark.png'
import MessageIcon from './Messages.png'
const ProfileNav = ({ open, setOpen }) => {
    const navigate = useNavigate();
    return (
        <div className={`${open ? 'w-1/5' : 'w-14'} fixed top-20 left-0 min-h-screen duration-700 delay-200 post`}>
            <div>
                <div className='mt-[110px] text-white grid gap-2'>
                    <div onClick={() => navigate("/Profile/Dashboard")} className={` ${!open ? ' w-14 pl-3 text-[0px]' : 'w-full text-2xl pl-[70px]'} cursor-pointer  link pt-[20px] h-[70px] flex gap-2`}>
                        <img src={DashboardIcon} className={`${!open ? "w-[30px] h-[30px]" : "w-[30px] h-[30px]"}`} ></img>
                        <p>Dashboard</p>
                    </div>
                    <div onClick={() => navigate("/Job")} className={`cursor-pointer  ${!open ? ' w-14 pl-3 text-[0px]' : ' text-2xl pl-[70px]'} link pt-[20px] h-[70px] flex gap-2`}>
                        <img src={JobFeedIcon} className={`${!open ? "w-[30px] h-[30px]" : "w-[30px] h-[30px]"}`}></img>
                        <p>Job feed</p>
                    </div>
                    <div onClick={() => navigate("/Applied")} className={`cursor-pointer  ${!open ? ' w-14 pl-3 text-[0px]' : ' text-2xl pl-[70px]'} link pt-[20px] h-[70px] flex gap-2`}>
                        <img src={AppliedJobIcon} className={`${!open ? "w-[30px] h-[30px]" : "w-[30px] h-[30px]"}`}></img>
                        <p>Applied Job</p>
                    </div>
                    <div className={`cursor-pointer  ${!open ? ' w-14 pl-3 text-[0px]' : ' w-full text-2xl pl-[70px]'} link pt-[20px] h-[70px] flex gap-2`}>
                        <img src={MessageIcon} className={`${!open ? "w-[30px] h-[30px]" : "w-[30px] h-[30px]"}`}></img><Link to='/Message' element={<Message />}>Message</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileNav
