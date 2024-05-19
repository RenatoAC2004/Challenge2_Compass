import { Carousel } from "../../../components/Carousel"

export const CarouselsSection = () => {
  return (
    <section className="flex flex-col items-center bg-mainBackground overflow-hidden">
      <h1 className="font-garamond font-bold leading-auto text-moss mt-[2rem] text-5xl text-center sm:text-[4rem]">
        This Weeks Most Popular
        <span className="text-primaryAvacado"> And Best Selling</span>
      </h1>
      <div
        className="px-12 h-full w-full items-center justify-center mt-24 lg:mt-44
      lg:px-[6.25rem]"
      >
        <Carousel isInSale={false} />
      </div>
      <h1 className="font-garamond font-bold text-5xl sm:text-[4rem] leading-auto text-primaryAvacado mt-24">
        Plants in <span className="text-moss">Sale</span>
      </h1>
      <div
        className="px-12 h-full w-full items-center justify-center my-24
      lg:px-[6.25rem]"
      >
        <Carousel isInSale={true} />
      </div>
    </section>
  )
}
