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
            <h1 className=' h1 mt-[100px] md:ml-[500px] ml-[100px] text-3xl md:text-4xl font-bold'>Our team</h1>
            <h1 className=' h1 mt-[20px] md:ml-[450px] ml-[65px] text-2xl font-bold'>Our amazing people</h1>
            <p className='h1 ml-[10px] md:ml-[300px] text-[10px] md-text-md mt-[25px]'>we love what we do and we do it with passion , We pride ourselves in great work</p>
            <p className='h1 ml-[70px] md:ml-[430px] text-[10px] md:text-md'>ethic , integrity, honesty and work commitment </p>
            <div className='md:ml-[200px] ml-[20px] md:mr-[100px] mr-[20px] mt-[40px] grid grid-cols-2 md:grid-cols-3 gap-10'>
                <div>
                    <img className=' w-[200px] md:h-[240px]' src={photo1}></img>
                    <h1 className='h1 text-md md:text-lg font-bold ml-[15px]'>Igiraneza Lionel</h1>
                    <h1 className='h1 text-[15px] font-bold ml-[25px]'>HR Manager</h1>
                    <div className='flex gap-4 ml-[17px]'>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-linkedin"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-facebook"></ion-icon></div>
                    </div>
                </div>
                <div>
                    <img className=' w-[200px] md:h-[240px]' src={photo2}></img>
                    <h1 className='h1 text-md md:text-lg font-bold ml-[15px]'>MANZI Kenny</h1>
                    <h1 className='h1 text-[15px] font-bold ml-[25px]'>Hiring Manager</h1>
                    <div className='flex gap-4 ml-[17px]'>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-linkedin"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-facebook"></ion-icon></div>
                    </div>
                </div>
                <div>
                    <img className=' w-[200px] md:h-[240px]' src={photo3}></img>
                    <h1 className='h1 md:text-lg text-md font-bold ml-[15px]'>HAGUMINTWARI</h1>
                    <h1 className='h1 text-[15px] font-bold ml-[25px]'>Technical Recruiter</h1>
                    <div className='flex gap-4 ml-[17px]'>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-linkedin"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-facebook"></ion-icon></div>
                    </div>
                </div>
                <div>
                    <img className=' w-[200px] md:h-[240px]' src={photo4}></img>
                    <h1 className='h1 text-md md:text-lg font-bold ml-[15px]'>MUTONI Esther</h1>
                    <h1 className='h1 text-[15px] font-bold ml-[25px]'>Interviewer</h1>
                    <div className='flex gap-4 ml-[17px]'>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-linkedin"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-facebook"></ion-icon></div>
                    </div>
                </div>
                <div>
                    <img className=' w-[200px] md:h-[240px]' src={photo5}></img>
                    <h1 className='h1 text-md md:text-lg font-bold ml-[35px]'>NTORE Luc</h1>
                    <h1 className='h1 text-[15px] font-bold ml-[25px]'>Talent recruiter</h1>
                    <div className='flex gap-4 ml-[17px]'>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-linkedin"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className='icons text-2xl rounded-full'><ion-icon name="logo-facebook"></ion-icon></div>
                    </div>
                </div>
                <div>
                    <img className=' w-[200px] md:h-[240px]' src={photo6}></img>
                    <h1 className='h1 text-md md:text-lg font-bold ml-[15px]'>MARIYA Lynca</h1>
                    <h1 className='h1 text-[15px] font-bold ml-[25px]'>Hiring employee</h1>
                    <div className='flex gap-4 ml-[17px]'>
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
