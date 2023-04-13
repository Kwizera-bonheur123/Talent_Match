import React from 'react'
import Nav from './nav'
import Svg from '../components/Group 119031.png'
import Job from '../components/Job.png'
import Candidate from '../components/Candidate.png'
import Man from '../components/Man.png'
import Footer from './Footer'
const AboutUs = () => {
    return (
        <div>
            <Nav />
            <div className='mt-[200px] ml-[80px] mr-[80px]'>
                <div className='md:flex grip gap-10 md:gap-28'>
                    <div>
                        <h1 className='h1 font-bold md:text-3xl md:text-4xl'>Who Are We?</h1>
                        <h1 className='h1 text-[10px] md:text-xl font-bold mt-[35px]'>Talent Match is a web-based solution for businesses and <br></br>government institutions to simplify their recruitment process.<br></br><br></br>

                            Talent Match streamlines the recruitment process and helps<br></br> businesses save time and resources by allowing candidates to <br></br>create profiles, apply for jobs, and manage their applications, as<br></br> well as allowing recruiters to manage job postings, screen<br></br> candidates, and schedule interviews.

                        </h1>
                    </div>
                    <div>
                        <img className='w-[370px] -mt-[110px] h-[250px] md:h-[400px]' src={Svg}></img>
                    </div>
                </div>
                <div>
                    <h1 className='h1 font-bold text-2xl md:text-4xl ml-[40px] md:ml-[370px] mt-[50px]'>What We Do...</h1>
                    <div className='md:flex grid gap-20 mt-[55px]'>
                        <div>
                            <img src={Job} className=' ml-[60px] md:ml-[100px] w-[100px] h-[100px]'></img>
                            <h1 className='h1 font-bold text-lg ml-[65px] md:ml-[110px]'>POST JOB</h1>
                            <h1 className='h1 font-semibold mt-[20px]'>Job advertisements can be submitted by<br></br> recruiters to the platform for administrator<br></br> assessment and approval. Users will be<br></br> able to see the job posting and apply.</h1>
                        </div>
                        <div>
                            <img src={Candidate} className=' ml-[60px] md:ml-[100px] w-[100px] h-[100px]'></img>
                            <h1 className='h1 font-bold text-lg md:ml-[40px]'>SHORT LIST CANDIDATES</h1>
                            <h1 className='h1 font-semibold mt-[20px]'>Our system matches job requirements to<br></br> the qualifications of candidates, which<br></br> include work experience, education, skills,<br></br> and certifications. </h1>
                        </div>
                        <div>
                            <img src={Man} className=' ml-[60px] md:ml-[80px] w-[100px] h-[100px]'></img>
                            <h1 className='h1 font-bold text-lg md:ml-[20px]'>CHOOSE FROM THE BEST</h1>
                            <h1 className='h1 font-semibold mt-[20px]'>the system automatically screens and <br></br>shortlists them. Via an integrated <br></br>through the interview.</h1>
                        </div>
                    </div>
                </div>
            </div><br></br><br></br>
            <Footer />
        </div>
    )
}

export default AboutUs
