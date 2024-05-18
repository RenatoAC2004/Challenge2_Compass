import { api } from "../lib/api"

export const getAllProductsWithSale = async () => {

  const { data } = await api.get('?isInSale=true')
  return data
}