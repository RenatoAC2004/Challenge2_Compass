const Navbar = () => {
  return (
    <header className="w-full h-[5.5rem] px-24 py-4 flex justify-between">
      <img src="src\assets\Logo.svg" alt="Logo" />
      <div className="flex p-4 font-raleway gap-x-4">
        <a href="" className="px-3 text-primaryAvacado">Home</a>
        <a href="" className="px-3">Register</a>
        <a href="" className="px-3">Products</a>
        <a href="" className="px-3">About us</a>
      </div>
      <div className="p-3"></div>
    </header>
  )
}

export default Navbar
