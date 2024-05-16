import { ProductCard } from "./ProductCard";
import { useQuery } from "react-query";
import { getAllProducts } from "../services/getAllProducts";
import { Loading } from "./Loading";
import { ProductType } from "../services/saveProduct";


export const Carousel = () => {
  
  const { data, isLoading } = useQuery<ProductType[]>('products', getAllProducts)

  if(isLoading) return <Loading size={20} />
  if(!data) return

  return ( 
    <div>
      {data.map((data) => (
        <ProductCard
          key={data.id}
          data={data}
        />
      ))}
    </div>
  )
}
