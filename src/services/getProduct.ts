import { api } from "../lib/api"

export const getProduct = async (productId: string) => {

  const { data } = await api.get(`/${productId}`)
  return data
}