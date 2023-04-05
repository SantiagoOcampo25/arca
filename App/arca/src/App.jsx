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
import ManageUsers from "../components/manageUsers";
import Schedules from "../components/schedules";
import Pqrsftable from "../components/pqrsftable";

const datosPQRSF = [
  {
    idUser: '1',
    TipoPQRSF: 'Felicitacion',
    Documento: 'CC 1022387239'
  },
  {
    idUser: '2',
    TipoPQRSF: 'Queja',
    Documento: 'CC 1025587239'
  },
  {
    idUser: '3',
    TipoPQRSF: 'Reclamo',
    Documento: 'CC 1029812239'
  }
]
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
      <Route path='/ManageUsers' element={<ManageUsers />} />
      <Route path='/Schedules' element={<Schedules />} />
      <Route path='/Pqrsftable' element={<Pqrsftable datosPQRSF={datosPQRSF}/>} />
    </Routes>
  )
}  

export default App
