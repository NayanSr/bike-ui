import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Products from './pages/Products/Products/Products';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Payment from './pages/Dashboard/Payment/Payment';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import Review from './pages/Dashboard/Review/Review';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddAProduct from './pages/Dashboard/AddAProduct/AddAProduct';
import Orderplacement from './pages/Shared/OrderPlacement/Orderplacement';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/products' element={<PrivateRoute><Products /></PrivateRoute>} />
            <Route path='/orderplacement' element={<PrivateRoute><Orderplacement /></PrivateRoute>} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} >
              <Route exact path='/dashboard/payment' element={<Payment />}></Route>
              <Route exact path='/dashboard/myorder' element={<MyOrder />}></Route>
              <Route exact path='/dashboard/review' element={<Review />}></Route>
              <Route exact path='/dashboard/makeadmin' element={<MakeAdmin />}></Route>
              <Route exact path='/dashboard/addproduct' element={<AddAProduct />}></Route>
            </Route>
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}


export default App;


/*
import React from 'react';

const Home = () => {
    return (
        <div>
            
        </div>
    );
};

export default Home;
*/


