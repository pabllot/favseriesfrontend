import React from 'react'
import { Container} from '@material-ui/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'


const App = () => {
  

  return (
    
    <GoogleOAuthProvider clientId='471598104331-ota3237h72jq9t8m5208p37s4uavg835.apps.googleusercontent.com'>  
      <BrowserRouter>      
        <Container maxWidth='lg'>
         <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
        </Container>        
      </BrowserRouter>
    </GoogleOAuthProvider> 
  )
}

export default App