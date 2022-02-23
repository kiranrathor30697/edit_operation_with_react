import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layouts(props) {
  return (
      <>
        <Header />
        {props.children}
        <Footer />
      </>
  )
}
