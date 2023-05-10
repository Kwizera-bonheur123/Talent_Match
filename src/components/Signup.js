import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { Fragment } from 'react'
import Login from './Login'
import Google from '../components/google.jpg'
import Linkedin from '../components/linkedin.png'
import Microsoft from '../components/microsoft.jpg'
import Logo from '../components/Group 119032.png'
import { useState } from 'react'
import 'boxicons';
const Signup = () => {
    const [agree, setAgree] = useState("agree");
    const [name, setName] = useState();
    const [nameerror, setNameerror] = useState(true);
    const [email, setEmail] = useState();
    const [emailerror, setEmailerror] = useState(true);
    const [password, setPassword] = useState();
    const [passworderror, setPassworderror] = useState(true);
    const [confirm, setConfirm] = useState();
    const [confirmerror, setConfirmerror] = useState(true);
    const [phone, setPhone] = useState();
    const [phoneerror, setPhoneerror] = useState(true);
    const [status, setStatus] = useState();
    const [statuserror, setStatuserror] = useState(true);
    const navigate = useNavigate();
    const Send = (e) => {
        e.preventDefault()
        const data = { name, email, password, confirm, status, agree }
        if (name == '' || name == null) {
            document.getElementById("nameerror").innerHTML = "Name required"
            setNameerror(!nameerror)
        }
        if (email == '' || email == null) {
            document.getElementById("emailerror").innerHTML = "Email required"
            setEmailerror(!emailerror)
        }
        if (password == '' || password == null) {
            document.getElementById("passworderror").innerHTML = "Password required"
            setPassworderror(!passworderror)
        }
        if (confirm == '' || confirm == null) {
            document.getElementById("confirmerror").innerHTML = "Confirm required"
            setConfirmerror(!confirmerror)
        }
        if (status == '' || status == null) {
            document.getElementById("statuserror").innerHTML = "Choose your required"
            setStatuserror(!statuserror)
        }
    }
    return (
        <>
            <div className='  post h-24 w-full'>
                <h1 className='font-bold text-3xl text-white mx-[43%] mt-2 absolute'>TALENT</h1>
                <h1 className='font-bold text-3xl text-white mx-[49%] absolute mt-7'>MATCH</h1>

            </div>
            <div className=' md:h-screen h-[1000px] w-full'>
                <div className='shadow-2xl absolute mt-[80px] ml-[20px] md:ml-[22%] md:w-[57%] w-[350px] h-[500px] rounded-3xl border-2'>
                    <div>
                        <div className='post font-bold  md:h-[144px] h-[100px] md:w-full w-[350px] rounded-t-3xl'>
                            <h1 className='absolute text-white md:ml-[400px] ml-[60px] md:mt-[27px] mt-[14px] md:text-2xl text-xl'>SIGN UP</h1>
                            <h4 className='text-white ml-[60px] md:ml-[340px] md:mt-[75px] mt-[45px] absolute md:text-sm text-[10px]'>START YOUR JOURNEY WITH US</h4>
                            <div className=' absolute md:mt-[114px] mt-[76px] md:ml-[310px] ml-[40px] flex md:h-8 h-6'>
                                <button onClick={() => navigate('/Login')} className='bg-gray-200 w-[140px] icons md:rounded-t-xl rounded-t-md pl-1 font-normal'>Log in</button>
                                <button onClick={() => navigate('/Signup')} className='bg-white w-[140px] icons md:rounded-t-xl rounded-t-md pl-1 font-normal'>Sign up</button>
                            </div>
                        </div>
                        <div className=' bg-white h-[600px] md:h-[356px] md:w-full w-[348px] rounded-b-3xl grid sm:grid md:flex'>
                            <form onSubmit={Send} className=' md:mr-[60px] mr-[17px] md:ml-[50px] ml-[17px] mt-[30px]'>
                                <div className=' grid grid-cols-2 mr-[35px] gap-2'>
                                    <div>
                                        <div className='absolute pl-2  mt-[9px]'><box-icon name='edit-alt'></box-icon></div>
                                        <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Full Name' className={` ${nameerror ? "border-gray-300" : "border-red-600"} pl-9 border-2 h-[40px] rounded-lg md:w-[180px] w-[140px]`}></input>
                                        <span id="nameerror" className='font-semibold text-red-600'></span>
                                    </div>
                                    <div>
                                        <div className='absolute pl-2 mt-[11px]'><ion-icon name="mail-outline"></ion-icon></div>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' className={` ${emailerror ? "border-gray-300" : "border-red-600"} pl-7 rounded-lg border-2 md:w-[180px] h-[40px] w-[150px]`} ></input>
                                        <span id="emailerror" className='font-semibold text-red-600'></span>
                                    </div>
                                    <div>
                                        <div className='absolute pl-[4px] mt-[18px]'><ion-icon name="lock-closed-outline"></ion-icon></div>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter Your Password' className={` ${passworderror ? "border-gray-300" : "border-red-600"} pl-5 rounded-lg border-2 md:w-[180px] h-[40px] w-[140px] mt-2`} ></input>
                                        <span id="passworderror" className='font-semibold text-red-600'></span>
                                    </div>
                                    <div>
                                        <div className='absolute pl-2 mt-[16px]'><ion-icon name="lock-closed-outline"></ion-icon></div>
                                        <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type='password' placeholder='Confirm Your Password' className={` ${confirmerror ? "border-gray-300" : "border-red-600"} pl-6 border-2 h-[40px] rounded-lg md:w-[180px] w-[160px] mt-2`} ></input>
                                        <span id="confirmerror" className='font-semibold text-red-600'></span>
                                    </div>
                                </div>
                                <div className='my-[20px]'>
                                    <div className='flex gap-8 text-md h1 font-semibold'>
                                        <div className='flex gap-2'><p>Employee</p><input type="radio" checked={status === 'EMPLOYEE'} name="status" onChange={(e) => setStatus(e.target.value)} value="EMPLOYEE"></input></div>
                                        <div className='flex gap-2'><p>Recruiter</p><input type="radio" name="status" checked={status === 'RECRUITERS'} onChange={(e) => setStatus(e.target.value)} value="RECRUITERS"></input></div>
                                    </div>
                                    <span id="statuserror" className='font-semibold text-red-600'></span>
                                </div>
                                <div className='absolute w-[340px] my-1'> <input checked={agree} value={agree} onChange={(e) => setAgree(e.target.value)} type='checkbox' ></input><label className='pl-2 text-sm font-none text-gray-400'>I agree to the terms and conditions</label></div>
                                <input type='submit' value='Sign up' className=' absolute rounded-lg mt-8 post md:w-[340px] w-[315px] h-9 text-white font-bold'></input>
                                <div className='mt-[23%] text-gray-600'>Already have an account?<button onClick={() => navigate('/Login')} className='h1 pl-2 font-bold cursor-pointer'>Log in</button></div>
                            </form>
                            <div className=' absolute md:w-[4px] w-[300px] md:h-52 h-2 bg-gray-200 md:mt-[20px] mt-[350px] md:ml-[50%] ml-[25px]'>
                                <p className=' absolute h-10 w-10 rounded-full ml-[120px] md:ml-[-15px] bg-white mt-[-10px] md:mt-[75px] border-2'><h5 className='ml-[7px] text-gray-300 font-bold mt-[5px]'>OR</h5></p>
                            </div>
                            <div className=' mt-[160px] md:mt-[50px] ml-[25px] md:mx-[40px]'>
                                <div className='border-2 w-[300px] h-[13%] py-[8px] pl-14 rounded-lg text-sm flex'><img src={Google} className='w-6 h-6'></img><h2 className='absolute pl-8'>Continue with Google</h2></div>
                                <div className=' border-2 w-[300px] pl-14 mt-[13px] h-[13%] py-[8px] text-sm rounded-lg flex'><img src={Microsoft} className=' w-4 h-6'></img><h2 className='absolute pl-8'>Continue with Microsoft</h2></div>
                                <div className='border-2 w-[300px] pl-14 h-[13%] mt-[13px] py-[8px] text-sm rounded-lg flex'><img src={Linkedin} className=' w-4 h-6'></img><h2 className='absolute pl-8'>Continue with LinkedIn</h2></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
