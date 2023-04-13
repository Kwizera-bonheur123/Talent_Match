import React from 'react'

const Footer = () => {
    return (
        <div className='footer text-white h-[400px]'>
            <div className=' absolutex ml-[60px] flex justify-between  mr-[70px]'>
                <div className='mt-[60px]'>
                    <p>Lorem ipsum dolor sit amet </p>
                    <p>consectetur. Tincidunt pelle quis </p>
                    <p>vitae placerat. Nisi ut arcu sed </p>
                    <p>vehicula. Libero ege </p>
                </div>
                <div className='mt-[60px]'>
                    <h1 className='hover:font-bold hover:text-lg cursor-pointer'>Home</h1><br></br>
                    <h3 className='hover:font-bold hover:text-lg cursor-pointer'>Our team</h3><br></br>
                    <h3 className='hover:font-bold hover:text-lg cursor-pointer'>Contact</h3><br></br>
                    <h3 className='hover:font-bold hover:text-lg cursor-pointer'>About us</h3>
                </div>
                <div className='mt-[60px]'>
                    <h1 className='hover:font-bold hover:text-lg cursor-pointer'>Jobs</h1><br></br>
                    <h3 className='hover:font-bold hover:text-lg cursor-pointer'>By qualification</h3><br></br>
                    <h3 className='hover:font-bold hover:text-lg cursor-pointer'>By experience</h3><br></br>
                    <h3 className='hover:font-bold hover:text-lg cursor-pointer'>For freshers</h3>
                </div>
                <div className='mt-[60px]'>
                    <h1 className='hover:font-bold hover:text-lg cursor-pointer'>For employers</h1><br></br>
                    <h3 className='hover:font-bold hover:text-lg cursor-pointer'>Post a job</h3><br></br>
                    <h3 className='hover:font-bold hover:text-lg cursor-pointer'>Browse employees</h3>
                </div>
                <div className='mt-[60px]'>
                    <h1 className='hover:font-bold hover:text-lg cursor-pointer'>Support</h1><br></br>
                    <h3 className='hover:font-bold hover:text-lg cursor-pointer'>Privacy</h3><br></br>
                    <h3 className='hover:font-bold hover:text-lg cursor-pointer'>FAQ</h3>
                </div>
            </div>
            <div className='flex gap-8'>
                <h1 className=' mt-[5px] text-lg'>Follow us</h1>
                <div className=' w-8 h-8 border-2 hover:w-12 hover:h-12 hover:border-4 border-white rounded-full pl-[6px] hover:pl-[12px] hover:pt-2 pt-1'><ion-icon name="logo-linkedin"></ion-icon></div>
                <div className=' w-8 h-8 border-2 hover:w-12 hover:h-12 hover:border-4 border-white rounded-full pl-[6px] pt-1 hover:pl-[12px] hover:pt-2'><ion-icon name="logo-instagram"></ion-icon></div>
                <div className=' w-8 h-8 border-2 hover:w-12 hover:h-12 hover:border-4 border-white rounded-full pl-[6px] pt-1 hover:pl-[12px] hover:pt-2'><ion-icon name="logo-twitter"></ion-icon></div>
                <div className=' w-8 h-8 border-2 hover:w-12 hover:h-12 hover:border-4 border-white rounded-full pl-[6px] pt-1 hover:pl-[12px] hover:pt-2'><ion-icon name="logo-facebook"></ion-icon></div>
            </div>
            <div className=' bottom-0 bg-white h-1 mt-[70px]'></div>
            <div className='mt-[22px] ml-[550px]'>&#169;2023 TalentMatch</div>
        </div>
    )
}

export default Footer
