import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../../components/Layout'
import MainPage from '../../pages/MainPage'
const appRouter = () => {

  return (


    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<MainPage />} /> 
        </Route>

    </Routes>
  )
}

export default appRouter