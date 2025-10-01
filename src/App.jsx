
import { Suspense } from 'react'
import './App.css'
import Banner from './Banner'
import Hero from './Hero'
import Nav from './Nav'

function App() {
  
  const getData= fetch('/public/Ticket.json').then(res=>res.json())

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Hero getData={getData}></Hero>
      </Suspense>
      
    </>
  )
}

export default App
