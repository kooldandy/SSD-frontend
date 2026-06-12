import api from './productApiClient'
import { Product, ProductInput } from './productTypes'

export async function listProducts(): Promise<Product[]> {
  const resp = await api.get('/product')
  return resp.data as Product[]
}
export async function createProduct(input: ProductInput){
  const resp = await api.post('/product', input)
  return resp.data as Product
}
export async function updateProduct(id: string, input: ProductInput){
  const resp = await api.patch(`/product/${id}`, input)
  return resp.data as Product
}
export async function deleteProduct(id: string){
  const resp = await api.delete(`/product/${id}`)
  return resp.data
}
