import { api } from "../lib/api"

export const getAllProductsByPrice = async () => {

  const { data } = await api.get('?_sort=price')
  return data
}