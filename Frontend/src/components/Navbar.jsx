import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link to="/post" className="btn btn-primary">
          Post
        </Link>
      </div>
    </div>
  )
}