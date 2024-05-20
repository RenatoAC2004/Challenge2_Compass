import { useState, useEffect } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(<IoIosMenu size={40} />);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation()

  const { pathname } = location

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuIcon(menuOpen ? <IoIosMenu size={40} /> : <IoIosClose size={50} />);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed w-full h-[5.5rem] px-6 py-4 flex justify-between transition-all sm:px-24 z-20 ${
          scrolled ? "bg-white border-b-2 border-gray-200 shadow-lg" : ""
        }`}
      >
        <img src="../../src/assets/icon/Logo.svg" alt="Logo" />
        <div className="hidden p-4 font-raleway gap-x-4 md:flex">
          <Link to="/" className={`px-3hover:font-bold ${pathname === '/' ? 'text-primaryAvacado' : ''}`}>
            Home
          </Link>
          <Link to="/register" className={`px-3hover:font-bold ${pathname === '/register' ? 'text-primaryAvacado' : ''}`}>
            Register
          </Link>
          <Link to="/products" className={`px-3hover:font-bold ${pathname === '/products' ? 'text-primaryAvacado' : ''}`}>
            Products
          </Link>
          <Link to="/aboutus" className={`px-3hover:font-bold ${pathname === '/aboutus' ? 'text-primaryAvacado' : ''}`}>
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
        className={`block fixed top-0 bg-primaryAvacado h-screen p-4 transition-all ease-in-out sm:w-1/2 w-3/4 md:hidden z-30 ${
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
            className={`px-2 py-3  rounded-lg shadow-md transition-all  ${pathname === '/' ? 'bg-moss text-white font-bold hover:opacity-80' : 'bg-white hover:bg-moss hover:text-white'}`}            
          >
            Home
          </Link>
          <Link
            to="/register"
            className={`px-2 py-3  rounded-lg shadow-md transition-all  ${pathname === '/register' ? 'bg-moss text-white font-bold hover:opacity-80' : 'bg-white hover:bg-moss hover:text-white'}`}
          >
            Register
          </Link>
          <Link
            to="/products"
            className={`px-2 py-3  rounded-lg shadow-md transition-all  ${pathname === '/products' ? 'bg-moss text-white font-bold hover:opacity-80' : 'bg-white hover:bg-moss hover:text-white'}`}
          >
            Products
          </Link>
          <Link
            to="/aboutus"
            className={`px-2 py-3  rounded-lg shadow-md transition-all  ${pathname === '/aboutus' ? 'bg-moss text-white font-bold hover:opacity-80' : 'bg-white hover:bg-moss hover:text-white'}`}
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
  );
};

export default Navbar;
