import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mb-4">Page not found</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  )
}