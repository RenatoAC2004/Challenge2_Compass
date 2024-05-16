import { Link } from "react-router-dom";
import { ProductType } from "../services/saveProduct";

export const ProductCard = ( { data } : {data:ProductType}) => {

  const { id, name, price, label, imgUrl } = data

  return (
      <Link to={`/product/${id}`}>
        <div className="w-[100px]"> 
          <img src={imgUrl} alt={name} />
          <h1>{name}</h1>
          <span>{price}</span>
          {label && label.map((label) => (
            <div key={label}>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </Link>
  )
}
