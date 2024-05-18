import { api } from "../lib/api"

export const getAllProductsWithoutSale = async () => {

  const { data } = await api.get('?isInSale=false')
  return data
}