import React from 'react'
import { useNavigate } from 'react-router-dom'
import CompanyLayOut from './CompanyLayOut';
const JobPost = () => {
    const navigate = useNavigate();
    const Send = () => {
        alert("Account created successfull")
        navigate('/Company/profile')
    }
    return (
        <CompanyLayOut>
            <div className='px-[30%] pb-[10%]'>
                <h1 className='h1 text-4xl font-bold '>Post a new job</h1>
                <form onSubmit={Send} className=' mt-[40px] grid gap-2'>
                    <label className='label'>Work place</label>
                    <div className='flex gap-8'>
                        <div className='flex gap-2'>
                            <input type='radio' name="job-type" /><p className='label text-md font-semibold'>On site</p>
                        </div>
                        <div className='flex gap-8'>
                            <input type='radio' name="job-type" /><p className='label text-md font-semibold'>Remote</p>
                        </div>
                    </div>
                    <label className='label'>Job type</label>
                    <div className='flex gap-8'>
                        <div className='flex gap-2'>
                            <input type='radio' name="job-type" /><p className='label text-md font-semibold'>Full time</p>
                        </div>
                        <div className='flex gap-8'>
                            <input type='radio' name="job-type" /><p className='label text-md font-semibold'>part time</p>
                        </div>
                    </div>
                    <label className='label'>Number of openings</label>
                    <input className='border-2 pl-4 border-gray-300 w-[350px]' type="number" placeholder='4'></input>
                    <label className='label'>Working days</label>
                    <select name="5 days in week" className='border-2 pl-4 border-gray-300 w-[350px]'>
                        <option>7 days in week</option>
                        <option>6 days in week</option>
                        <option>5 days in week</option>
                        <option>4 days in week</option>
                        <option>3 days in week</option>
                        <option>2 days in week</option>
                        <option>1 days in week</option>
                    </select>
                    <label className='label'>Job position</label>
                    <input className='border-2 pl-4 border-gray-350 w-[350px]' type='text' placeholder='UI/UX designer'></input>
                    <label className='label'>Experience required</label>
                    <input className='border-2 pl-4 border-gray-350 w-[350px]' type='text' placeholder='2 years of experience'></input>
                    <label className='label'>Job description</label>
                    <input className='border-2 pl-4 border-gray-300 h-[80px] w-[350px] rounded-lg' type="textarea"></input>
                    <label className='label'>What the candidate will do?</label>
                    <input className='border-2 pl-4 border-gray-300 h-[80px] w-[350px] rounded-lg' type="textarea"></input>
                    <label className='label'>Candidate requirements</label>
                    <input className='border-2 pl-4 border-gray-300 h-[80px] w-[350px] rounded-lg' type="textarea"></input>
                    <input className='post h-[40px] w-[350px] text-white text-2xl' type="submit" value='Save'></input>
                </form>
            </div>
        </CompanyLayOut>
    )
}

export default JobPost
