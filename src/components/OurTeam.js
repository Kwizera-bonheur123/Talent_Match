import React from 'react'
import Nav from './nav'
import photo1 from '../components/Rectangle 12.png'
import photo2 from '../components/Rectangle 12 (1).png'
import photo3 from '../components/Rectangle 12 (2).png'
import photo4 from '../components/Rectangle 12 (3).png'
import photo5 from '../components/Rectangle 12 (4).png'
import photo6 from '../components/Rectangle 12 (5).png'
import Footer from './Footer'
const OurTeam = () => {
    return (
        <div>
            <Nav />
            <h1 className=' mt-[100px] md:px-[38%] ml-[100px] text-3xl md:text-4xl font-bold'>Our team</h1>
            <h1 className=' mt-[20px] md:pl-[38%] ml-[65px] text-2xl font-bold'>Our amazing people</h1>
            <p className=' ml-[10px] md:px-[29%] text-[10px] md:text-lg md-text-md mt-[25px]'>we love what we do and we do it with passion , We pride ourselves in great work</p>
            <p className=' ml-[70px]  md:px-[34%] text-[10px] md:text-md md:text-lg'>ethic , integrity, honesty and work commitment </p>
            <div className='md:ml-[200px] md:my-[50px] ml-[20px] md:mr-[100px] mr-[20px] mt-[40px] grid grid-cols-2 md:grid-cols-3 gap-10'>
                <div className=''>
                    <img className=' w-[90%] md:h-[90%] py-5' src={photo1}></img>
                    <h1 className='h1 text-md md:text-lg font-bold ml-[95px]'>Igiraneza Lionel</h1>
                    <h1 className='h1 text-[15px] font-bold ml-[110px]'>HR Manager</h1>
                    <div className='flex gap-4 ml-[102px]'>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-linkedin"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className='icons text-2xl'><ion-icon name="logo-facebook"></ion-icon></div>
                    </div>
                </div>
                <div>
                    <img className=' md:w-[90%] md:h-[90%] py-5' src={photo2}></img>
                    <h1 className='h1 text-md md:text-lg font-bold ml-[95px]'>MANZI Kenny</h1>
                    <h1 className='h1 text-[15px] font-bold ml-[103px]'>Hiring Manager</h1>
                    <div className='flex gap-4  pl-[102px]'>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-linkedin"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-facebook"></ion-icon></div>
                    </div>
                </div>
                <div>
                    <img className='md:w-[90%] md:h-[90%] py-5' src={photo3}></img>
                    <h1 className='h1 md:text-lg text-md font-bold ml-[95px]'>HAGUMINTWARI</h1>
                    <h1 className='h1 text-[15px] font-bold ml-[103px]'>Technical Recruiter</h1>
                    <div className='flex gap-4 pl-[102px]'>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-linkedin"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-facebook"></ion-icon></div>
                    </div>
                </div>
                <div>
                    <img className='md:w-[90%] md:h-[90%] py-5' src={photo4}></img>
                    <h1 className='h1 text-md md:text-lg font-bold ml-[95px]'>MUTONI Esther</h1>
                    <h1 className='h1 text-[15px] font-bold ml-[103px]'>Interviewer</h1>
                    <div className='flex gap-4 pl-[102px]'>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-linkedin"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-facebook"></ion-icon></div>
                    </div>
                </div>
                <div>
                    <img className=' md:w-[90%] md:h-[90%] py-5' src={photo5}></img>
                    <h1 className='h1 text-md md:text-lg font-bold ml-[95px]'>NTORE Luc</h1>
                    <h1 className='h1 text-[15px] font-bold ml-[103px]'>Talent recruiter</h1>
                    <div className='flex gap-4 pl-[102px]'>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-linkedin"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-facebook"></ion-icon></div>
                    </div>
                </div>
                <div>
                    <img className='md:w-[90%] md:h-[90%] py-5' src={photo6}></img>
                    <h1 className='h1 text-md md:text-lg font-bold ml-[95px]'>MARIYA Lynca</h1>
                    <h1 className='h1 text-[15px] font-bold ml-[103px]'>Hiring employee</h1>
                    <div className='flex gap-4 pl-[102px]'>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-linkedin"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-facebook"></ion-icon></div>
                    </div>
                </div>
            </div><br></br>
            <Footer />
        </div>
    )
}

export default OurTeam
