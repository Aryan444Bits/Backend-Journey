import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [product, setProduct] = useState(null)

  // Default product (fallback) based on the details you provided
  const defaultProduct = {
    price: { amount: 100000, currency: 'INR' },
    _id: '68ff91912f700b9c0feb6dea',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
    title: 'test_title',
    __v: 0,
  }

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/products/get-item')
      .then((response) => {
        setProduct(response.data.product)
        // console.log(response.data.product)
      })
      .catch(() => {
        // If API is not available, fall back to default
        setProduct(defaultProduct)
      })
  }, [])

  const data = product || defaultProduct

  const formatCurrency = (amount, currency = 'INR') => {
    try {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency,
        maximumFractionDigits: 0,
      }).format(amount/100)
    } catch {
      return `${currency} ${amount}`
    }
  }

  const handleBuyNow = () => {
    // In real app, redirect to checkout
    alert(`Proceeding to buy: ${data.title} for ${formatCurrency(data.price.amount, data.price.currency)}`)
  }

  return (
    <main className="app">
      <section className="card" aria-live="polite">
        <figure className="card-media">
          <img src={data.image} alt={data.title} loading="lazy" />
        </figure>

        <div className="card-content">
          <div className="card-header">
            <h1 className="card-title">{data.title}</h1>
            <p className="card-price">
              {formatCurrency(data.price.amount, data.price.currency)}
            </p>
          </div>

          <ul className="card-meta">
            <li>ID: <span>{data._id}</span></li>
          </ul>

          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
