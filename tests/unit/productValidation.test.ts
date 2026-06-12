import { describe, it, expect } from 'vitest'
import { validateProductInput } from '../../src/products/productValidation'

describe('product validation', ()=>{
  it('rejects empty name', ()=>{
    const errs = validateProductInput({ name: '', price: 1, quantity: 0 })
    expect(errs.name).toBeTruthy()
  })
  it('rejects non-positive price', ()=>{
    const errs = validateProductInput({ name: 'x', price: 0, quantity: 1 })
    expect(errs.price).toBeTruthy()
  })
  it('rejects negative quantity or non-integer', ()=>{
    const errs = validateProductInput({ name: 'x', price: 1, quantity: -1 })
    expect(errs.quantity).toBeTruthy()
  })
})
