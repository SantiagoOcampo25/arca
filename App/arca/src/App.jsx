import { Routes, Route } from "react-router-dom";
import Index from "../components/index";
import Login from "../components/login";


function App() {

  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  )
}  

export default App
