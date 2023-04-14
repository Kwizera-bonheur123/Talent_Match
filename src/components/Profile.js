import React from 'react'
import ProfileNav from './ProfileNav'
import Image from '../components/default.jpg'
import LocationLogo from './Vector.png'
import { useNavigate } from 'react-router-dom'
import Photo from '../components/add photo.png'
import email from './Group 118994.png'
import phone from './Group 118999.png'
import Footer from './Footer'
import Searchbar from './Searchbar'

const Profile = () => {
    const navigate = useNavigate();
    const Edit = () => {
        navigate("/EditProfilePictute");
    }
    return (
        <div>
            <div className='flex'>
                <ProfileNav />
                <div className='ml-[170px]'>
                    <Searchbar />
                    <div onClick={Edit} className='bg-gray-200 w-[700px] rounded-t-[30px] h-[130px] mt-[40px]'>
                        <img src={Image} className='absolute w-[100px] rounded-full mt-[70px] ml-[25px] h-[100px]'></img>
                        <img src={Photo} className='absolute mt-[130px] ml-[100px]'></img>
                        <div className='absolute mt-[130px] ml-[140px]'>
                            <h1 className='h1 text-md font-bold'>ISHIMWE Serge</h1>
                            <h1 className='text-gray-500 text-sm text-semibold'>Product designer</h1>
                            <div className='flex gap-2'>
                                <img src={LocationLogo} className='h-[15px]'></img>
                                <h1 className='text-gray-600 text-[10px] text-semibold'>Kigali Rwanda</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-200 w-[700px] h-[970px] mt-[80px]'>
                        <div className='ml-[70px]'>
                            <h1 className='text text-2xl font-bold absolute mt-[40px]'>Personal information</h1>
                            <div className='flex absolute mt-[100px]'>
                                <img src={email}></img>
                                <div>
                                    <h1 className='text-md text font-semibold'>Email address</h1>
                                    <h1 className='text-lg font-bold text'>Iserge@gmail.com</h1>
                                </div>
                            </div>
                            <div className='flex absolute mt-[180px]'>
                                <img src={phone}></img>
                                <div>
                                    <h1 className='text-md text font-semibold'>Phone number</h1>
                                    <h1 className='text-lg font-bold text'>+250781353224</h1>
                                </div>
                            </div>
                            <p className='bg-black h-[1px] w-[570px] absolute mt-[250px]'></p>
                            <h1 className='text font-bold text-[30px] absolute mt-[270px]'>About me</h1>
                            <p className='absolute mt-[320px] font-bold text-md text'>Lorem ipsum dolor sit amet consectetur. Mauris enim sed sit <br></br>pellentesque libero cras urna in accumsan. Faucibus nunc <br></br>aliquet commodo id lectus imperdiet imperdiet.<br></br><br></br>Urna malesuada lectus augue laoreet. Mattis ac blandit fringilla <br></br>amet faucibus tincidunt neque libero a.<br></br>Orci metus placerat gravida tempus viverra purus. Et sed gravida<br></br>viverra vitae at at tincidunt molestie quisque. Donec volutpat<br></br>mauris in cursus a ultrices curabitur.<br></br><br></br>

                                Ornare neque diam id quam aliquam aliquet ultrices. Magna <br></br>amet aliquam mi mauris vel morbi.</p>
                            <p className='bg-black h-[1px] w-[570px] absolute mt-[650px]'></p>
                            <h1 className='text font-bold text-[30px] absolute mt-[665px]'>Skills</h1>
                            <div className='grid grid-cols-2 gap-10 absolute mt-[720px]'>
                                <h1 className='skills text-lg font-bold pl-[25px] rounded-3xl pt-[8px] h-[50px]'>Visual design</h1>
                                <h1 className='skills text-lg font-bold pl-[25px] rounded-3xl pt-[8px] h-[50px]'>Problem solving</h1>
                                <h1 className='skills text-lg font-bold pl-[25px] rounded-3xl pt-[8px] h-[50px]'>Information architecture</h1>
                                <h1 className='skills text-lg font-bold pl-[25px] rounded-3xl pt-[8px] h-[50px]'>Prototyping</h1>
                                <h1 className='skills text-lg font-bold pl-[25px] rounded-3xl pt-[8px] h-[50px]'>Design thinking</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Profile
