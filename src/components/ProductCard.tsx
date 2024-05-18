import { Link } from "react-router-dom";
import { ProductType } from "../services/saveProduct";

export const ProductCard = ( { data } : {data:ProductType}) => {

  const { id, name, price, label, imgUrl, isInSale, discountPercentage } = data

  const discountCalculate = (price: number, discount: number) => {
    const result = price * (discount / 100)
    return (price - result).toFixed(2)
  }

  return (
      <Link  to={`/product/${id}`}>
          <div className="w-full h-fit flex flex-col bg-[#F0F1EE] shadow-card"> 
            <img className="mt-0 mb-[1rem]" src={imgUrl} alt={name} />
            <div className="w-[20.25rem] h-[7.75rem] mx-[2.06rem] flex flex-col mb-[2rem]">
              <h1 className="font-lato text-xl font-bold text-primaryLunarGreen">{name}</h1>
              {!isInSale ? 
                <span className="font-raleway text-base font-normal text-primaryLunarGreen mt-[7px]">${price}</span>
              :
                <div>
                  <span className="font-raleway text-base font-normal text-primaryLunarGreen mt-[7px] line-through">${price}</span>
                  <span className="font-raleway text-base font-normal text-primaryLunarGreen mt-[7px]">${discountCalculate(price, discountPercentage)}</span>
                </div>
            }
              <div className="w-[24.3rem] h-[2.4rem] flex gap-[0.875rem] mt-[1.5rem]">
                {label && label.map((label) => (
                  <div className="h-[2.4rem] flex justify-center items-center border-[0.125rem] border-primaryAvacado rounded-full" key={label}>
                    <p className="font-raleway text-base font-normal text-primaryAvacado px-[0.813rem]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </Link>
  )
}
