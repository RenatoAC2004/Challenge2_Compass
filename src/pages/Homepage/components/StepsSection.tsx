
export const StepsSection = () => {
  return (
    <div className="flex flex-wrap ">
      <div className="flex flex-auto flex-col items-center justify-center h-[156px] w-[1532px] font-garamond m-4">
  <h1 className="text-[64px] leading-[auto] text-center text-moss font-bold">
    Steps To Take Care Of Your <span className="text-primaryAvacado">Plants</span>
  </h1>
  <div>
    <p className="text-borderColor text-center">
    By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to maintaining healthy and thriving plants.
    </p>
  </div>
  <p className="text-center text-borderColor">maintaining healthy and thriving</p>
</div>


      <div className="flex justify-center h-[342px] w-[1532px] ">
        <div className="content-center text-center ">
          <div className="flex justify-center">
            <img src="/src/img/image01.png" alt="Watering" />
          </div>
          <h2 className="font-bold text-titulo ">Watering</h2>
          <p className="">
            Water your plants when the top inch of soil feels dry to the touch.
            Avoid overwatering, as it can lead to root rot.
          </p>
        </div>
        <div className="content-center text-center">
          <div className="flex justify-center">
            <img src="/src/img/image02.png" alt="Watering" />
          </div>
          <h2 className=" font-bold">Sunlight</h2>
          <p>
          Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs
          </p>
        </div>
        <div className="content-center text-center">
          <div className="flex justify-center">
            <img src="/src/img/image03.png" alt="Watering" />
          </div>
          <h2 className=" font-bold">Nutrients and Fertilizing</h2>
          <p>
          Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula.
          </p>
        </div>
      </div>

      {/* Separate section 2 Part 3 images :D */}
      <div className="flex  flex-wrap flex-col w-[1532px] h-[857px] md:flex-col lg:space-x-20 lg:flex-row justify-center mx-4 ">
        <div className="lg:w-1/2 h-auto"><img src="/src/img/Rectangle 32.png" alt="Image01"  /></div>
        <div className="mt-4 lg:w-1/2"><img src="/src/img/Rectangle 33.png" alt="Image01"  /></div>
        <div className="mt-4 flex flex-col justify-center items-center">
          <div className="mt-4"><img src="/src/img/Rectangle 34.png" alt="Image03"  /></div>
          <p className="mt-8 text-left max-w-md">
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
            joys of gardening with us!{""}
          </p>
          <button className="">See more photos</button>
        </div>
      </div>
    </div>
  )
}
