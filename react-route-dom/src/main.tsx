import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globalStyle.css'
import { Home } from './components/Home'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NotFound } from './components/404'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="*"  element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)