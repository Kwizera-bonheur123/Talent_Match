import React from 'react'
import icon1 from '../components/Group 118990 (1).png'
import icon2 from '../components/Group 118990.png'
import icon3 from '../components/Group 118989.png'
import Logo from '../components/Group 119032.png'
import Location from '../components/Location.png'
import { useNavigate } from 'react-router-dom'
const DashboardCareer = () => {
    const navigate = useNavigate();
    const Continue = () => {
        navigate("/Dashboard/Addition")
    }
    return (
        <div className='flex'>
            <div className='post h-[700px] w-[350px]'>
                <div>
                    <img src={Logo} className='w-[80px] h-[80px] ml-[20px]'></img>
                    <h1 className='font-bold text-3xl text-white absolute ml-[110px] mt-[-55px]'>TALENT MATCH</h1>
                </div>
                <div className=' absolute mt-[100px] ml-[40px] flex gap-8'>
                    <img src={icon1} className='w-[30px] h-[30px]'></img>
                    <di>
                        <h1 className='text-white text-xl font-bold'>Personal information</h1>
                        <h1 className='text-white text-sm font-semibold'>Basic information about you</h1>
                    </di>
                </div>
                <div className='bg-white w-[3px] h-[90px] ml-[55px] mt-[145px] absolute'></div>
                <div className=' absolute mt-[250px] ml-[40px] flex gap-8'>
                    <img src={icon3} className='w-[30px] h-[30px]'></img>
                    <di>
                        <h1 className='text-white text-xl font-bold'>Career verification</h1>
                        <h1 className='text-white text-sm font-semibold'>Professional verification</h1>
                    </di>
                </div>
                <div className='bg-white w-[3px] h-[90px] ml-[55px] mt-[295px] absolute'></div>
                <div className=' absolute mt-[400px] ml-[40px] flex gap-8'>
                    <img src={icon2} className='w-[30px] h-[30px]'></img>
                    <di>
                        <h1 className='text-white text-xl font-bold'>Additional information</h1>
                        <h1 className='text-white text-sm font-semibold'>Recommand your profile to recruiters</h1>
                    </di>
                </div>
            </div>
            <div>
                <div className='ml-[170px]'>
                    <h1 className='font-semibold text-4xl icons mt-[30px]'>Career verifications</h1>
                    <h1 className='text-semibold text-sm mt-[20px]'>
                        Lorem ipsum dolor sit amet consectetur. Tincidunt pellentesque quis vitae placerat. Nisi ut arcu sed vehicula.<br></br> Libero egestas lacus non quam at Facilisis  Tincidunt posuere nulla velit ut.
                    </h1>
                    <form>
                        <div className='flex gap-[40px] mt-[30px]'>
                            <div className='grid'>
                                <img src={Location} className='absolute ml-[5px] mt-[35px]'></img>
                                <label>Location</label>
                                <select className=' pl-5 district w-[290px]'>
                                    <option>Select region</option>
                                </select>
                            </div>
                            <div className='grid'>
                                <label>Career patch</label>
                                <input typye="text" className='district pl-4 w-[290px]' placeholder='e.g Product design'></input>
                            </div>
                        </div>
                        <div className=''>
                            <input type='file'></input>
                        </div>
                        <label>Upload portifolio link</label>
                        <input type='text' placeholder='Insert a link showing collection of your work'></input>
                        <label>Technical skills</label><br></br><br></br>
                        <select name="select" multiple className='w-[90%]'>
                            <option>What are you lest at?(Pick no more than 5)</option>
                            <option>Hard working</option>
                            <option>Leadership</option>
                            <option>Responsible</option>
                            <option>Time management</option>
                        </select>
                        <div className='flex gap-8'>
                            <input type='button' onClick={() => navigate("/Dashboard/Personal")} className=' w-[300px] text-2xl font-semibold h-[40px] learmore' value="Back"></input>
                            <input type='button' onClick={Continue} className='post w-[300px] h-[40px] text-white text-2xl' value="SAVE"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DashboardCareer
