import React, { useEffect, useState } from 'react'
import { listProducts } from './productService'
import { Product } from './productTypes'

export default function ProductManagementPage(){
  const [products, setProducts] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(()=>{
    let mounted = true
    setLoading(true)
    listProducts().then(p=>{ if (mounted) { setProducts(p); setError(null) } }).catch(e=>{ if (mounted) setError('Failed to load products') }).finally(()=>{ if (mounted) setLoading(false) })
    return ()=>{ mounted=false }
  },[])

  if (loading) return <div>Loading products…</div>
  if (error) return <div>Error: {error}</div>
  if (!products || products.length===0) return <div>No products found</div>

  const handleEdit = (id: string) => { window.alert(`Edit ${id}`) }
  const handleDelete = (id: string) => { if (window.confirm('Delete product?')) { window.alert(`Deleted ${id}`) } }
  const handleDetails = (p: Product) => { window.alert(JSON.stringify(p, null, 2)) }

  return (
    <div style={{ padding: 16 }}>
      <div style={{ overflowX: 'auto' }}>
        <table className="pm-table">
          <thead>
            <tr>
              <th>Name</th>
              <th className="desc-col">Description</th>
              <th>Price</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td className="desc-col">{p.description ?? '—'}</td>
                <td>{typeof p.price === 'number' ? `$${p.price.toFixed(2)}` : p.price}</td>
                <td><button onClick={() => handleDetails(p)} className="link">View</button></td>
                <td><button onClick={() => handleEdit(p.id)} className="primary">Edit</button></td>
                <td><button onClick={() => handleDelete(p.id)} className="danger">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{` 
        .pm-table { width: 100%; border-collapse: collapse; min-width: 700px; }
        .pm-table th, .pm-table td { padding: 12px 16px; text-align: left; border-bottom: 1px solid #e6e6e6; }
        .pm-table thead th { background: #f9fafb; font-weight: 600; }
        .desc-col { max-width: 40ch; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .pm-table tr:hover td { background: #fbfbfb; }
        .primary { background: #2563eb; color: white; border: none; padding: 6px 10px; border-radius: 6px; cursor: pointer; }
        .danger { background: #ef4444; color: white; border: none; padding: 6px 10px; border-radius: 6px; cursor: pointer; }
        .link { background: none; border: none; color: #2563eb; cursor: pointer; padding: 0; }
        @media (max-width: 640px) {
          .pm-table { min-width: 0; }
          .pm-table th:nth-child(2), .pm-table td:nth-child(2) { display: none; }
        }
      `}</style>
    </div>
  )
}
