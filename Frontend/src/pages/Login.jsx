export default function Login() {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="card bg-base-100 shadow-xl w-full max-w-sm">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary mt-4">Login</button>
        </div>
      </div>
    </div>
  )
}