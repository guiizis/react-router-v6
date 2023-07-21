import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globalStyle.css'
import { Home } from './components/Home'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NotFound } from './components/404'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Post } from './components/Post'
import { Redirect } from './components/redirect'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/post/:id' element={<Post/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Redirect' element={<Redirect />}/>
      <Route path='/' element={<Home/>}/>
      <Route path="*"  element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
