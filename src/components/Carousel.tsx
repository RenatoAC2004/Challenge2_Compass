import { ProductCard } from "./ProductCard";
import { useQuery } from "react-query";
import { Loading } from "./Loading";
import { ProductType } from "../services/saveProduct";
import { Swiper, SwiperSlide } from 'swiper/react'
import { getAllProductsWithSale } from "../services/getAllProductsWithSale";
import { getAllProductsWithoutSale } from "../services/getAllProductWithoutSale";
import 'swiper/css'
import { useEffect, useState } from "react";

interface CarouselProps {
  isInSale: boolean
}
export const Carousel = ({isInSale}:CarouselProps) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const queryFn = isInSale ? getAllProductsWithSale : getAllProductsWithoutSale

  const slidesPerView = window.innerWidth <= 600 ? 1.2 : window.innerWidth <= 870? 2 : window.innerWidth <= 1200 ? 3 : 3.6
  
  const { data, isLoading } = useQuery<ProductType[]>(['products', isInSale], queryFn)

  if (!data && !isLoading) return 
  
  return (
    <Swiper
      className="w-full h-fit justify-center overflow-visible select-none"
      spaceBetween={48}
      slidesPerView={slidesPerView}
    >
      {isLoading ? (
        <div className=" flex gap-x-[5rem]">
          {Array.from({ length: Math.floor(slidesPerView) }, (_, index) => index + 1).map((index) => (
          <div key={index} className="w-full h-fit flex flex-col animate-pulse">
              <div className="h-[200px] bg-gray-200 w-full dark:bg-gray-700 mb-4"></div>
              <div className="l bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
              <div className="h-[30px] bg-gray-200 mx-[0.2rem] dark:bg-gray-700 mb-2.5"></div>
              <div className="h-[30px] bg-gray-200 mx-[0.2rem] dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
              <div className="h-[30px] bg-gray-200 mx-[0.2rem] dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          </div>
          ))}
        </div>
      ) : (
        data.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard data={product} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  )
}
