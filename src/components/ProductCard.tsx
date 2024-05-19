import { Link } from "react-router-dom";
import { ProductType } from "../services/saveProduct";

export const ProductCard = ( { data } : {data:ProductType}) => {

  const { id, name, price, label, imgUrl, isInSale, discountPercentage } = data

  const discountCalculate = (price: number, discount: number) => {
    const result = price * (discount / 100)
    return (price - result).toFixed(2)
  }

  return (
      <Link to={`/product/${id}`}>
          <div className="w-full h-fit flex flex-col bg-cardBackground shadow-lg transition-all hover:scale-110 hover:shadow-lg hover:shadow-gray-500"> 
            <img className="mb-4" src={imgUrl} alt={name} />
            <div className="w-full h-full px-8 flex flex-col mb-8">
              <h1 className="font-lato text-xl font-bold text-primaryLunarGreen whitespace-nowrap overflow-hidden text-ellipsis">{name}</h1>
              {!isInSale ? 
                <span className="font-raleway text-base font-normal text-primaryLunarGreen mt-[7px]">${price}</span>
              :
                <div>
                  <span className="font-raleway text-base font-normal text-primaryLunarGreen mt-[7px]">${discountCalculate(price, discountPercentage)}</span>
                  <span className="font-raleway text-base font-normal text-inputBorders mt-[7px] line-through ml-[1rem]">${price}</span>
                </div>
            }
              <div className="h-fit flex flex-wrap gap-[0.875rem] mt-6">
                {label && label.map((label) => (
                  <div className="h-[2.4rem] flex justify-center items-center border-[0.125rem] bg-mainBackground border-primaryAvacado rounded-full overflow-hidden" key={label}>
                    <p className="font-raleway text-base font-normal text-primaryAvacado px-[0.813rem] overflow-hidden text-ellipsis">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </Link>
  )
}
