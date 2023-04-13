import React from 'react'
import Nav from './nav'
import Footer from './Footer'
import Photo from '../components/Svg.png'
import Slvt from '../components/SLVT.png'
import Sm from '../components/SM.png'
import CS from '../components/CS.png'
import Tech from '../components/TCH.png'
import Rectangle from '../components/Rectangle 9.png'
import card1 from '../components/Ellipse 2.png'
import photo1 from '../components/Rectangle 7.png'
import photo2 from '../components/Rectangle 7 (1).png'
import photo3 from '../components/Rectangle 7 (2).png'
import photo4 from '../components/Rectangle 7 (3).png'
import photo5 from '../components/Rectangle 11 (1).png'
import card2 from '../components/Ellipse 2 (1).png'
import photo6 from '../components/Rectangle 11 (3).png'
import photo7 from '../components/Rectangle 11 (4).png'
const Home = () => {
    const scrollLeft = () => {
        document.getElementById("scroll").scrollLeft -= 460;
    }
    const scrollRight = () => {
        document.getElementById("scroll").scrollLeft += 460;
    }
    return (
        <div className='mt-[100px]'>
            <Nav />
            <div className='md:flex grid justify-between'>
                <div className='head1 text-sm md:text-3xl font-bold ml-[50px] md:ml-[100px]'>
                    <h1>Match Your Talent To Success With<br></br>TalentMatch-Your Ultimate Hiring<br></br>Tool!</h1>
                    <div className='text-white absolute mt-[70px] ml-[90px] md:ml-[150px]'><ion-icon name="arrow-forward-outline"></ion-icon></div>
                    <button className=' text-sm md:text-xl rounded-lg h-8 md:h-11 pr-7 md:pr-10 w-[120px] md:w-[200px] mt-[40px] md:mt-[60px]'>Get started</button>
                </div>
                <div>
                    <div className=' ml-8 w-[300px] md:w-[450px] h-[300px] md:h-[450px]'><img src={Photo}></img></div>
                </div>
            </div>
            <div className=' '>
                <h1 className=' h1 absolute top-[450px] font-bold text-md md:text-4xl ml-[110px] md:ml-[440px]'>OUR Trusted Client</h1>
                <div className='flex md:justify-between gap-3'>
                    <img src={Slvt} className='md:w-[251px] w-[100px] md:h-[155px] h-[90px]'></img>
                    <img src={Sm} className='md:w-[251px] w-[70px] md:h-[155px] h-[70px]'></img>
                    <img src={CS} className='md:w-[251px] w-[90px] md:h-[155px] h-[80px]'></img>
                    <img src={Tech} className='md:w-[251px] w-[50px] md:h-[155px] h-[90px]'></img>
                </div>
                <div className=' pt-[30px] md:pt-[100px] flex justify-between ml-[10px] md:ml-[100px] mr-[100px]'>
                    <img src={Rectangle} className=' w-[120px] h-[200px] md:h-[360px] md:w-[400px]'></img>
                    <div className=' mt-[30px] md:mt-[70px]'>
                        <h1 className='h1 text-sm md:text-3xl font-bold'>Help Company To Get<br></br>The Best Talent</h1>
                        <h2 className=' pt-[5px] text-[8px] md:text-lg md:pt-[20px]'>Lorem ipsum dolor sit amet consectetur.<br></br> Tincidunt pellentesque quis vitae <br></br> placerat. Nisi ut arcu sed vehicula.</h2>

                        <div className='flex justify-between mt-[30px]'>
                            <button className='post md:w-[140px] text-[9px] rounded-lg md:h-[40px] w-[58px] h-[28px] font-bold text-white'>POST A JOB</button>
                            <button className='learmore border-2 text-[9px] md:w-[140px] md:h-[40px] font-bold rounded-lg'>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='mt-50px md:mt-[100px]'>
                    <h1 className='h1 md:text-4xl text-md ml-[90px] md:ml-[360px] font-bold md:mt-[50px] mt-[30px]'>What Our Client Says About Us</h1>
                    <div onClick={scrollLeft} className='learmore ml-[20px] md:ml-[60px] absolute mt-[85px] md:mt-[200px] rounded-full md:h-10 h-8 md:w-10 w-8 text-xl md:pl-2 pl-1 pt-[1.5px]'><ion-icon name="arrow-back-outline"></ion-icon></div>
                    <div onClick={scrollRight} className='learmore absolute md:mr-[60px] mr-[20px] md:mt-[200px] mt-[85px] rounded-full md:h-10 h-7 md:w-10 w-7 text-xl md:pl-2 pl-1 md:pt-1 pt-[0.8px] right-0 '><ion-icon name="arrow-forward-outline"></ion-icon></div>
                    <div id='scroll' className=' flex md:ml-[200px] ml-[55px] md:mr-[200px] mr-[55px] items-center justify-start mt-[30px] md:mt-[60px] overflow-x-auto whitespace-nowrap gap-5 md:gap-16'>
                        <div className='card md:w-[400px] w-[130px] md:h-[300px] h-[150px]  rounded-xl'>
                            <img src={card2} className='ml-[40px] mt-2 w-[40px] md:w-[100px] md:ml-[136px] md:mt-[40px]'></img>
                            <h2 className='h1 pt- ml-[20px] md:ml-[130px] font-bold text-[11px] '>IGIRANEZA Lionel</h2>
                            <h3 className='h1  ml-[10px]  md:ml-[25px] md:text-lg text-[5px]'>Very experienced team and they took care of<br></br>
                                my project very nicely</h3>
                        </div>
                        <div className='card md:w-[400px] w-[130px] md:h-[300px] h-[150px]  rounded-xl'>
                            <img src={card1} className='ml-[40px] mt-2 w-[40px] md:w-[100px] md:ml-[136px] md:mt-[40px]'></img>
                            <h2 className='h1 pt- ml-[20px] md:ml-[130px] font-bold text-[11px] '>IGIRANEZA Lionel</h2>
                            <h3 className='h1  ml-[10px]  md:ml-[25px] md:text-lg text-[5px]'>Amazing team and amazing services from the<br></br>
                                experts. overall great experience</h3>
                        </div>
                        <div className='card md:w-[400px] w-[130px] md:h-[300px] h-[150px]  rounded-xl'>
                            <img src={card1} className='ml-[40px] mt-2 w-[40px] md:w-[100px] md:ml-[136px] md:mt-[40px]'></img>
                            <h2 className='h1 pt- ml-[20px] md:ml-[130px] font-bold text-[11px] '>IGIRANEZA Lionel</h2>
                            <h3 className='h1  ml-[10px]  md:ml-[25px] md:text-lg text-[5px]'>Amazing team and amazing services from the<br></br>
                                experts. overall great experience</h3>
                        </div>
                        <div className='card md:w-[400px] w-[130px] md:h-[300px] h-[150px]  rounded-xl'>
                            <img src={card1} className='ml-[40px] mt-2 w-[40px] md:w-[100px] md:ml-[136px] md:mt-[40px]'></img>
                            <h2 className='h1 pt- ml-[20px] md:ml-[130px] font-bold text-[11px] '>IGIRANEZA Lionel</h2>
                            <h3 className='h1  ml-[10px]  md:ml-[25px] md:text-lg text-[5px]'>Amazing team and amazing services from the<br></br>
                                experts. overall great experience</h3>
                        </div>
                        <div className='card md:w-[400px] w-[130px] md:h-[300px] h-[150px]  rounded-xl'>
                            <img src={card1} className='ml-[40px] mt-2 w-[40px] md:w-[100px] md:ml-[136px] md:mt-[40px]'></img>
                            <h2 className='h1 pt- ml-[20px] md:ml-[130px] font-bold text-[11px] '>IGIRANEZA Lionel</h2>
                            <h3 className='h1  ml-[10px]  md:ml-[25px] md:text-lg text-[5px]'>Amazing team and amazing services from the<br></br>
                                experts. overall great experience</h3>
                        </div>
                        <div className='card md:w-[400px] w-[130px] md:h-[300px] h-[150px]  rounded-xl'>
                            <img src={card1} className='ml-[40px] mt-2 w-[40px] md:w-[100px] md:ml-[136px] md:mt-[40px]'></img>
                            <h2 className='h1 pt- ml-[20px] md:ml-[130px] font-bold text-[11px] '>IGIRANEZA Lionel</h2>
                            <h3 className='h1  ml-[10px]  md:ml-[25px] md:text-lg text-[5px]'>Amazing team and amazing services from the<br></br>
                                experts. overall great experience</h3>
                        </div>
                    </div>
                </div>
                <div className='mt-[50px]'>
                    <h1 className='h1 md:text-3xl text-xl font-bold ml-[77px] md:ml-[350px]'>Explore Most In-demand</h1>
                    <h1 className='h1 md:text-3xl text-xl font-bold ml-[127px] md:ml-[450px]'>Categories</h1>
                    <div className=' ml-[50px] grid md:grid-cols-3 gap-5 mt-[40px]'>
                        <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
                            <img src={Slvt} className='w-[150px] h-[130px]'></img>
                            <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
                            <h1 className='font-bold text-2xl ml-10'>Front End Developer</h1>
                            <h1 className='ml-10 text-gray-600 mt-6'>HTML,CSS3,Javascript,Bootstrap<br></br>React js</h1>
                            <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
                            </div>
                        </div>
                        <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
                            <img src={CS} className='w-[150px] h-[100px] mt-8'></img>
                            <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
                            <h1 className='font-bold text-2xl ml-10'>Graphic Designer</h1>
                            <h1 className='ml-10 text-gray-600 mt-6'>Adobe photoshop, Adobe illistrator<br></br>Logos</h1>
                            <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
                            </div>
                        </div>
                        <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
                            <img src={Tech} className='w-[150px] h-[130px]'></img>
                            <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
                            <h1 className='font-bold text-2xl ml-10'>Back Developer</h1>
                            <h1 className='ml-10 text-gray-600 mt-6'>Python, Ruby, Java, PHP<br></br>MongoDB</h1>
                            <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
                            </div>
                        </div>
                        <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
                            <img src={Slvt} className='w-[150px] h-[130px]'></img>
                            <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
                            <h1 className='font-bold text-2xl ml-10'>Web Developer</h1>
                            <h1 className='ml-10 text-gray-600 mt-6'>Web Design Hack Accelerator<br></br>Branding value.</h1>
                            <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
                            </div>
                        </div>
                        <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
                            <img src={CS} className='w-[150px] h-[100px]'></img>
                            <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
                            <h1 className='font-bold text-2xl ml-10'>UI/UX Designer</h1>
                            <h1 className='ml-10 text-gray-600 mt-6'>Figma, Adobexd, Adobe<br></br>Photoshop, illistrator</h1>
                            <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
                            </div>
                        </div>
                        <div className='bg-gray-200 w-[300px] h-[370px] rounded-lg'>
                            <img src={Slvt} className='w-[150px] h-[130px]'></img>
                            <h1 className='absolute ml-[205px] -mt-[80px] font-bold'>Full-time</h1>
                            <h1 className='font-bold text-2xl ml-10'>Front End Developer</h1>
                            <h1 className='ml-10 text-gray-600 mt-6'>HTML,CSS3,Javascript,Bootstrap<br></br>React js</h1>
                            <div className='flex justify-between ml-[40px] mr-[40px] mt-[40px]'>
                                <h1 className='font-bold text-gray-600 mause-pointer'>More details</h1>
                                <button className='bg-gray-700 text-white h-[40px] w-[100px] rounded-lg'>Apply Now</button>
                            </div>
                        </div>
                        <button className='rounded-xl border-2 border-gray-500 h-[40px] w-[170px] mt-[40px] ml-[60px] md:ml-[500px]'>View all jobs</button>
                    </div>
                    <div className=' h-[940px] md:h-[700px] mt-[30px] right-0 left-0 bg-gray-100'>
                        <h1 className='absolute font-semibold text-green-950 md:text-3xl text-lg mt-[50px] ml-[60px] md:ml-[450px]'>What applicants say About Us</h1>
                        <div className=' ml-[20px] md:ml-[130px] mt-[150px] absolute md:gap-6 gap-4 grid md:grid-cols-2'>
                            <div className=' rounded-xl card2 w-[360px] md:w-[500px] md:h-[220px] h-[177px] border-2 border-gray-300'>
                                <img src={photo1} className=' absolute ml-[10px] md:ml-[20px] mt-[20px]'></img>
                                <p className='md:text-[13px] text-[10px] mt-[20px] absolute md:ml-[180px] ml-[130px]'>Lorem ipsum dolor sit amet consectetur. Tincidunt<br></br> pellentesque quis vitae placerat. Nisi ut arcu sed <br></br> vehicula. Libero egestas lacus non quam at Facilisis<br></br>  Tincidunt posuere nulla velit ut.</p>
                                <h2 className='h1 ml-[130px] md:ml-[180px] absolute mt-[100px] md:mt-[122px]'>Muhizi Schammah</h2>
                                <h3 className='text-[13px] mt-[140px] md:mt-[150px] absolute ml-[130px] md:ml-[180px]'>Mobile Developer  at Tech Affinity</h3>
                            </div>
                            <div className=' rounded-xl card2 w-[360px] md:w-[500px] md:h-[220px] h-[177px] border-2 border-gray-300'>
                                <img src={photo2} className=' absolute ml-[10px] md:ml-[20px] mt-[20px]'></img>
                                <p className='md:text-[13px] text-[10px] mt-[20px] absolute md:ml-[180px] ml-[130px]'>Lorem ipsum dolor sit amet consectetur. Tincidunt<br></br> pellentesque quis vitae placerat. Nisi ut arcu sed <br></br> vehicula. Libero egestas lacus non quam at Facilisis<br></br>  Tincidunt posuere nulla velit ut.</p>
                                <h2 className='h1 ml-[130px] md:ml-[180px] absolute mt-[100px] md:mt-[122px]'>Muhizi Schammah</h2>
                                <h3 className='text-[13px] mt-[140px] md:mt-[150px] absolute ml-[130px] md:ml-[180px]'>Mobile Developer  at Tech Affinity</h3>
                            </div>
                            <div className=' rounded-xl card2 w-[360px] md:w-[500px] md:h-[220px] h-[177px] border-2 border-gray-300'>
                                <img src={photo3} className=' absolute ml-[10px] md:ml-[20px] mt-[20px]'></img>
                                <p className='md:text-[13px] text-[10px] mt-[20px] absolute md:ml-[180px] ml-[130px]'>Lorem ipsum dolor sit amet consectetur. Tincidunt<br></br> pellentesque quis vitae placerat. Nisi ut arcu sed <br></br> vehicula. Libero egestas lacus non quam at Facilisis<br></br>  Tincidunt posuere nulla velit ut.</p>
                                <h2 className='h1 ml-[130px] md:ml-[180px] absolute mt-[100px] md:mt-[122px]'>Muhizi Schammah</h2>
                                <h3 className='text-[13px] mt-[140px] md:mt-[150px] absolute ml-[130px] md:ml-[180px]'>Mobile Developer  at Tech Affinity</h3>
                            </div>
                            <div className=' rounded-xl card2 w-[360px] md:w-[500px] md:h-[220px] h-[177px] border-2 border-gray-300'>
                                <img src={photo4} className=' absolute ml-[10px] md:ml-[20px] mt-[20px]'></img>
                                <p className='md:text-[13px] text-[10px] mt-[20px] absolute md:ml-[180px] ml-[130px]'>Lorem ipsum dolor sit amet consectetur. Tincidunt<br></br> pellentesque quis vitae placerat. Nisi ut arcu sed <br></br> vehicula. Libero egestas lacus non quam at Facilisis<br></br>  Tincidunt posuere nulla velit ut.</p>
                                <h2 className='h1 ml-[130px] md:ml-[180px] absolute mt-[100px] md:mt-[122px]'>Muhizi Schammah</h2>
                                <h3 className='text-[13px] mt-[140px] md:mt-[150px] absolute ml-[130px] md:ml-[180px]'>Mobile Developer  at Tech Affinity</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white h-[1450px] md:h-[600px]'>
                    <h1 className=' absolute mt-[30px] h1 text-3xl font-bold ml-[140px] md:ml-[500px]'>Blogs</h1>
                    <h2 className=' absolute text-[7px] ml-[30px] md:ml-[250px] mt-[90px]'>Lorem ipsum dolor sit amet consectetur. Tincidunt pellentesque quis vitae placerat. Nisi ut arcu sed vehicula.<br></br> Libero egestas lacus non quam at Facilisis  Tincidunt posuere nulla velit ut.</h2>
                    <div className=' ml-[20px] md:ml-[100px] grid md:flex gap-3 md:gap-12 mt-[200px] absolute'>
                        <div className='w-[340px] h-[400px] bg-gray-100'>
                            <img src={photo5}></img>
                            <h1 className='h1 text-xl font-bold ml-[30px] mt-[20px]'>How to start your career in a digital startup</h1>
                            <p className='absolute text-sm mt-[10px] ml-[30px]'>Lorem ipsum dolor sit amet<br></br> consectetur. Tincidunt pellentesque<br></br> quis vitae placerat.</p>
                            <div className='absolute mt-[87px] ml-[116px]'><ion-icon name="arrow-forward-outline"></ion-icon></div>
                            <button className='absolute mt-[83px] ml-[30px] font-bold'>Read more</button>
                        </div>
                        <div className='w-[340px] h-[400px] bg-gray-100'>
                            <img src={photo6}></img>
                            <h1 className='h1 text-xl font-bold ml-[30px] mt-[20px]'>How to start your career in a digital startup</h1>
                            <p className='absolute text-sm mt-[10px] ml-[30px]'>Lorem ipsum dolor sit amet<br></br> consectetur. Tincidunt pellentesque<br></br> quis vitae placerat.</p>
                            <div className='absolute mt-[87px] ml-[116px]'><ion-icon name="arrow-forward-outline"></ion-icon></div>
                            <button className='absolute mt-[83px] ml-[30px] font-bold'>Read more</button>
                        </div>
                        <div className='w-[340px] h-[400px] bg-gray-100'>
                            <img src={photo7}></img>
                            <h1 className='h1 text-xl font-bold ml-[30px] mt-[20px]'>How to start your career in a digital startup</h1>
                            <p className='absolute text-sm mt-[10px] ml-[30px]'>Lorem ipsum dolor sit amet<br></br> consectetur. Tincidunt pellentesque<br></br> quis vitae placerat.</p>
                            <div className='absolute mt-[87px] ml-[116px]'><ion-icon name="arrow-forward-outline"></ion-icon></div>
                            <button className='absolute mt-[83px] ml-[30px] font-bold'>Read more</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='h1 text-lg md:text-4xl font-semibold mt-[25px] md:mt-[40px] ml-[50px] md:ml-[300px]'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                    <h2 className='pt-[30px] text-gray-600 md:ml-[200px] ml-[24px] text-[7px] md:text-lg'>Lorem ipsum dolor sit amet consectetur. Tincidunt pellentesque quis vitae placerat. Nisi ut arcu sed vehicula. Libero</h2>
                    <h2 className=' ml-[70px] md:ml-[310px] text-gray-600 text-[5px] md:text-lg'>egestas lacus non quam at Facilisis  Tincidunt posuere nulla velit ut.</h2>
                    <input type='text' className='learmore h-[40px] w-[300px] pl-[55px] ml-[40px] md:ml-[400px] mt-[40px] rounded-lg' placeholder='ENTER YOUR EMAIL'></input><br></br>
                    <button className=' post text-white rounded-lg mt-[40px] ml-[40px] md:ml-[400px] h-[40px] w-[300px]'>SUBSCRIBE</button>
                </div>
            </div><br></br><br></br><br></br>
            <Footer />
        </div>
    )
}

export default Home
