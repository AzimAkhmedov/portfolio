import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../../components/Layout'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import MainPage from '../../pages/Main/MainPage'
const appRouter = () => {

  return (


    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<MainPage />} />
        <Route element={<About />} path='about' />
        <Route element={<Contact />} path='contacts' />
      </Route>

    </Routes>
  )
}

export default appRouter