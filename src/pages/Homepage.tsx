import MainButton from "../components/MainButton"
import { BsArrowRight } from "react-icons/bs"

export const Homepage = () => {
  return (
    <section
      className="flex flex-col justify-center h-screen bg-BackgroundAboutUs px-4 relative
      lg:px-0 lg:flex-row lg:justify-normal lg:items-center overflow-hidden"
    >
      <div
        className="flex flex-col gap-y-6 pb-32 md:pb-0
      lg:z-10 lg:w-1/2 lg:px-24 lg:pb-32"
      >
        <div className="flex justify-center items-center gap-x-4 lg:justify-normal">
          <div className="bg-black h-[3px] w-16 lg:w-8"></div>
          <p className="text-center font-pacifico whitespace-nowrap">
            Love for Nature
          </p>
          <div className="bg-black h-[3px] w-16 lg:hidden"></div>
        </div>

        <h1 className="font-garamond font-bold text-6xl text-center text-moss lg:text-left">
          Discover Your <span className="text-primaryAvacado">Green</span> Side
        </h1>
        <p className="font-raleway text-center text-textSecondary lg:text-justify">
          We are your one-stop destination for all things green and growing. Our
          website offers a wide array of stunning plants, ranging from vibrant
          flowers to lush indoor foliage, allowing you to create your very own
          green oasis.
        </p>
        <div className="flex justify-center lg:justify-normal">
          <MainButton text="Shop now" />
        </div>
      </div>
      <img
        src="src\assets\leftPlant.png"
        alt="Left plant"
        className="absolute grayscale left-0 bottom-0"
      />
      <a
        href=""
        className="absolute flex items-center left-16 bottom-16 gap-x-2 text-textSecondary"
      >
        Learn Gardening <BsArrowRight />
      </a>
      <img
        src="src\assets\rightPlant.png"
        alt="Right plant"
        className="hidden absolute xl:right-0 lg:-right-[15%] bottom-0 grayscale lg:block "
      />
    </section>
  )
}
