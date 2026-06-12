import { rest } from 'msw'

const products = [
  { id: 'p1', name: 'Widget', price: 9.99, quantity: 10, description: 'A widget' }
]

export const handlers = [
  rest.get('/api/products', (req,res,ctx)=>{
    return res(ctx.status(200), ctx.json(products))
  }),
  rest.post('/api/products', async (req,res,ctx)=>{
    const body = await req.json()
    const p = { id: 'p' + (products.length+1), ...body }
    products.push(p)
    return res(ctx.status(201), ctx.json(p))
  }),
  rest.put('/api/products/:id', async (req,res,ctx)=>{
    const id = req.params.id as string
    const body = await req.json()
    const idx = products.findIndex(p=>p.id===id)
    if (idx===-1) return res(ctx.status(404))
    products[idx] = { ...products[idx], ...body }
    return res(ctx.status(200), ctx.json(products[idx]))
  }),
  rest.delete('/api/products/:id', (req,res,ctx)=>{
    const id = req.params.id as string
    const idx = products.findIndex(p=>p.id===id)
    if (idx!==-1) { products.splice(idx,1); return res(ctx.status(204)) }
    return res(ctx.status(404))
  })
]
