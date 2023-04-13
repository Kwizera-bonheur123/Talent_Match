import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Fragment } from 'react'
import Google from '../components/google.jpg'
import Linkedin from '../components/linkedin.png'
import Microsoft from '../components/microsoft.jpg'
import Logo from '../components/Group 119032.png'

const Login = () => {
  const navigate = useNavigate();
  const Dashboard = () => {
    return (navigate('/Dashboard/personal'));
  }
  return (
    <>
      <div className='h-20 w-full post'>
        <img src={Logo} className='w-[80px] h-[80px] ml-[40px]'></img>
        <h1 className='font-bold text-3xl text-white absolute ml-[130px] mt-[-55px]'>TALENT MATCH</h1>
      </div>
      <div className=' login md:h-screen h-[1000px] w-full top-0'>
        <div className=' shadow-2xl shadow-black absolute mt-[80px] ml-[20px]  md:ml-[270px] md:w-[804px] w-[350px] h-[500px] rounded-3xl border-2'>
          <div>
            <div className='post font-bold  md:h-[144px] h-[100px] md:w-[800px] w-[350px] rounded-t-3xl'>
              <h1 className='absolute text-white md:ml-[320px] ml-[60px] md:mt-[27px] mt-[14px] md:text-2xl text-xl'>LOG IN</h1>
              <h4 className='text-white ml-[60px] md:ml-[260px] md:mt-[75px] mt-[45px] absolute md:text-sm text-[10px]'><i>START YOUR JOURNEY WITH US</i></h4>
              <div className=' absolute md:mt-[114px] mt-[76px] md:ml-[280px] ml-[40px] flex md:h-8 h-6'>
                <button onClick={() => navigate('/Signup')} className='bg-gray-200 w-[140px] icons md:rounded-t-xl rounded-t-md pl-1 '>SIGN UP</button>
                <button onClick={() => navigate('/')} className=' w-[140px] bg-white icons md:rounded-t-xl rounded-t-md pl-1'>LOG IN</button>
              </div>
            </div>
            <div className=' bg-white h-[600px] md:h-[356px] md:w-[802px] w-[348px] rounded-b-3xl grid sm:grid md:flex'>
              <div className=' md:mr-[60px] mr-[17px] md:ml-[50px] ml-[17px] mt-[30px]'>
                <input type='text' placeholder='Email' className='border-2 md:w-[340px] w-[300px]' ></input><br></br><br></br>
                <input type='text' placeholder='Password' className='border-2 md:w-[340px] w-[300px]' ></input>
                <div className='absolute w-[340px] mt-8'> <input type='checkbox' ></input><label className='pl-4'>Remember me</label> <button onClick={() => navigate('/ForgotPassword')} className='icons font-bold md:ml-[70px] ml-[30px]'>Forgot Password?</button></div>
                <input type='button' value='LOG IN' onClick={Dashboard} className='rounded-lg mt-28 post md:w-[340px] w-[315px] h-9 text-white font-bold post'></input>
              </div>
              <div className=' absolute md:w-[4px] w-[300px] md:h-52 h-2 bg-gray-200 md:mt-[20px] mt-[350px] md:ml-[420px] ml-[25px]'>
                <p className=' absolute h-10 w-10 rounded-full ml-[120px] md:ml-[-15px] bg-white mt-[-10px] md:mt-[75px] border-2'><h5 className='ml-[7px] mt-[5px]'>OR</h5></p>
              </div>
              <div className=' mt-[160px] md:mt-[50px] md:mr-[30px]'>
                <div className='border-2 w-[300px] pl-12 text-sm flex'><img src={Google} className='w-6 h-6'></img>Continue with Google</div><br></br>
                <div className='border-2 w-[300px] pl-12 text-sm flex'><img src={Microsoft} className='w-4 h-4'></img>Continue with Microsoft</div><br></br>
                <div className='border-2 w-[300px] pl-12 text-sm flex'><img src={Linkedin} className=' w-4 h-4'></img>Continue with LinkedIn</div><br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
