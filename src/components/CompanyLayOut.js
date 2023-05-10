import React, { useState } from 'react'
import Searchbar from './Searchbar'
import CompanyProfileNav from './CompanyProfileNav'

const CompanyLayOut = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Searchbar open={open} setOpen={setOpen} />
            <div>
                <CompanyProfileNav open={open} setOpen={setOpen} />
                <div className={`${!open ? "w-[96%] ml-[4%]" : "w-[80%] ml-[20%]"} duration-700 delay-200 px-[5%] pt-[10%]`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default CompanyLayOut
