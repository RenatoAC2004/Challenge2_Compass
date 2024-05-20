import { useQuery } from "react-query"
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
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const queryFn = saleFilter
    ? getAllProductsWithSale
    : sortPrice
    ? getAllProductsByPrice
    : getAllProducts
  const { data, isLoading, refetch } = useQuery<ProductType[]>(
    ["products", saleFilter, sortPrice],
    queryFn
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (refetch) {
      refetch()
    }
  }, [sortPrice])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentPage])


  const filteredPlants = label !== null && sortPrice === false ? data?.filter(plant => plant.label.includes(label)) : data 

  const itemsPerPage = window.innerWidth <= 1040 ? 5 : window.innerWidth <= 1380 ? 8 : window.innerWidth <= 1720 ? 9 : 12
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredPlants?.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const numberOfPages = Math.ceil(((filteredPlants?.length) || 0) / itemsPerPage )
  const pageNumbers = Array.from({ length: numberOfPages }, (_, i) => i + 1 )
 
  return (
    <section className="bg-mainBackground">
      <div className="px-0 md:px-[4rem] py-[8rem] ">
        <div className=" w-full h-full border-l-0 border-r-0 border-2 rounded-md border-mainGray shadow-2xl md:rounded-3xl md:border-2 p-4">
          <h1 className="font-garamond font-bold text-5xl text-center text-moss">
            Products <span className="text-primaryAvacado">List</span>
          </h1>
          <div className="my-[5px] h-[1px] w-full bg-mainGray" />
          <div className="flex justify-between pt-8">
            <div className="flex items-center gap-[0.4rem]">
              <Funnel size={21} />
              <h2 className="font-lato font-bold text-black">filter by:</h2>
            </div>
            <button
              onClick={() => {
                setLabel(null),
                  setSaleFilter(false),
                  setSortPrice(!sortPrice)
              }}
              className={`flex items-center gap-[0.4rem] border border-primaryAvacado px-4 py-1 rounded-lg hover:opacity-80 ${sortPrice && 'bg-primaryAvacado text-white'}`}
            >
              <h1 className="font-lato font-bold">Sort by lowest price</h1>
              <SortAscending size={24} />
            </button>
          </div>
          <div className="my-[5px] h-[1px] w-full bg-mainGray" />

          <div className="flex flex-col md:flex-row w-full h-fit">
            <div className="gap-[0.8rem] w-full flex flex-col items-start md:w-fit">
              <button
                className={`font-lato font-bold text-base hover:opacity-80 text-black border-2 border-mainGray w-full text-left px-4 py-2 transition-all 
                rounded-xl hover:bg-moss hover:text-white ${label === 'indoor' && 'bg-moss text-white hover:opacity-80'}`}
                onClick={() => {
                  setLabel("indoor"), setSaleFilter(false), setSortPrice(false)
                }}
              >
                Indoor
              </button>
              <button
                className={`font-lato font-bold text-base hover:opacity-80 text-black border-2 border-mainGray w-full text-left px-4 py-2 transition-all 
                rounded-xl hover:bg-moss hover:text-white ${label === 'outdoor' && 'bg-moss text-white hover:opacity-80'}`}
                onClick={() => {
                  setLabel("outdoor"), setSaleFilter(false), setSortPrice(false)
                }}
              >
                Outdoor
              </button>
              <button
                className={`font-lato font-bold text-base hover:opacity-80 text-black border-2 border-mainGray w-full text-left px-4 py-2 transition-all 
                rounded-xl hover:bg-moss hover:text-white ${saleFilter && 'bg-moss text-white hover:opacity-80'}`}
                onClick={() => {
                  setLabel(null), setSaleFilter(true), setSortPrice(false)
                }}
              >
                In Sale
              </button>
              <button
                className="font-lato font-bold whitespace-nowrap hover:opacity-80 text-black border-2 border-mainGray w-full text-left px-4 py-2 transition-all 
                rounded-xl hover:bg-moss hover:text-white"
                onClick={() => {
                  setLabel(null), setSaleFilter(false), setSortPrice(false)
                }}
              >
                Remove filters
              </button>
            </div>
            {isLoading ? 
             <div className='w-full h-screen justify-center relative'>
              <div className='w-full flex justify-center items-center py-[20rem]'>
                <p><Loading size={25}/></p>
              </div>
            </div>
            : !currentItems?.length ? 
            <div className='w-full h-screen justify-center relative'>
              <div className='w-full flex justify-center items-center py-[20rem]'>
                <p className="font-lato font-medium text-xl leading-[auto]">No products was registered</p>
              </div>
            </div>
            :
              <div className="flex flex-wrap gap-y-[2rem] gap-x-[3rem] py-12 w-fit justify-center md:p-12 md:gap-y-[1rem]">
                {currentItems.map(product => {
                  return (
                    <div
                      className="h-fit w-fit md:h-[34rem] md:w-[18rem] "
                      key={product.id}
                    >
                      <ProductCard data={product} />
                    </div>
                  )
                })}
              </div>
            }
          </div>
          <ul className="flex justify-center mt-4">
            {pageNumbers.map(number => (
              <li
                key={number}
                className={`px-3 py-1 mr-2 cursor-pointer rounded ${
                  currentPage === number
                    ? "bg-moss text-white"
                    : "bg-mainGray text-moss"
                }`}
                onClick={() => paginate(number)}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
