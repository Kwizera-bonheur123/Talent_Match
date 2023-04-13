import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Group 119032.png'
const ForgotPassword = () => {
    const navigate = useNavigate();
    const Reset = () => {
        alert("Check verification code sent to your email");
        navigate('/PasswordReset')
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
                            <h1 className='absolute text-white md:ml-[260px] ml-[60px] md:mt-[27px] mt-[14px] md:text-2xl text-xl'>FORGOT PASSWORD</h1>
                            <h4 className='text-white ml-[60px] md:ml-[260px] md:mt-[75px] mt-[45px] absolute md:text-sm text-[10px]'><i>No worries, we'll send you reset instructions</i></h4>
                        </div>
                        <div className=' bg-white h-[600px] md:h-[356px] md:w-[802px] w-[348px] rounded-b-3xl grid sm:grid md:flex'>
                            <div className=' md:mr-[60px] mr-[17px] md:ml-[210px] ml-[17px] mt-[30px]'>
                                <input type='text' placeholder='Enter yourEmail' className='border-2 md:w-[340px] rounded-lg w-[300px] mt-[35px] md:mt-12 learmore' ></input><br></br><br></br>
                                <input type='button' onClick={Reset} value='RESET PASSWORD' className=' post rounded-xl md:w-[340px] w-[315px] h-9 text-white font-bold'></input><br></br><br></br>
                                <div onClick={() => navigate('/Login')} className='icons ml-[70px] md:ml-[110px] font-bold cursor-pointer'><ion-icon name="arrow-back-outline" class="md hydrated  text-3xl"></ion-icon><h2 className='absolute mt-[-35px] ml-[40px]'>Back to Log in</h2></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
