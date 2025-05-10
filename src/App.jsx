import { useEffect, useState } from 'react'
import React from 'react'
import {useDispatch} from  'react-redux'
import './App.css'
import authservice from './appwrite/auth'
import { login,logout } from './store/authslice'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'

function App() {
  const[loding,setloding]=useState(true)
  const dispatch = useDispatch()

useEffect(()=>{
  authservice.getCurrentUser()
  .then((userData)=>{
    if(userData) {
      dispatch(login({userData}))
    } else {
      dispatch(logout());
      
    }
  })
  .finally(()=> setloding(false))
},[])


return !loding ? (
  <div className='min-h-screen flex flex-wrap content-between bg-white-400'>
      <div className='w-full block'>
        <Header/>
        <main>
        todo: <Outlet/>
        </main>
        <Footer/>

      </div>
  </div>
): null
}

export default App
