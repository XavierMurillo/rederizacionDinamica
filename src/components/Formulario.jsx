import { useState } from "react"

export const Formulario = () => {
  const [nombre,setNombre] = useState("");
  const [email,setEmail] = useState("");
  const [edad,setEdad] = useState("");
  const [cargo,setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = () =>{
    event.preventDefault();
    if(nombre=="" || email=="" || edad=="" || cargo=="" || telefono==""){
      alert("AAA")
    }
  }
  return (
    <div>
      <h1>Agregar colaborador</h1>
      <form onSubmit={handleSubmit}>
        <input name="nombre" id="nombre" onChange={(e)=>setNombre(e.target.value)} />
        <input name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
        <input name="edad" id="edad" onChange={(e)=>setEdad(e.target.value)} />
        <input name="cargo" id="cargo" onChange={(e)=>setCargo(e.target.value)} />
        <input name="telefono" id="telefono" onChange={(e)=>setTelefono(e.target.value)} />
        <button>Agregar colaborador</button>
      </form>
    </div>
  )
}
