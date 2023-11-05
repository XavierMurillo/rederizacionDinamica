import { useState } from "react";

export const Formulario = ({ listado, setListado, setColaboradores }) => {
  var idVal = listado.length + 1;
  console.log(idVal);
  const [formulario, setFormulario] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let values = Object.values(formulario);
    let flag = 0;
    values.forEach((value) => {
      if (value.length < 1) {
        flag = 1;
      } else {
        flag = 0;
      }
    });
    if (flag == 1) {
      alert("Completa todos los datos!");
    } else {
      setListado([...listado, formulario]);
      setColaboradores([...listado, formulario]);
      idVal = idVal + 1;
      console.log(listado);
    }
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    const nombreinput = event.target.name;
    const valorinput = event.target.value;

    setFormulario({
      ...formulario,
      id: idVal.toString(),
      [nombreinput]: valorinput,
    });
  };

  return (
    <div>
      <h1>Agregar colaborador</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Nombre del colaborador"
          name="nombre"
          id="nombre"
          value={formulario.nombre}
          onChange={handleOnChange}
        />
        <input
          placeholder="Email del colaborador"
          name="correo"
          id="correo"
          value={formulario.correo}
          onChange={handleOnChange}
        />
        <input
          placeholder="Edad del colaborador"
          name="edad"
          id="edad"
          value={formulario.edad}
          onChange={handleOnChange}
        />
        <input
          placeholder="Cargo del colaborador"
          name="cargo"
          id="cargo"
          value={formulario.cargo}
          onChange={handleOnChange}
        />
        <input
          placeholder="Teléfono del colaborador"
          name="telefono"
          id="telefono"
          value={formulario.telefono}
          onChange={handleOnChange}
        />
        <button>Agregar colaborador</button>
      </form>
    </div>
  );
};
