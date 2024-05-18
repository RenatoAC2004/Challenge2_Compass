import { api } from "../lib/api"

export const getAllProducts = async () => {

  const { data } = await api.get('/')
  return data
}