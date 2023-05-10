import React from 'react'
import { useNavigate } from 'react-router-dom'
import JobFeedIcon from './Job (1).png'
import AppliedJobIcon from './bookmark.png'
import MessageIcon from './Messages.png'
import DashboardIcon from './dashboard setting.png'
const CompanyProfileNav = ({ open }) => {
    const navigate = useNavigate();
    return (
        <div className={`post h-screen duration-700 delay-200 ${!open ? "w-[4%]" : "w-[20%]"} fixed top-[10%] left-0`}>
            <div className="cursor-pointer pt-[110px] text-white text-2xl grid gap-8">
                <div onClick={() => navigate("/ActiveJob")} className={`${!open ? "text-[0px] px-[20%] relative w-full py-4" : "px-[20%] w-[40%%] py-[5%]"} link h-[70px] flex gap-2`}>
                    < img src={DashboardIcon} className=' w-[30px] h-[30px]'></img>
                    <p>Dashboard</p>
                </div>
                <div onClick={() => navigate("/Job/Post")} className={`${!open ? "text-[0px] px-[20%] relative w-full py-4" : "px-[20%] w-[40%%] py-[5%]"} link h-[70px] flex gap-2`}>
                    < img src={JobFeedIcon} className=' w-[30px] h-[30px]'></img>
                    <p>Post a job</p>
                </div>
                <div onClick={() => navigate("/Job/Created")} className={`${!open ? "text-[0px] px-[20%] relative w-full py-4" : "px-[20%] w-[40%%] py-[5%]"} link h-[70px] flex gap-2`}>
                    <img src={AppliedJobIcon} className=' w-[30px] h-[30px]'></img>
                    <p>Created Jobs</p>
                </div>
                <div onClick={() => navigate("/Message")} className={`${!open ? "text-[0px] px-[20%] relative w-full py-4" : "px-[20%] w-[40%%] py-[5%]"} link h-[70px] flex gap-2`}>
                    <img src={MessageIcon} className=' w-[30px] h-[30px]'></img>
                    <p>Message</p>
                </div>
            </div>
        </div >
    )
}

export default CompanyProfileNav
