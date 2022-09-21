import React from 'react'
import { Container} from '@material-ui/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Form from './components/Form/Form'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))

  return (
      <BrowserRouter>      
        <Container maxWidth='xl'>
         <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Home />} />
            <Route path='/auth' element={(!user ? <Auth /> : <Home />)} />
            <Route path='/form' element={user && <Form />} />
          </Routes>
        </Container>        
      </BrowserRouter>
  )
}

export default App