import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./SignUp";
import Login from './Login'
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home'

function App() {
  return (
    <div>
        
      <BrowserRouter>
        <Routes>
    
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path ='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
