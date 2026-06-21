import { useEffect, useState } from "react"

export default function Home() {
  const [msg, setMsg] = useState("")
  const [response, setResponse] = useState("")

  useEffect(() => {
  }, [])

  return (
    <div className="p-10">
      <input type="button" name="" id="" className="btn" />
      <h1 className="text-2xl font-bold">Home</h1>
      <p className="mt-5">{response}</p>
      <p>{msg}</p>
    </div>
  )
}