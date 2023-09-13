import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Login } from '../components/Login/Login'
import { Signup } from '../components/Signup/Signup'
import { Home } from '../components/Home'
export const Allrouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/Signup' element={<Signup/>} ></Route>
            <Route path='/' element={<Home/>} ></Route>


        </Routes>
    </div>
  )
}
