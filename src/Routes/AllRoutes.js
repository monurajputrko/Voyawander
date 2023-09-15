import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Login } from '../Components/Login/Login'
import { Signup } from '../Components/Signup/Signup'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/Signup' element={<Signup/>} ></Route>
         


        </Routes>
    </div>
  )
}
