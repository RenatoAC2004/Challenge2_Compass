import { useQuery } from "react-query";
import { getProduct } from "../services/getProduct";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { ProductType } from "../services/saveProduct";


export const Product = () => {

  const { productId = '' } = useParams()
  const fetchProduct = () => getProduct(productId)
  const { data, isLoading } = useQuery<ProductType>('product', fetchProduct)

  if(isLoading) return <Loading size={20} />
    
  if(!data) return <div>errorpage</div>

  return (
    <div>

    </div>
  )
}