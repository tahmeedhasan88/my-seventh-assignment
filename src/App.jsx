
import { Suspense } from 'react'
import './App.css'
import Banner from './Banner'
import Hero from './Hero'
import Nav from './Nav'
import Footer from './Footer'
import { useState } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 
  const [counter, setCounter] = useState(0)
  const [count, setCount]= useState(0)
  
  const getData= fetch('/Ticket.json').then(res=>res.json())

  return (
    <>
      <Nav></Nav>
      <Banner count={count} setCount={setCount} counter={counter} setCounter={setCounter}></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Hero getData={getData} count={count} setCount={setCount} counter={counter} setCounter={setCounter}></Hero>
      </Suspense>
      <Footer></Footer>
       <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
