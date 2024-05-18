import { ProductCard } from "./ProductCard";
import { useQuery } from "react-query";
import { Loading } from "./Loading";
import { ProductType } from "../services/saveProduct";
import { Swiper, SwiperSlide } from 'swiper/react'
import { getAllProductsWithSale } from "../services/getAllProductsWithSale";
import { getAllProductsWithoutSale } from "../services/getAllProductWithoutSale";
import 'swiper/css'

interface CarouselProps {
  isInSale: boolean
}
export const Carousel = ({isInSale}:CarouselProps) => {
  
  const queryFn = isInSale ? getAllProductsWithSale : getAllProductsWithoutSale
  
  const { data, isLoading } = useQuery<ProductType[]>(['products', isInSale], queryFn)
    if(isLoading) return <Loading size={20} />
    if(!data) return

  return (
    <Swiper className="p-20 bg-black"
      spaceBetween={48}
      slidesPerView={4}
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
