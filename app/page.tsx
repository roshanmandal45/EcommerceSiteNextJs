import { stripe } from '@/lib/stripe'
import React from 'react'

const Home = () => {
  const products = await stripe.products.list({
    
  })
  return (
    <div>
      
    </div>
  )
}

export default Home
