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
        <div className=' bg-white top-0 fixed w-screen h-[80px] md:h-[80px] shadow-lg z-[99]'>
            <div>
                <div>
                    <img src={Logo} className=' absolute h-[70px] w-[70px] ml-[30px] top-1'></img>
                    <h1 className='absolute ml-[130px] md:ml-[110px] h1 text-lg md:text-3xl font-bold top-5'>TALENT MATCH</h1>
                    <div onClick={() => setOpen(!open)} className=' md:hidden absolute top-1 mr-[30px] right-0  text-[40px] cursor-pointer'><ion-icon name={!open ? "menu" : "close"}></ion-icon></div>
                </div>
                <div className={`h-[300px] md:h-[80px] shadow-black shadow-lg md:shadow-none bg-white  ${open ? 'top-20' : ' absolute top-[-490px] md:z-[-99] md:top-1'}`}>
                    <div className={`grid md:flex ml-[150px] md:ml-[500px] md:gap-6 gap-5 mt-[80px] md:mt-[30px] text-[17px]`}>
                        <Link to='/' element={<Home />}>HOME</Link>
                        <Link to='/OurTeam' element={<OurTeam />}>OUR TEAM</Link>
                        <Link to='/AboutUs' element={<AboutUs />}>ABOUT US</Link>
                        <Link to='/Contact' element={<Contact />}>CONTACT US</Link>
                        <div className='absolute right-0 grid md:flex gap-5 top-[270px] md:top-4 mr-[160px] md:mr-[-360px]'>
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
