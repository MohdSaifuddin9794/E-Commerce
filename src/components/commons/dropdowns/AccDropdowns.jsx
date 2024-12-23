import React from 'react';
import { CiGift } from 'react-icons/ci';
import { GoSignOut } from 'react-icons/go';
import { GrLocation } from 'react-icons/gr';
import { MdFavoriteBorder } from 'react-icons/md';
import { RxPerson } from 'react-icons/rx';
import { VscSettings } from 'react-icons/vsc';

const AccDropdowns = () => {
    return (
       <ul className={` acc-dropdown`}>
        <li className='items'>
        <RxPerson /> <span className=''>Account</span>
        </li>
        <li className='items'>
        <GrLocation />  <span className=''>Order Tracking</span>
        </li>
        <li className='items'>
        <CiGift /> <span className=''>My Voucher</span>
        </li>
        <li className='items'>
        <MdFavoriteBorder /> <span className=''>My Wishlist</span>
        </li>
        <li className='items'>
        <VscSettings /> <span className=''>Settings</span>
        </li>
        <li className='items'>
        <GoSignOut /> <span className=''>Sign Out</span>
        </li>
       </ul>
    );
}

export default AccDropdowns;
