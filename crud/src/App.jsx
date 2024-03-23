import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Components/Users/Users';
import CreateUser from './Components/CreateUser/CreateUser';
import Update from './Components/Update/Update';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/create' element={<CreateUser/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
