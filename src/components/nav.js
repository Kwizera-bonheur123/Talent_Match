import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Group 119032.png'
import Home from './Home'
import { useNavigate } from 'react-router-dom'
import OurTeam from './OurTeam'
import AboutUs from './AboutUs'
import Contact from './Contact'
const Nav = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    return (
        <div className=' bg-white top-0 fixed w-screen h-[80px] md:h-[80px] shadow-sm z-[99]'>
            <div>
                <div>
                    <h1 className='pl-[10%] md:pl-[8%] h1 text-lg md:text-3xl font-bold mt-4'>TALENT</h1>
                    <h1 className='h1 pl-[26%] absolute -mt-4 md:pl-[14%] font-bold md:text-3xl'>MATCH</h1>
                    <div onClick={() => setOpen(!open)} className=' md:hidden absolute top-1 mr-[30px] right-0  text-[40px] cursor-pointer'><ion-icon name={!open ? "menu" : "close"}></ion-icon></div>
                </div>
                <div className={`h-[300px] md:h-[75px] shadow-black shadow-md md:shadow-none bg-white  ${open ? 'mt-[35px]' : ' absolute top-[-490px] md:z-[-99] md:top-1'}`}>
                    <div className={`grid font-medium md:flex ml-[150px] md:ml-[590px] md:gap-6 gap-5 md:mt-[30px] text-[17px]`}>
                        <Link to='/' element={<Home />}>Home</Link>
                        <Link to='/OurTeam' element={<OurTeam />}>Our Team</Link>
                        <Link to='/AboutUs' element={<AboutUs />}>About Us</Link>
                        <Link to='/Contact' element={<Contact />}>Contact Us</Link>
                        <div className='absolute right-0 grid md:flex gap-5 top-[270px] md:top-4 mr-[140px] md:mr-[-500px]'>
                            <div className=' icons absolute ml-[60px] md:ml-[90px] mt-[8px] md:mt-[14px]'><ion-icon name="arrow-forward-outline"></ion-icon></div>
                            <button onClick={() => navigate('/Login')} className=' bg-white learmore border-2  md:w-32 w-20 rounded-xl font-bold md:h-12 h-8'>Login</button>
                            <button onClick={() => navigate('/Signup')} className='border-2 post text-white md:w-32 w-20 rounded-xl font-bold h-8 md:h-12'>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
