import { ProductInput } from './productTypes'

export function validateProductInput(input: ProductInput){
  const errors: Record<string,string> = {}
  if (!input.name || input.name.trim().length === 0) { errors.name = 'Name is required' }
  if (input.name && input.name.length > 200) { errors.name = 'Name is too long' }
  if (input.price == null || Number.isNaN(Number(input.price)) || Number(input.price) <= 0) { errors.price = 'Price must be positive' }
  if (input.quantity == null || !Number.isInteger(input.quantity) || input.quantity < 0) { errors.quantity = 'Quantity must be whole >= 0' }
  return errors
}
