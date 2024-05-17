import { useQuery } from "react-query";
import { getProduct } from "../services/getProduct";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { ProductType } from "../services/saveProduct";


export const Product = () => {

  const { productId = '' } = useParams()
  const fetchProduct = () => getProduct(productId)
  const { data, isLoading } = useQuery<ProductType>(`product-${productId}`, fetchProduct)
  
  if(isLoading) return <Loading size={20} />
    
  if(!data) return <div>errorpage</div>

  const {imgUrl, name, description, label, price, features, subtitle} = data

  return (
    <section>
      <img src={imgUrl} alt={name} />
      <div>
        <h1>{name}</h1>
        <h2>{subtitle}</h2>
        {label.map(label => (
          <div key={label}>

          </div>
        ))}
        <span>${price}</span>
        <button>Check out</button>
        <h2>Features</h2>
        <p>{features}</p>
        <h2>Description</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}