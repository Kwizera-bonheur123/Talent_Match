import React from 'react'
import CompanyLayOut from './CompanyLayOut'
import CV from './CS.png'
const CompanyDashboard = (props) => {
    return (
        <CompanyLayOut>
            <h1 className='text-4xl font-bold'>Applies</h1>
            <div className='flex gap-14 py-8'>
                <button className='link hover:text-white text-xl h1 rounded-2xl font-bold px-[30px]'>New(6)</button>
                <button className='link hover:text-white text-xl h1 rounded-2xl font-bold px-[30px]'>Shortlisted(5)</button>
                <button className='link hover:text-white text-xl h1 rounded-2xl font-bold px-[30px]'>Rejected</button>
            </div>
            <div>
                {props.children}
            </div>
        </CompanyLayOut>
    )
}

export default CompanyDashboard
