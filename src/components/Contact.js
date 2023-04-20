import React, { useState } from 'react'
import Nav from './nav'
import Telephone from '../components/Telephone.png'
import Email from '../components/Email.png'
import Linked from '../components/Group 21.png'
import Ig from '../components/ph_instagram-logo-light.png'
import Twitter from '../components/Group 23.png'
import Fb from '../components/Group 24.png'
import Footer from './Footer'
const Contact = () => {
    const [email, setEmail] = useState();
    const [emailerror, setEmailerror] = useState();
    const [message, setMessage] = useState();
    const [messageerror, setMessageerror] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email == '' || email == null) {
            setEmailerror(!emailerror)
        }
        if (message == '' || message == null) {
            setMessageerror(!messageerror)
        }
    }
    return (
        <div>
            <Nav />
            <div>
                <div className='mt-[80px] w-screen'>
                    <div className=' h-[300px] bg-gray-100'>
                        <h1 className=' absolute mt-[35px] text-3xl font-semibold h1'>Get In Touch</h1>
                        <h1 className='absolute mt-[80px] text-lg h1 font-semibold'>Lorem ipsum dolor sit amet consectetur.<br></br> Tincidunt pelle quis vitae placerat.</h1>
                    </div>
                </div>
                <div className='shadow-2xl md:shadow-black md:flex grid h-[800px] md:h-[370px] md:ml-[250px] w-screen md:w-[950px] -mt-[140px] absolute'>
                    <form onSubmit={handleSubmit} className='w-[475px] bg-white h-[170px] md:h-[370px]'>
                        <h1 className='h1 ml-[140px] mt-[40px] absolute font-bold text-xl'>Send a message</h1>
                        <div className=' md:mr-0 mr-[15px] absolute mt-[90px] ml-[15px] md:ml-[30px] grid grid-cols-2 gap-5'>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder={`${!emailerror ? "Email" : "please Email is required"}`} className={` ${!emailerror ? "Input" : " Inputred"} Input w-[400px]`}></input>
                        </div>
                        <input type='textarea' value={message} onChange={(e) => setMessage(e.target.value)} placeholder={`${!emailerror ? "Message" : "please Message is required"}`} className={` ${!emailerror ? "Input" : " Inputred"} w-[360px] md:w-[400px] ml-[15px] md:ml-[30px] mt-[170px]`}></input>
                        <input type="submit" value="SUBMIT" className='post w-[170px] rounded-xl text-white font-bold h-[40px] mt-[50px] ml-[130px]'></input>
                    </form>
                    <div className='post w-screen md:w-[475px]'>
                        <h2 className='text-white absolut ml-[60px] mt-[30px] font-semibold text-2xl'>Contact info</h2>
                        <div className='flex ml-[60px] text-white gap-5 mt-[30px]'>
                            <img src={Telephone}></img>
                            <h1 className='absolute mt-[16px] ml-[70px]'>+250 781 859 648</h1>
                        </div>
                        <div className='flex ml-[60px] text-white gap-5 mt-[30px]'>
                            <img src={Email}></img>
                            <h1 className='absolute mt-[16px] ml-[70px]'>info@talentmatch.com</h1>
                        </div>
                        <div className='flex gap-7 ml-[60px] mt-[35px]'>
                            <img src={Linked} className='w-[50px] h-[50px]'></img>
                            <img className='w-[50px] h-[50px]' src={Ig}></img>
                            <img className='w-[50px] h-[50px]' src={Twitter}></img>
                            <img className='w-[50px] h-[50px]' src={Fb}></img>
                        </div>
                    </div>
                </div>
            </div >
            <div className='bg-white w-screen h-[640px] md:h-[300px]'></div>
            <Footer />
        </div >
    )
}

export default Contact
