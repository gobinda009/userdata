import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import SignUp from "./components/SignUp"
import { Routes, Route } from "react-router-dom"
function App() {
  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

  )
}

export default App;
