import React from 'react'
import { Link } from "react-router-dom"
import logo from '../img/logo.png';

export const Footer = () => {
  return (

    <footer className="flex flex-col text-white bg-customColor bottom-0 w-full items-center bg-footer-texture p-5">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-borderColor w-11/12 h-72">
            <div className="flex flex-col md:w-auto mb-4 md:mb-6 md:items-start items-start">
                <h1 className="font-serif mb-5 text-5xl">Stay Fresh</h1>
                <p className="mb-4 ">compassinhos@gmail.com</p>
                <p>+55 (41) 99999-9999</p>
            </div>
            <div className="flex flex-row md:flex-row pr-5 md:items-start">
                <div className="pr-10 mb-4 md:mb-0 md:pr-10">
                    <ul>
                        <li className="font-bold mb-4 text-xl">Links</li>
                        <li><Link to="/aboutus" className=" hover:text-primaryLunarGreen">About us</Link></li>
                        <li><Link to="/product" className=" hover:text-primaryLunarGreen">Products</Link></li>
                        <li><Link to="/blogs" className=" hover:text-primaryLunarGreen">Blogs</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="font-bold mb-4 text-xl">Community</li>
                        <li><Link to="/aboutus" className=" hover:text-primaryLunarGreen">About us</Link></li>
                        <li><Link to="/product" className=" hover:text-primaryLunarGreen">Products</Link></li>
                        <li><Link to="/blogs" className=" hover:text-primaryLunarGreen">Blogs</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="h-28 w-full flex flex-row items-center justify-between ">
           <Link to="/"><img src={logo} alt="logo" className="h-auto pl-20 md:pl-24" /></Link> 
            <p className="flex justify-end pr-24 md:pr-24 text-center">Compassinhos ®. All rights <br/>reserved.</p>
        </div>
    </footer>

  )
}
