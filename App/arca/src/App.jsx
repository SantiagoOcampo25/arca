import { Routes, Route } from "react-router-dom";
import Router from "../components/router";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import EnterPin from "../components/EnterPin";
import EnterNewPassword from "../components/EnterNewPassword";
import Register from "../components/Register";
import Index from "../components/Index";
import HelpCenter from "../components/HelpCenter";
import Pqrsf from "../components/Pqrsf";
import PrivateRoute from "../components/PrivateRoutes";

function App() { 
  return (  
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path='/EnterPin' element={<EnterPin />} />
        <Route path='/EnterNewPassword' element={<EnterNewPassword />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/HelpCenter' element={<HelpCenter />} />
        <Route path='/Pqrsf' element={<Pqrsf />} />
        <Route path='/Dashboard/*' element={
        <PrivateRoute>
          <Router />
        </PrivateRoute>
        } />
      </Routes>
  )
}

export default App;
