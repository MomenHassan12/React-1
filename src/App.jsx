import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import About from './Components/About/About.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Contact from './Components/Contact/Contact.jsx'

function App() {

  const myRouter = createBrowserRouter(
    [
      {
        path: '', element: <Layout />, children: [
          { index: true, element: <Home /> }, //Route
          { path: '/About', element: <About /> },
          { path: '/Portfolio', element: <Portfolio /> },
          { path: '/Contact', element: <Contact /> },
          , { path: '*', element: <h1 className=' text-black'>404 NOT FOUND PAGE </h1> }
        ]
      },


    ]
  )
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
