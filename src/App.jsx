
import { Suspense } from 'react'
import './App.css'
import Banner from './Banner'
import Hero from './Hero'
import Nav from './Nav'
import Footer from './Footer'

function App() {
  
  const getData= fetch('/public/Ticket.json').then(res=>res.json())

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Hero getData={getData}></Hero>
      </Suspense>
      <Footer></Footer>
      
    </>
  )
}

export default App
