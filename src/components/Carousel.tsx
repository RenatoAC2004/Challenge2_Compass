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
  
  const { data, isLoading } = useQuery<ProductType[]>(['products', isInSale], queryFn)
    if(isLoading) return <div className="w-full max-h-[35rem] flex justify-center items-center py-[20rem]"> <Loading size={20} /> </div> 
    if(!data) return

  return (
    <Swiper className="w-full h-fit justify-center overflow-visible select-none"
      spaceBetween={48}
      slidesPerView={window.innerWidth <= 600 ? 1.2 : window.innerWidth <= 870? 2 : window.innerWidth <= 1200 ? 3 : 3.6}
    >
      {data.map((data) => (
        <SwiperSlide key={data.id}>
          <ProductCard
            data={data}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
