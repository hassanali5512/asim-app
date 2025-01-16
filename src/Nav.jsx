import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

function Nav({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
      <main style={{ flex: '1 0 auto' }}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Nav