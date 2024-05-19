import { useQuery } from "react-query"
import { Footer } from "../components/Footer"
import Navbar from "../components/Navbar"
import { ProductType } from "../services/saveProduct"
import { getAllProducts } from "../services/getAllProducts"
import { Loading } from "../components/Loading"
import { ProductCard } from "../components/ProductCard"
import { useEffect, useState } from "react"
import { getAllProductsWithSale } from "../services/getAllProductsWithSale"
import { getAllProductsByPrice } from "../services/getAllProdctsByPrice"
import { Funnel, SortAscending } from "phosphor-react"

export const AllProducts = () => {

  const [label, setLabel] = useState<null | string>(null)
  const [saleFilter, setSaleFilter] = useState<boolean>(false)
  const [sortPrice, setSortPrice] = useState<boolean>(false)

  const queryFn = saleFilter ? getAllProductsWithSale : sortPrice ? getAllProductsByPrice : getAllProducts

  const { data, isLoading, refetch } = useQuery<ProductType[]>(['products', saleFilter], queryFn)

  useEffect(() => {
    if (refetch) {
      refetch()
    }  
   }, [sortPrice])

  if(isLoading) return <Loading size={20} />
  if(!data) return

  let filteredPlants = data
  if (label !== null && sortPrice === false) {
  filteredPlants = data.filter(plant => plant.label.includes(label))
  }

  return (
    <section className="bg-mainBackground">
      <Navbar />
        <div className="px-[8rem] py-[8rem]">
          <div className="mb-[5px] h-[1px] w-full bg-inputBorders"/>
          <h1 className="font-inter font-semibold text-2xl leading-auto text-moss">Products List</h1>
          <div className="my-[5px] h-[1px] w-full bg-inputBorders"/>
          <div className="flex justify-between">
            <div className="flex items-center gap-[0.4rem]">
              <Funnel size={21}/>
              <h2 className="font-lato font-bold text-base leading-[auto] text-black">filter by: </h2>
            </div>
            <button onClick={() => setSortPrice(!sortPrice)} className="flex items-center gap-[0.4rem] hover:opacity-80">
              <h1 className="font-lato font-bold text-base leading-[auto] text-black" >Sort by price</h1>
              <SortAscending size={24}/>
            </button>  
          </div>
          <div className="my-[5px] h-[1px] w-full bg-inputBorders"/>


          <div className="w-full h-fit flex" >

            <div className="gap-[0.8rem] pr-[3rem] w-[11rem] flex flex-col items-start pt-[0.3rem]">
                <button className="font-lato font-bold text-base leading-[auto] hover:opacity-80 text-black" onClick={() => {setLabel("indoor"), setSaleFilter(false)}}>Indoor</button>
                <button className="font-lato font-bold text-base leading-[auto] hover:opacity-80 text-black" onClick={() => {setLabel("outdoor"), setSaleFilter(false)}}>Outdoor</button>
                <button className="font-lato font-bold text-base leading-[auto] hover:opacity-80 text-black" onClick={() => {setLabel(null), setSaleFilter(true)}}>In Sale</button>
                <button className="font-lato font-bold text-base leading-[auto] hover:opacity-80 text-black" onClick={() => {setLabel(null), setSaleFilter(false)}}>Remove filters</button>
            </div>

            <div className="flex flex-wrap gap-y-[3rem] gap-x-[3rem] py-[3rem] w-fit">
              {filteredPlants.map(product => {
                return (
                  <div className="h-[34rem] w-[22rem]" key={product.id}>
                    <ProductCard data={product} />
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      <Footer />
    </section>
  )
}
