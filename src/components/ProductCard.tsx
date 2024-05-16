import { Link } from "react-router-dom";
import { ProductType } from "../services/saveProduct";

export const ProductCard = ( { data } : {data:ProductType}) => {

  const { id, name, price, label, imgUrl } = data

  return (
      <Link  to={`/product/${id}`}>
          <div className="w-[390px] h-[560px] flex flex-col"> 
            <img className="mt-0 ml-0 mr-0 mb-[16px] w-[350pt] h-[350pt]" src={imgUrl} alt={name} />
            <h1 className="w-[220px] h-[29px] font-">{name}</h1>
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
