import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

          
function Navbar({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header  
   
      />
      <main style={{ flex: '1 0 auto' }}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Navbar;