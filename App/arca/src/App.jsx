import { Routes, Route } from "react-router-dom";
import Router from "../components/router";
import Login from "../components/login";
import Forgotpassword from "../components/forgotpassword";
import Enterpin from "../components/enterpin";
import Enternewpassword from "../components/enternewpassword";
import Register from "../components/Register";
import Index from "../components/index";
import HelpCenter from "../components/helpcenter";
import Pqrsf from "../components/pqrsf";

function App() { 
  return (  
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Forgotpassword' element={<Forgotpassword />} />
      <Route path='/Enterpin' element={<Enterpin />} />
      <Route path='/Enternewpassword' element={<Enternewpassword />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/HelpCenter' element={<HelpCenter />} />
      <Route path='/Pqrsf' element={<Pqrsf />} />
      <Route path='/Dashboard/*' element={<Router />} />
    </Routes>
  )
}

export default App;
