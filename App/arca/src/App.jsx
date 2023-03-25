import { Routes, Route } from "react-router-dom";
import Index from "../components/index";
import Login from "../components/login";
import Forgotpassword from "../components/forgotpassword";
import Enterpin from "../components/enterpin";
import Enternewpassword from "../components/enternewpassword";


function App() {

  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Forgotpassword' element={<Forgotpassword />} />
      <Route path='/Enterpin' element={<Enterpin />} />
      <Route path='/Enternewpassword' element={<Enternewpassword />} />
    </Routes>
  )
}  

export default App
