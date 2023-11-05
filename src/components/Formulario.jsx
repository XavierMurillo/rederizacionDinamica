import { useState } from "react"
import { BaseColaboradores } from "../js/BaseColaboradores"; 

export const Formulario = () => {

  const [id, setId] = useState(4);
  const [formulario, setFormulario] = useState({ 
    id:id,
    nombre:'',
    email:'',
    edad:'',
    cargo:'',
    telefono:''
  });
  const [ listado, setListado ] = useState(BaseColaboradores);

  const handleSubmit = (event) =>{
    event.preventDefault();
    let values = Object.values(formulario);
    let flag = 0
    values.forEach((value)=> {
      if(value.length < 1){
        flag = 1;
      }else {
        flag = 0
      }
    });
    if(flag ==1){
      alert("Completa todos los datos!")
    }
    else{
      setId(id+1);
      setListado([
        ...listado,
        {...formulario,id: id.toString()},
      ])
      console.log(listado);
    }
  };

  const handleOnChange = (event) =>{
    event.preventDefault();
    const nombreinput = event.target.name;
    const valorinput = event.target.value;

    setFormulario({
      ...formulario,
      [nombreinput]:valorinput,
    });
  };

  return (
    <div>
      <h1>Agregar colaborador</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Nombre del colaborador" name="nombre" id="nombre" value={formulario.nombre} onChange={handleOnChange} />
        <input placeholder="Email del colaborador" name="email" id="email" value={formulario.email} onChange={handleOnChange} />
        <input placeholder="Edad del colaborador" name="edad" id="edad" value={formulario.edad} onChange={handleOnChange} />
        <input placeholder="Cargo del colaborador" name="cargo" id="cargo" value={formulario.cargo} onChange={handleOnChange} />
        <input placeholder="Teléfono del colaborador" name="telefono" id="telefono" value={formulario.telefono} onChange={handleOnChange} />
        <button>Agregar colaborador</button>
      </form>
    </div>
  )
}
