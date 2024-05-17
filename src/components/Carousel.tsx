import { ProductCard } from "./ProductCard";
import { useQuery } from "react-query";
import { getAllProducts } from "../services/getAllProducts";
import { Loading } from "./Loading";
import { ProductType } from "../services/saveProduct";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


export const Carousel = () => {
  
  const { data, isLoading } = useQuery<ProductType[]>('products', getAllProducts)
 
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
