import React from 'react'
import Nav from './ProfileNav'
import Footer from './Footer'
import Searchbar from './Searchbar'
import Upload from './Upload.png'
import Logo from './CS.png'
const MoreDetail = () => {
    return (
        <div>
            <div className='flex'>
                <Nav />
                <div className='w-[1400px] h-[1300px] ml-[40px] overflow-y-auto'>
                    <Searchbar />

                    <div>
                        <div style={{
                            backgroundImage: `url(${Logo})`
                        }} className='bg-gray-200 w-[980px] h-[180px] mt-[40px]'>
                            {/* <img src={Image} className='absolute w-[100px] rounded-full mt-[30px] ml-[25px] h-[100px]'></img> */}
                            <div className='bg-white w-[140px] h-[140px] absolute mt-[110px] shadow-md ml-[45px]'><img src={Logo} className=' h-[110px] w-[120px] absolute rounded-full'></img></div>

                        </div>
                        <div className=' flex gap-24'>
                            <div className='ml-[45px] mt-[90px]'>
                                <h1 className='font-bold text-gray-600 text-xl'>Creative Solutions</h1>
                                <h1 className='font-bold text-black text-xl'>UI/UX Designer</h1>
                                <h1 className='font-bold text-lg mt-[30px]'>About the Company</h1>
                                <p className='text-md mt-[20px]'>Lorem ipsum dolor sit amet consectetur. Mauris enim sed sit pellentesque libero <br></br>
                                    cras urna in accumsan. Faucibus nunc aliquet commodo id lectus imperdiet <br></br>
                                    imperdiet, Urna malesuada lectus augue laoreet. Mattis ac blandit fringilla amet <br></br>
                                    faucibus tincidunt neque libero a, Orci metus placerat gravida tempus viverra purus<br></br>
                                    Et sed gravida viverra vitae at at tincidunt molestie quisque. Donec volutpat mauris <br></br>
                                    in cursus a ultrices curabitur, Ornare neque diam id quam aliquam aliquet ultrices.<br></br>
                                    Magna amet aliquam mi mauris vel morbi.
                                </p>
                                <h1 className='font-bold text-lg mt-[30px]'>Job description</h1>
                                <p className='text-md mt-[20px]'>Lorem ipsum dolor sit amet consectetur. Mauris enim sed sit pellentesque libero <br></br>
                                    cras urna in accumsan. Faucibus nunc aliquet commodo id lectus imperdiet <br></br>
                                    imperdiet, Urna malesuada lectus augue laoreet. Mattis ac blandit fringilla amet <br></br>
                                    faucibus tincidunt neque libero a, Orci metus placerat gravida tempus viverra purus<br></br>
                                    Et sed gravida viverra vitae at at tincidunt molestie quisque. Donec volutpat mauris <br></br>
                                    in cursus a ultrices curabitur, Ornare neque diam id quam aliquam aliquet ultrices.<br></br>
                                    Magna amet aliquam mi mauris vel morbi.
                                </p>
                                <h1 className='font-bold text-lg mt-[30px]'>What you will do?</h1>
                                <p className='text-md mt-[20px]'>* Lorem ipsum dolor sit amet consectetur. Mauris enim sed sit pellentesque libero<br></br> cras urna in accumsan, Faucibus nunc aliquet commodo.<br></br>
                                    * Lorem ipsum dolor sit amet consectetur. Mauris enim sed sit pellentesque libero<br></br> cras urna in accumsan, Faucibus nunc aliquet commodo.<br></br>
                                    * Lorem ipsum dolor sit amet consectetur. Mauris enim sed sit pellentesque libero<br></br> cras urna in accumsan, Faucibus nunc aliquet commodo.
                                </p>
                                <h1 className='font-bold text-lg mt-[30px]'>Candidate requirement</h1>
                                <p className='text-md mt-[20px]'>* Lorem ipsum dolor sit amet consectetur. Mauris enim sed sit pellentesque libero<br></br> cras urna in accumsan, Faucibus nunc aliquet commodo.<br></br>
                                    * Lorem ipsum dolor sit amet consectetur. Mauris enim sed sit pellentesque libero<br></br> cras urna in accumsan, Faucibus nunc aliquet commodo.<br></br>
                                    * Lorem ipsum dolor sit amet consectetur. Mauris enim sed sit pellentesque libero<br></br> cras urna in accumsan, Faucibus nunc aliquet commodo.
                                </p>
                            </div>
                            <div className='mt-[150px]'>
                                <diV className='flex gap-5'>
                                    <img src={Upload} className='absolute w-[20px] h-[20px] mt-[10px] ml-[218px]'></img>
                                    <button className='learmore rounded-xl font-bold h-[40px] w-[110px]'>Bookmark</button>
                                    <button className='post rounded-xl text-white font-bold h-[40px] w-[120px]'>Apply</button>
                                </diV>
                                <h1 className='font-bold text-lg mt-[30px]'>Position summary</h1>
                                <div className='flex gap-5 mt-[30px]'>
                                    <h1 className='bg-gray-300 pl-[18px] pt-[3px] font-bold text-md rounded-full w-[100px] h-[30px]'>Full time</h1>
                                    <h1 className='bg-gray-300 pl-[18px] pt-[3px] font-bold text-md rounded-full w-[100px] h-[30px]'>On site</h1>
                                </div>
                                <h1 className='font-bold text-lg mt-[30px]'>Skills and expertise</h1>
                                <div className='grid grid-cols-2 gap-2 mt-[30px]'>
                                    <h1 className='expertise  pt-[3px] font-bold text-sm rounded-full w-[120px] h-[30px]'>Colaboration</h1>
                                    <h1 className='expertise  pt-[3px] font-bold text-sm rounded-full w-[120px] h-[30px]'>Ploblem solving</h1>
                                    <h1 className='expertise  pt-[3px] font-bold text-sm rounded-full w-[120px] h-[30px]'>UX design</h1>
                                    <h1 className='expertise  pt-[3px] font-bold text-sm rounded-full w-[120px] h-[30px]'>Prototyping</h1>
                                    <h1 className='expertise  pt-[3px] font-bold text-sm rounded-full w-[120px] h-[30px]'>Full time</h1>
                                    <h1 className='expertise  pt-[3px] font-bold text-sm rounded-full w-[120px] h-[30px]'>hard working</h1>
                                </div>
                                <h1 className='mt-30px font-bold text-md'>Company's social media</h1>
                            </div>
                        </div>
                        <div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MoreDetail
