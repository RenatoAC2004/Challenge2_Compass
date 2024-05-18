import { Carousel } from "../../../components/Carousel"

export const CarouselsSection = () => {
  return (
    <section className="p-0 flex flex-col items-center">
      <h1 className="font-garamond font-bold text-[4rem] leading-auto text-moss mt-[2rem]">This Weeks Most Popular <span className="text-primaryAvacado">And Best Selling</span></h1>
      <div className="pl-4 max-h-[35rem] w-full items-center justify-center mt-[11rem]
      lg:pl-[6.25rem]"> 
        <Carousel isInSale={false}/>
      </div>
      <h1 className="font-garamond font-bold text-[4rem] leading-auto text-moss mt-[6rem]">Plants in <span className="text-primaryAvacado">Sale</span></h1>
      <div className="pl-4 max-h-[39rem] w-full items-center justify-center mt-[6rem] mb-[6.75rem]
      lg:pl-[6.25rem]"> 
        <Carousel isInSale={true}/>
      </div>
    </section>
  )
}
