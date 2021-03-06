import { useState } from 'react'
import { Navbar, Footer, Loader, Service, Transactions, Welcome } from './components'

const App = () => {

  return (
    <div className="min-h-screen">
       <div className="gradient-bg-welcome">
         <Navbar />
         <Welcome />
       </div>
       <Service />
       <Transactions />
       <Footer />
    </div>
  )
}

export default App
