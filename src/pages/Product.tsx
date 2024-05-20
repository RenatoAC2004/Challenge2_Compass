import { useQuery } from "react-query"
import { getProduct } from "../services/getProduct"
import { useParams } from "react-router-dom"
import { Loading } from "../components/Loading"
import { ProductType } from "../services/saveProduct"
import { Footer } from "../components/Footer"
import Navbar from "../components/Navbar"
import MainButton from "../components/MainButton"

export const Product = () => {
  const { productId = "" } = useParams()
  const fetchProduct = () => getProduct(productId)
  const { data, isLoading } = useQuery<ProductType>(
    `product-${productId}`,
    fetchProduct
  )

  if (isLoading)
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

  if (!data) return <div>errorpage</div>

  const { imgUrl, name, description, label, price, features, subtitle } = data

  return (
    <section>
      <Navbar />
      <div className="bg-mainBackground py-[8.8125rem] px-14 flex flex-col lg:px-[6.25rem] justify-center">
        <div className="pb-12 flex flex-col gap-[2.563rem] items-center md:flex-row lg:gap-[5.125rem] xxl:py-[6.25rem] ">
          <img
            src={imgUrl}
            alt={name}
            className="h-full w-full lg:w-full 2xl:w-[43.125rem] 2xl:h-[43.125rem] xl:w-1/2"
          />
          <div className="flex flex-col items-center text-center w-fit px-4 h-auto md:text-left md:block">
            <h1 className="font-garamond font-bold text-5xl lg:text-[4rem] text-moss">
              {name}
            </h1>
            <h2 className="font-lato font-bold text-xl lg:text-2xl text-mainGray">
              {subtitle}
            </h2>
            <div className="flex gap-[1rem] mt-[1.5rem]">
              {label.map(label => (
                <div
                  className="h-[2.4rem] justify-center flex items-center border-[0.125rem] border-greenLime rounded-full"
                  key={label}
                >
                  <p className="font-raleway text-base font-normal text-greenCactus px-[0.813rem]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <p className="my-[1rem] font-lato font-bold text-2xl leading-[auto] text-black">
              ${price}
            </p>
            <MainButton text={"Check out"} />
            <div className="hidden 2xl:block">
              <h2 className="my-[1rem] font-lato font-bold text-2xl leading-[auto] text-black">
                Features
              </h2>
              <ul className="list-disc pl-[1rem]">
                {features
                  .split(".")
                  .filter(frase => frase.trim().length > 0)
                  .map((frase, index) => (
                    <li
                      className="font-raleway font-normal text-base leading-[154%] text-black"
                      key={index}
                    >
                      {`${frase.trim()}.`}{" "}
                    </li>
                  ))}
              </ul>
              <h2 className="my-[1rem] font-lato font-bold text-2xl leading-[auto] text-black">
                Description
              </h2>
              <p className="font-raleway font-normal text-base leading-[154%] text-black">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="2xl:hidden">
          <h2 className="my-[1rem] font-lato font-bold text-2xl leading-[auto] text-black">
            Features
          </h2>
          <ul className="list-disc pl-[1rem]">
            {features
              .split(".")
              .filter(frase => frase.trim().length > 0)
              .map((frase, index) => (
                <li
                  className="font-raleway font-normal text-base leading-[154%] text-black"
                  key={index}
                >
                  {`${frase.trim()}.`}
                </li>
              ))}
          </ul>
          <h2 className="my-[1rem] font-lato font-bold text-2xl leading-[auto] text-black">
            Description
          </h2>
          <p className="font-raleway font-normal text-base leading-[154%] text-black">
            {description}
          </p>
        </div>
      </div>
      <Footer />
    </section>
  )
}
