import { Routes, Route } from "react-router-dom";
import Index from "../components/index";
import Login from "../components/login";
import Forgotpassword from "../components/forgotpassword";
import Enterpin from "../components/enterpin";
import Enternewpassword from "../components/enternewpassword";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Dashboard from "../components/dashboard";
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
      <Route path='/Sidebar' element={<Sidebar />} />
      <Route path='/Navbar' element={<Navbar />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/HelpCenter' element={<HelpCenter />} />
      <Route path='/Pqrsf' element={<Pqrsf />} />
    </Routes>
  )
}  

export default App
