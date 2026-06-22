import { useState } from "react";
import axios from 'axios';

const API = "http://localhost:3000";

export default function Login() {

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const sendLogin = async () => {
        await axios.post(`${API}/api/login`, { Username, Password});
        console.log(Username, Password)
        setUsername("");
        setPassword("");
    };

    const sendDelete = async () => {
        await axios.delete(`${API}/api/login/${0}`);
    };
    


  return (
    <div className="flex justify-center items-center p-10">
      <div className="card bg-base-100 shadow-xl w-full max-w-sm">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <input
            type="email"
            placeholder="Username"
            className="input input-bordered w-full"
            value={Username}
            onChange={(e) => setUsername(e.target.value)} />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={Password}
            onChange={(e) => setPassword(e.target.value)} />
          <button className="btn btn-primary mt-4" onClick={sendLogin} >Login</button>
          <button className="btn btn-primary mt-4" onClick={sendDelete} >delete</button>
        </div>
      </div>
    </div>
  )
}