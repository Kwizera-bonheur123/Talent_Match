import SearchIcon from './Group.png'
import HomeIcon from './Group 118996.png'
import NotificationIcon from './Group 118995.png'
import MessageIcon from './Group 118994 (1).png'
import Default from './default.jpg'
import LogoutIcon from './Login (1).png'
import { useNavigate } from 'react-router-dom'
import Logo from './Group 119032.png'
import { useState } from 'react'
import Profile from './Profile'
const Searchbar = ({ open, setOpen }) => {
    const [profilebutton, setProfilebutton] = useState(false);
    const [profile, setProfile] = useState()
    const navigate = useNavigate();
    const Logout = () => {
        navigate('/Login')
    }
    const Profile = () => {
        navigate('/Profile')
    }
    if (profile == "Profile") {
        navigate("/profile")
    }
    if (profile == "Log out") {
        navigate("/login")
    }
    return (
        <div className='flex gap-28 pt-8 z-[99] h-24 bg-white fixed w-full'>
            <div className='flex gap-4 bg-white w-[27%]'>
                <div onClick={() => setOpen(!open)} className='h1 cursor-pointer -mt-[10px] top-0 text-[50px]'><ion-icon name={!open ? "menu" : "menu"}></ion-icon></div>
                <img src={Logo} className='w-[45px] h-[45px]'></img>
                <h1 className='h1 text-3xl font-semibold '>Talent Match</h1>
            </div>
            <div className={`w-full ${!profilebutton ? "pr-[6%]" : "pr-[6%]"} flex justify-between`}>
                <div>
                    <img src={SearchIcon} className='pt-2 pl-[21%] absolute '></img>
                    <input type="text" className=' border-gray-500 -mt-2 rounded-3xl shadow-md border-2 w-[180%] h-[50px] pl-[20px]' placeholder='search anything'></input>
                </div>
                <div className='flex gap-14'>
                    <div className='flex gap-2'>
                        <img src={HomeIcon} className='h-[30px]'></img>
                        <img src={NotificationIcon} className='h-[30px]'></img>
                        <img src={MessageIcon} className='h-[30px]'></img>
                    </div>
                    <div className='flex'>
                        <img src={Default} onClick={() => setProfilebutton(!profilebutton)} className=' h-[40px] -mt-[8px]'></img>
                        <div className={`${!profilebutton ? "hidden" : ""} w-[220%] bg-white h-[350%] border-2 py-[5%] border-black`}>
                            <h1 className='h1 px-[20%] text-lg font-bold'>ISHIMWE Serge</h1>
                            <h1 className='h1 px-[25%] text-sm font-semibold'>Product designer</h1>
                            <button onClick={Profile} className='learmore px-[50px] py-[3%] rounded-xl h1 font-bold mx-10 my-6'>View profile</button>
                            <div onClick={Logout} className=' cursor-pointer flex gap-2 px-[20%]'>
                                <img src={LogoutIcon} className='w-[15%] h-[15%]'></img>
                                <h1 className='text-2xl font-bold h1'>Log out</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
