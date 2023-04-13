import React from 'react'
import SearchIcon from './Group.png'
import HomeIcon from './Group 118996.png'
import NotificationIcon from './Group 118995.png'
import MessageIcon from './Group 118994 (1).png'
import Default from './default.jpg'
const Searchbar = () => {
    return (
        <div>
            <div className='mt-[30px] flex justify-between'>
                <div>
                    <img src={SearchIcon} className='absolute ml-[260px] mt-[10px]'></img>
                    <input type="text" className=' border-gray-500 border-2 w-[300px] h-[40px] pl-[20px]' placeholder='search anything'></input>
                </div>
                <div className='flex'>
                    <img src={HomeIcon}></img>
                    <img src={NotificationIcon}></img>
                    <img src={MessageIcon}></img>
                </div>
                <img src={Default} className='h-[40px]'></img>
            </div>
        </div>
    )
}

export default Searchbar
