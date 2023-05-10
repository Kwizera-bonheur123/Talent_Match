import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Google from '../components/google.jpg'
import Linkedin from '../components/linkedin.png'
import Microsoft from '../components/microsoft.jpg'
import 'boxicons'
const Login = () => {
  const navigate = useNavigate();
  const [email, emailchange] = useState();
  const [validEmail, setValidEmail] = useState();
  const [password, passwordchange] = useState();
  const [passwordValid, setPasswordValid] = useState();
  const handleLogin = (e) => {
    e.preventDefault(false);
    if (email == '' || email == null) {
      document.getElementById("emailerror").innerHTML = "email required";
      setValidEmail(!validEmail)
    }
    if (password == '' || password == null) {
      document.getElementById("passworderror").innerHTML = "password required";
      setPasswordValid(!passwordValid)
    }
  }
  return (
    <>
      <div className='h-20 w-full post'>
        <h1 className='font-bold text-3xl text-white mx-[43%] mt-2 absolute'>TALENT</h1>
        <h1 className='font-bold text-3xl text-white mx-[49%] absolute mt-7'>MATCH</h1>
      </div>
      <div className=' login md:h-screen h-[1000px] w-full top-0'>
        <div className=' shadow-2xl shadow-black absolute mt-[80px] ml-[20px]  md:ml-[27%] md:w-[804px] w-[350px] h-[500px] rounded-3xl border-2'>
          <div>
            <div className='post font-bold  md:h-[144px] h-[100px] md:w-[800px] w-[350px] rounded-t-3xl'>
              <h1 className='absolute text-white md:ml-[47%] ml-[60px] md:mt-[27px] mt-[14px] md:text-2xl text-xl'>LOG IN</h1>
              <h4 className='text-white ml-[60px] md:ml-[40%] md:mt-[75px] mt-[45px] absolute md:text-sm text-[10px]'>START YOUR JOURNEY WITH US</h4>
              <div className=' absolute md:mt-[114px] mt-[76px] md:ml-[280px] ml-[40px] flex md:h-8 h-6'>
                <button onClick={() => navigate('/')} className=' w-[140px] bg-white icons md:rounded-t-xl font-normal rounded-t-md pl-1'>Log in</button>
                <button onClick={() => navigate('/Signup')} className='bg-gray-200 w-[140px] font-normal icons md:rounded-t-xl rounded-t-md pl-1 '>Sign up</button>
              </div>
            </div>
            <div className=' bg-white h-[600px] md:h-[356px] md:w-[802px] w-[348px] rounded-b-3xl grid sm:grid md:flex'>
              <form onSubmit={handleLogin} className='log md:mr-[60px] mr-[17px] md:ml-[50px] ml-[17px] mt-[30px]'>
                <div>
                  <div className='mt-[1%] pl-3 absolute'><box-icon name='envelope'></box-icon></div>
                  <input type='email' name='' value={email} onChange={(e) => emailchange(e.target.value)} placeholder='Email' className={` border-2 ${!validEmail ? "border-gray-300" : " border-red-600"} pl-9 md:w-[340px] h-[40px] rounded-lg w-[300px]`}></input>
                  <span className='text-red-600 font-semibold' id='emailerror'></span><br></br><br></br>
                </div>
                <div>
                  <div className='mt-[1%] pl-[1%] absolute'><box-icon type='solid' name='lock'></box-icon></div>
                  <input type='password' value={password} onChange={(e) => passwordchange(e.target.value)} placeholder='Password' className={` border-2 ${!passwordValid ? "border-gray-300" : " border-red-600"} pl-8 md:w-[340px] h-[40px] rounded-lg w-[300px]`} ></input>
                  <span className='text-red-600 font-semibold' id='passworderror'></span>
                </div>
                <div className='flex justify-between mt-2'>
                  <div>
                    <input type='checkbox' ></input>
                    <label className='font-normal ml-2'>Remember me</label>
                  </div>
                  <button onClick={() => navigate('/ForgotPassword')} className='icons font-normal'>Forgot Password?</button>
                </div>
                <input type='submit' value='LOG IN' className='rounded-lg mt-6 .post md:w-[340px] w-[315px] h-9 text-white font-bold post'></input>
              </form>
              <div className=' absolute md:w-[4px] w-[300px] md:h-52 h-2 bg-gray-200 md:mt-[20px] mt-[350px] md:ml-[420px] ml-[25px]'>
                <p className=' absolute h-10 w-10 rounded-full ml-[120px] md:ml-[-15px] bg-white mt-[-10px] md:mt-[75px] border-2'><h5 className='ml-[7px] mt-[5px]'>OR</h5></p>
              </div>
              <div className=' mt-[160px] md:mt-[50px] md:mr-[30px]'>
                <div className='border-2 w-[300px] pl-12 py-[8px] rounded-lg h-[13%] text-sm flex'><img src={Google} className='w-6 h-6'></img>Continue with Google</div><br></br>
                <div className='border-2 w-[300px] pl-12 py-[8px] rounded-lg h-[13%] text-sm flex'><img src={Microsoft} className='w-4 h-4'></img>Continue with Microsoft</div><br></br>
                <div className='border-2 w-[300px] pl-12 py-[8px] rounded-lg h-[13%] text-sm flex'><img src={Linkedin} className=' w-4 h-4'></img>Continue with LinkedIn</div><br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
