export const Buscador = ({ setColaboradores, listado }) => {
  const buscarColaborador = (e) => {
    const colaboradoresFilter = listado.filter(
      (colaborador) =>
        colaborador.nombre.includes(e.target.value) ||
        colaborador.correo.includes(e.target.value) ||
        colaborador.edad.includes(e.target.value) ||
        colaborador.cargo.includes(e.target.value) ||
        colaborador.telefono.includes(e.target.value)
    );
    console.log(colaboradoresFilter);
    setColaboradores(colaboradoresFilter);
  };
  return (
    <input
      className="buscador"
      placeholder="Busca un colaborador"
      onChange={(e) => buscarColaborador(e)}
    ></input>
  );
};
