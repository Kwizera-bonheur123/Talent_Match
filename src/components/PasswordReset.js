import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Group 119032.png'
const PasswordReset = () => {
    const navigate = useNavigate();
    const resend = () => {
        navigate('/')
    }
    return (
        <>
            <div className='h-20 w-full post'>
                <img src={Logo} className='w-[80px] h-[80px] ml-[40px]'></img>
                <h1 className='font-bold text-3xl text-white absolute ml-[130px] mt-[-55px]'>TALENT MATCH</h1>
            </div>
            <div className='login md:h-screen h-[1000px] w-full top-0'>
                <div className=' absolute mt-[80px] ml-[20px]  md:ml-[270px] md:w-[804px] w-[350px] h-[500px] rounded-3xl border-2 shadow-lg'>
                    <div>
                        <div className='post font-bold  md:h-[144px] h-[100px] md:w-[800px] w-[350px] rounded-t-3xl'>
                            <h1 className='absolute text-white md:ml-[260px] ml-[60px] md:mt-[60px] mt-[14px] md:text-2xl text-2xl'>PASSWORD RESET</h1>
                        </div>
                        <div className=' bg-white h-[600px] md:h-[356px] md:w-[802px] w-[348px] rounded-b-3xl grid sm:grid md:flex'>
                            <div className=' md:mr-[60px] mr-[17px] md:ml-[210px] ml-[17px] mt-[30px]'>
                                <div className='flex md:gap-2 gap-1'>
                                    <input type='text' className=' learmore rounded-xl font-bold text-4xl pl-5 border-2 md:w-[70px] md:h-[70px] w-[70px] md:mt-12' ></input><br></br><br></br>
                                    <input type='text' className=' learmore rounded-xl font-bold text-4xl pl-5 border-2 md:w-[70px] md:h-[70px] w-[70px] md:mt-12' ></input><br></br><br></br>
                                    <input type='text' className=' learmore font-bold rounded-xl text-4xl pl-5 border-2 md:w-[70px] md:h-[70px] w-[70px] md:mt-12' ></input><br></br><br></br>
                                    <input type='text' className=' learmore font-bold text-4xl pl-5 rounded-xl border-2 md:w-[70px] md:h-[70px] w-[70px] md:mt-12' ></input><br></br><br></br>
                                </div><br></br>
                                <input type='button' value='CONTINUE' className=' post md:w-[330px] rounded-xl w-[315px] h-9 text-white font-bold rounded-sm'></input><br></br><br></br>
                                <div>Don't receive an Email?<button onClick={resend} className='icons font-bold pl-4'>Click to resend</button></div><br></br>
                                <div onClick={() => navigate('/Login')} className='icons ml-[80px] font-bold cursor-pointer'><ion-icon name="arrow-back-outline" class="md hydrated  text-3xl"></ion-icon><h2 className='absolute mt-[-35px] ml-[40px]'>Back to Log in</h2></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordReset
