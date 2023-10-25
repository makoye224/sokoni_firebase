import './App.css';
import Login from './auth/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './auth/Register';
import ResetPassword from './auth/ResetPassword';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
    </div>
    <br/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/resetpassword" element={<ResetPassword/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/add_product" element={<AddProduct/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
