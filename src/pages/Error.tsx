import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()
  return (
    <>

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
            <button 
              className="px-8 py-4 bg-moss text-white rounded-lg transition-all font-raleway hover:opacity-75"
              onClick={() => navigate('/')}
            >
              Return to Home Page
            </button>
        </div>
      </section>
    </>
  )
}

export default Error
