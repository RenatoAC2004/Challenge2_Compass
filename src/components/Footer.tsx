import React from "react"
import { Link } from "react-router-dom"
import logo from "../img/logo.png"

export const Footer = () => {
  return (
    <footer className="flex flex-col text-white bg-moss bottom-0 md:h-[35.75rem] w-full items-center bg-footer-texture py-5
    md:pb-14 md:pt-36 md:px-24">
      <div
        className="flex flex-col h-full justify-between border-b border-borderColor w-full 
      md:flex-row mb-7"
      >
        <div
          className="w-full flex flex-col mb-8 items-center 
        md:mb-6 md:items-start md:w-fit"
        >
          <h1 className="font-garamond font-bold mb-5 text-6xl">Stay Fresh</h1>
          <p className="mb-4 font-raleway">compassinhos@gmail.com</p>
          <p className="font-raleway">+55 (41) 99999-9999</p>
        </div>
        <div className="w-full flex flex-row justify-center text-center md:text-left md:pr-5 md:w-fit md:items-start">
          <div className="flex pr-10 mb-4 md:mb-0 md:pr-10">
            <ul>
              <li className="font-bold mb-8 text-2xl font-lato">Links</li>
              <li className="mb-4">
                <Link to="/aboutus" className=" hover:text-primaryLunarGreen">
                  About us
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/product" className=" hover:text-primaryLunarGreen">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blogs" className=" hover:text-primaryLunarGreen">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold mb-8 text-2xl font-lato">Community</li>
              <li className="mb-4">
                <Link to="/aboutus" className=" hover:text-primaryLunarGreen">
                  About us
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/product" className=" hover:text-primaryLunarGreen">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blogs" className=" hover:text-primaryLunarGreen">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-2 md:flex-row items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <p className="flex md:hidden justify-center text-center whitespace-nowrap">
          Compassinhos ®. All rights reserved.
        </p>
        <p className="hidden md:flex justify-end text-center">
          Compassinhos ®. All rights <br /> reserved.
        </p>
      </div>
    </footer>
  )
}
