import React from 'react'
import {useSelector} from 'react-redux'

export default function Other() {
    const st = useSelector(state=>state)
  return (
      <>
    <div>Other</div> 
    {st.count}

    Your Cart Items : {st.cart.length}
    </>
  )
}
