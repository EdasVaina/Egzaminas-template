import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import PostGetTest from "./pages/PostGetTest.jsx"

export default function App() {
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/post" element={<PostGetTest />} />
      </Routes>
    </div>
  )
}