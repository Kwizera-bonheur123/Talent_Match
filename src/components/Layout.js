import { useState } from 'react'
import React from 'react'
import Nav from './ProfileNav'
import Searchbar from './Searchbar'

const Layout = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className=''>
            <Searchbar open={open} setOpen={setOpen} />
            <div className=''>
                <Nav open={open} setOpen={setOpen} />
                <div className={` relative duration-700 delay-200 py-24  px-24 ${open ? 'w-4/5 left-[20%]' : 'w-11/12 left-28'} overflow-y-auto top-20`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout
