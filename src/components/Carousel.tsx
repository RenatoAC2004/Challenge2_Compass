import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

interface Data {
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

export const Carousel = () => {

  const [data, setData] = useState<Data[]>([]) ;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/plants');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) return;

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
