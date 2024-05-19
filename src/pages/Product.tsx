import { useQuery } from "react-query";
import { getProduct } from "../services/getProduct";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { ProductType } from "../services/saveProduct";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import MainButton from "../components/MainButton";


export const Product = () => {

  const { productId = '' } = useParams()
  const fetchProduct = () => getProduct(productId)
  const { data, isLoading } = useQuery<ProductType>(`product-${productId}`, fetchProduct)
  
  if(isLoading) return <Loading size={20} />
    
  if(!data) return <div>errorpage</div>

  const {imgUrl, name, description, label, price, features, subtitle} = data

  return (
    <section>
      <Navbar />
      <div className="pt-[14.3125rem] pb-[8.8125rem] flex px-[6.25rem] justify-center">
        <div className="py-[6.25rem] flex gap-[5.125rem]">
          <img src={imgUrl} alt={name} className="w-[43.125rem] h-[43.125rem]"/>
          <div className="w-[43.75rem] h-auto">
            <h1 className="font-garamond font-bold text-[4rem] leading-[auto] text-moss">{name}</h1>
            <h2 className="font-lato font-bold text-2xl leading-[auto] text-inputBorders">{subtitle}</h2>
            <div className="flex gap-[1rem] mt-[1.5rem]">
              {label.map(label => (
              <div className="h-[2.4rem] justify-center flex items-center border-[0.125rem] border-greenLime rounded-full" key={label}>
              <p className="font-raleway text-base font-normal text-greenCactus px-[0.813rem]">{label}</p>
              </div>
              ))}
            </div>
            <p className="my-[1rem] font-lato font-bold text-2xl leading-[auto] text-black">${price}</p>
            <MainButton text={'Check out'} />
            <h2 className="my-[1rem] font-lato font-bold text-2xl leading-[auto] text-black">Features</h2>
            <ul className="list-disc pl-[1rem]">
              {features.split('.').filter(frase => frase.trim().length > 0).map((frase, index) => (
                <li className="font-raleway font-normal text-base leading-[154%] text-black" key={index} >{`${frase.trim()}.`} </li>
              ))}
            </ul>
            <h2 className="my-[1rem] font-lato font-bold text-2xl leading-[auto] text-black">Description</h2>
            <p className="font-raleway font-normal text-base leading-[154%] text-black">{description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}