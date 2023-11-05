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
      alert("Completa todos los campos")
    }
  }
  return (
    <div>
      <h1>Agregar colaborador</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre del colaborador" name="nombre" id="nombre" onChange={(e)=>setNombre(e.target.value)} />
        <input placeholder="Email del colaborador" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="Edad del colaborador" name="edad" id="edad" onChange={(e)=>setEdad(e.target.value)} />
        <input placeholder="Cargo del colaborador" name="cargo" id="cargo" onChange={(e)=>setCargo(e.target.value)} />
        <input placeholder="Teléfono del colaborador" name="telefono" id="telefono" onChange={(e)=>setTelefono(e.target.value)} />
        <button>Agregar colaborador</button>
      </form>
    </div>
  )
}
