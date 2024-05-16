import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react"
import { useState } from "react"
import { IoIosClose, IoIosMenu } from "react-icons/io"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuIcon, setMenuIcon] = useState(<IoIosMenu size={40} />)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    setMenuIcon(menuOpen ? <IoIosMenu size={40} /> : <IoIosClose size={50} />)
  }

  return (
    <>
      <header className="fixed w-full h-[5.5rem] px-6 py-4 flex justify-between sm:px-24 z-20">
        <img src="src\assets\Logo.svg" alt="Logo" />
        <div className="hidden p-4 font-raleway gap-x-4 md:flex">
          <Link to="/" className="px-3 text-primaryAvacado">
            Home
          </Link>
          <Link to="/register" className="px-3">
            Register
          </Link>
          <Link to="/product" className="px-3">
            Products
          </Link>
          <Link to="/contact" className="px-3">
            About us
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        <button
          className="flex justify-center items-center md:hidden"
          onClick={toggleMenu}
        >
          {menuIcon}
        </button>
      </header>

      <div
        className={`block absolute top-0 bg-primaryAvacado h-screen p-4 transition-all ease-in-out sm:w-1/2 w-3/4 md:hidden z-30 ${
          menuOpen ? "-left-0" : "-left-full"
        }`}
      >
        <div className="flex justify-center items-center border-b-2 border-moss pb-4">
          <div className="flex rounded-full bg-slate-100 justify-center items-center w-fit p-8 border-2 border-black shadow-md">
            <img src="src\assets\Logo.svg" alt="Logo_MobileMenu" className="" />
          </div>
        </div>

        <div className="flex flex-col text-center gap-y-2 py-4 border-b-2 border-moss">
          <Link
            to="/"
            className="px-2 py-3 bg-white rounded-lg shadow-md transition-all hover:bg-moss hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="px-2 py-3 bg-white rounded-lg shadow-md transition-all hover:bg-moss hover:text-white"
          >
            Register
          </Link>
          <Link
            to="/product"
            className="px-2 py-3 bg-white rounded-lg shadow-md transition-all hover:bg-moss hover:text-white"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="px-2 py-3 bg-white rounded-lg shadow-md transition-all hover:bg-moss hover:text-white"
          >
            About us
          </Link>
        </div>

        <div className="md:hidden flex justify-center items-center pt-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton
              showName={true}
              appearance={{ elements: { userButtonTrigger: "bg-white p-2" } }}
            />
          </SignedIn>
        </div>
      </div>
    </>
  )
}

export default Navbar
