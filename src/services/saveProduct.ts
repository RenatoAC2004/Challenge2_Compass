import { api } from "../lib/api"

export interface ProductType {
  id: string
  name: string
  subtitle: string
  price: number
  isInSale: boolean
  discountPercentage: number
  label: string[]
  features: string
  description: string
  imgUrl: string
}

export const saveProduct = async (product: ProductType) => {
  const { data } = await api.post('/', product)

  return data
}