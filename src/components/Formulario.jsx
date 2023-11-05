import { useState } from "react";

export const Formulario = ({
  listado,
  setListado,
  setColaboradores,
  setAlertaMensaje,
  setAlertaColor,
}) => {
  const [id, setId] = useState(4);
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
    let flag_list = [];
    values.forEach((value) => {
      if (value == "") {
        flag = 1;
      } else {
        flag = 0;
      }
      flag_list.push(flag);
    });
    flag_list.shift();
    if (flag_list.includes(1)) {
      setAlertaMensaje("Completa todos los campos!");
      setAlertaColor("danger");
    } else {
      setId(id + 1);
      setListado([...listado, { ...formulario, id: id.toString() }]);
      setColaboradores([...listado, formulario]);
      setAlertaMensaje("Colaborador Agregado!");
      setAlertaColor("success");
    }
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    const nombreinput = event.target.name;
    const valorinput = event.target.value;

    setFormulario({
      ...formulario,
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
        <button className="btn btn-primary">Agregar colaborador</button>
      </form>
    </div>
  );
};
