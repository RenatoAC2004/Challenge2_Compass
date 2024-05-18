import { Carousel } from "../../../components/Carousel"

export const CarouselsSection = () => {
  return (
    <section className="p-0">
      <h1>this weeks Most Popular <span>and best selling</span></h1>
      <Carousel isInSale={false}/>
      <h1>Plants in <span>Sale</span></h1>
      <Carousel isInSale={false}/>
    </section>
  )
}
