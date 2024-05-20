import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <>
      <Navbar />

      <section className="flex flex-col items-center justify-center h-screen w-full pt-[5.5rem] bg-white overflow-hidden">
        <img
          src="src\assets\fallenPot.jpg"
          alt="Dying flower"
          className="grayscale w-fit"
        />
        <div className="w-full flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-9xl font-black font-inter">404</h1>
          <p className="text-2xl">
            Sorry! This page is under
            <span className="text-primaryAvacado"> photosynthesis...</span> err,
            construction.
          </p>
          <Link to={"/"}>
            <button className="px-8 py-4 bg-moss text-white rounded-lg transition-all font-raleway hover:opacity-75">
              Return to Home Page
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Error
