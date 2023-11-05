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
    <div className="App container-fluid">
      <h1 className="d-flex">Lista de colaboradores</h1>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="lista-container">
            <Buscador setColaboradores={setColaboradores} listado={listado} />
            <Listado colaboradores={colaboradores} />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="d-flex justify-content-center mx-auto">
            <Formulario
              listado={listado}
              setListado={setListado}
              setColaboradores={setColaboradores}
            />
          </div>
        </div>
      </div>
      <Alert />
    </div>
  );
}

export default App;
