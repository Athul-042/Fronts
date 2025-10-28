import { useState } from "react";

export default function App() {

  const [n, setN] = useState(""), [e, setE] = useState(""), [err, setErr] = useState("");

  const handleSubmit = (x) => {

    x.preventDefault();

    if (!n || !e) setErr("All fields required");

    else if (!/\S+@\S+\.\S+/.test(e)) setErr("Invalid email");

    else { setErr(""); alert(${n}, ${e}); }

  };

  return (

    <form onSubmit={handleSubmit}>

      <input value={n} onChange={a=>setN(a.target.value)} placeholder="Name" /><br/>

      <input value={e} onChange={a=>setE(a.target.value)} placeholder="Email" /><br/>

      <p style={{color:"red"}}>{err}</p>

      <button>Submit</button>

    </form>

  );

}
