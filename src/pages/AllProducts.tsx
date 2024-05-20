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
  // Hooks
  const [label, setLabel] = useState<null | string>(null)
  const [saleFilter, setSaleFilter] = useState<boolean>(false)
  const [sortPrice, setSortPrice] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const queryFn = saleFilter
    ? getAllProductsWithSale
    : sortPrice
    ? getAllProductsByPrice
    : getAllProducts
  const { data, isLoading, refetch } = useQuery<ProductType[]>(
    ["products", saleFilter],
    queryFn
  )

  useEffect(() => {
    if (refetch) {
      refetch()
    }
  }, [sortPrice])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentPage])

  // Filter products
  if (isLoading)
    return (
      <div className="w-full h-screen justify-center relative">
        <Navbar />
        <div className="w-full flex justify-center items-center py-[20rem]">
          <Loading size={34} />
        </div>
        <Footer />
      </div>
    )

  if (!data) return

  let filteredPlants = data
  if (label !== null && sortPrice === false) {
    filteredPlants = data.filter(plant => plant.label.includes(label))
  }

  // Pagination
  const itemsPerPage = 9
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredPlants.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(filteredPlants.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <section className="bg-mainBackground">
      <Navbar />
      <div className="px-[8rem] py-[8rem]">
        <div className="mb-[5px] h-[1px] w-full bg-inputBorders" />
        <h1 className="font-inter font-semibold text-2xl leading-auto text-moss">
          Products List
        </h1>
        <div className="my-[5px] h-[1px] w-full bg-inputBorders" />
        <div className="flex justify-between">
          <div className="flex items-center gap-[0.4rem]">
            <Funnel size={21} />
            <h2 className="font-lato font-bold text-base leading-[auto] text-black">
              filter by:{" "}
            </h2>
          </div>
          <button
            onClick={() => {
              setLabel(null),
              setSaleFilter(false),
              sortPrice ? setSortPrice(false) : setSortPrice(true)
            }}
            className="flex items-center gap-[0.4rem] hover:opacity-80"
          >
            <h1 className="font-lato font-bold text-base leading-[auto] text-black">
              Sort by price
            </h1>
            <SortAscending size={24} />
          </button>
        </div>
        <div className="my-[5px] h-[1px] w-full bg-inputBorders" />

        <div className="w-full h-fit flex">
          <div className="gap-[0.8rem] pr-[3rem] w-[11rem] flex flex-col items-start pt-[0.3rem]">
            <button
              className="font-lato font-bold text-base leading-[auto] hover:opacity-80 text-black"
              onClick={() => {
                setLabel("indoor"), setSaleFilter(false), setSortPrice(false)
              }}
            >
              Indoor
            </button>
            <button
              className="font-lato font-bold text-base leading-[auto] hover:opacity-80 text-black"
              onClick={() => {
                setLabel("outdoor"), setSaleFilter(false), setSortPrice(false)
              }}
            >
              Outdoor
            </button>
            <button
              className="font-lato font-bold text-base leading-[auto] hover:opacity-80 text-black"
              onClick={() => {
                setLabel(null), setSaleFilter(true), setSortPrice(false)
              }}
            >
              In Sale
            </button>
            <button
              className="font-lato font-bold text-base leading-[auto] hover:opacity-80 text-black"
              onClick={() => {
                setLabel(null), setSaleFilter(false), setSortPrice(false)
              }}
            >
              Remove filters
            </button>
          </div>

          <div className="flex flex-wrap gap-y-[3rem] gap-x-[3rem] py-[3rem] w-fit">
            {currentItems.map(product => {
              return (
                <div className="h-[34rem] w-[22rem]" key={product.id}>
                  <ProductCard data={product} />
                </div>
              )
            })}
          </div>
        </div>
        <ul className="flex justify-center mt-4">
          {pageNumbers.map(number => (
            <li
              key={number}
              className={`px-3 py-1 mr-2 cursor-pointer rounded ${
                currentPage === number
                  ? "bg-moss text-white"
                  : "bg-inputBorders text-moss"
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </section>
  )
}
