import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Listado } from "./components/Listado";
import { Formulario } from "./components/Formulario";
import { Buscador } from "./components/Buscador";
import { Alert } from "./components/Alert";
import { BaseColaboradores } from "./js/BaseColaboradores";
import { useState } from "react";
function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [listado, setListado] = useState(BaseColaboradores);
  return (
    <div className="App">
      <Buscador setColaboradores={setColaboradores} listado={listado} />
      <Listado colaboradores={colaboradores} />
      <Formulario
        listado={listado}
        setListado={setListado}
        setColaboradores={setColaboradores}
      />
      <Alert />
    </div>
  );
}

export default App;
