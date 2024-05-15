import { Link } from "react-router-dom";

interface Plant {
  id: number;
  name: string;
  subtitle: string;
  label: string[];
  price: string;
  isInSale: boolean;
  discountPercentage: number;
  features: string;
  description: string;
  imgUrl: string;
}


export const ProductCard = ( { data } : {data:Plant}) => {

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
