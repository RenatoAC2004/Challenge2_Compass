import MainButton from "../../../components/MainButton"

export const StepsSection = () => {
  return (
    <section className="p-8 lg:p-[3.125rem] xl:p-[6.25rem] h-full">
      <h1 className="text-moss font-bold text-5xl lg:text-[4rem] font-garamond text-center mb-4">
        Steps To Take Care Of Your
        <span className="text-primaryAvacado"> Plants</span>
      </h1>
      <p className="font-raleway text-center text-inputBorders">
        By following these three steps - proper watering, appropriate sunlight,
        and providing essential nutrients - you'll be well on your way to
        maintaining healthy and thriving plants.
      </p>
      <div
        className="flex flex-col gap-y-12 gap-x-10 justify-center items-center my-20
      lg:items-start xl:gap-x-20 lg:flex-row "
      >
        <div className="flex flex-col gap-y-6 items-center lg:gap-y-12 lg:w-1/3">
          <img src="src\assets\watering.svg" alt="Watering" className="w-fit" />
          <p className="font-lato font-bold text-2xl">Watering</p>
          <p className="font-raleway text-center text-textSecondary">
            water your plants when the top inch of soil feels dry to the touch.
            Avoid overwatering, as it can lead to root dehydration.
          </p>
        </div>
        <div className="flex flex-col gap-y-6 items-center lg:gap-y-12 lg:w-1/3">
          <img src="src\assets\sunlight.svg" alt="Sunlight" className="w-fit" />
          <p className="font-lato font-bold text-2xl">Sunlight</p>
          <p className="font-raleway text-center text-textSecondary">
            Most plants need adequate sunlight to thrive. Place your plants in
            areas that receive the appropriate amount of light for their
            specific needs
          </p>
        </div>
        <div className="flex flex-col gap-y-6 items-center lg:gap-y-12 lg:w-1/3">
          <img
            src="src\assets\nutrients.svg"
            alt="Nutrients and Fertilizing"
            className="w-fit"
          />
          <p className="font-lato font-bold text-2xl whitespace-nowrap">
            Nutrients and Fertilizing
          </p>
          <p className="font-raleway text-center text-textSecondary">
            Choose a suitable fertilizer based on the specific needs of your
            plants, whether it's a balanced or specialized formula.
          </p>
        </div>
      </div>

      <div className="py-20 gap-x-10 hidden md:py-10 md:flex xl:gap-x-20">
        <div className="flex justify-center w-1/2 lg:w-1/3">
          <img
            src="src\assets\imgStepsSection1.png"
            alt="Image1 Steps Section"
            className="h-full"
          />
        </div>
        <div className="flex justify-center w-1/2 lg:w-1/3">
          <img
            src="src\assets\imgStepsSection2.png"
            alt="Image1 Steps Section"
            className="h-full"
          />
        </div>
        <div className="hidden flex-col justify-center w-1/3 h-fit lg:flex">
          <img
            src="src\assets\imgStepsSection3.png"
            alt="Image1 Steps Section"
          />
          <p className="font-raleway my-8 text-textSecondary text-sm 2xl:text-base">
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis. In addition to our extensive plant selection,
            we also provide gardening kits and fertilizers to equip you with
            everything you need to nurture your plants and achieve gardening
            success. But we don't stop there! We believe that knowledge is the
            key to a thriving garden, so we offer a wealth of information and
            resources on gardening techniques, plant care tips, and landscaping
            ideas. Whether you're a seasoned gardener or just starting your
            green journey, our goal is to inspire and support you every step of
            the way. Get ready to explore our virtual garden and discover the
            joys of gardening with us!
          </p>
          <div>
            <MainButton text="See more photos" />
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center w-full h-fit lg:hidden">
        <div className="flex gap-x-10">
          <img
            src="src\assets\imgStepsSection3.png"
            alt="Image1 Steps Section"
            className="w-full"
          />
        </div>
        <p className="font-raleway my-8 text-textSecondary text-sm">
          Our website offers a wide array of stunning plants, ranging from
          vibrant flowers to lush indoor foliage, allowing you to create your
          very own green oasis. In addition to our extensive plant selection, we
          also provide gardening kits and fertilizers to equip you with
          everything you need to nurture your plants and achieve gardening
          success. But we don't stop there! We believe that knowledge is the key
          to a thriving garden, so we offer a wealth of information and
          resources on gardening techniques, plant care tips, and landscaping
          ideas. Whether you're a seasoned gardener or just starting your green
          journey, our goal is to inspire and support you every step of the way.
          Get ready to explore our virtual garden and discover the joys of
          gardening with us!
        </p>
        <div>
          <MainButton text="See more photos" />
        </div>
      </div>

      <div className="flex flex-col gap-y-6 md:hidden">
        <img src="src\assets\imgStepsSection1.png" alt="Image1 Steps Section" />
        <img src="src\assets\imgStepsSection2.png" alt="Image1 Steps Section" />
        <div className="flex flex-col items-center">
          <img
            src="src\assets\imgStepsSection3.png"
            alt="Image1 Steps Section"
            className="w-full"
          />
          <p className="font-raleway text-textSecondary text-justify my-8">
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis. In addition to our extensive plant selection,
            we also provide gardening kits and fertilizers to equip you with
            everything you need to nurture your plants and achieve gardening
            success. But we don't stop there! We believe that knowledge is the
            key to a thriving garden, so we offer a wealth of information and
            resources on gardening techniques, plant care tips, and landscaping
            ideas. Whether you're a seasoned gardener or just starting your
            green journey, our goal is to inspire and support you every step of
            the way. Get ready to explore our virtual garden and discover the
            joys of gardening with us!
          </p>
          <MainButton text="See more photos" />
        </div>
      </div>
    </section>
  )
}
