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
  const [alertaMensaje, setAlertaMensaje] = useState("");
  const [alertaColor, setAlertaColor] = useState("");
  return (
    <div className="App container-fluid">
      <h1 className="d-flex">Lista de colaboradores</h1>
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="lista-container">
            <Buscador setColaboradores={setColaboradores} listado={listado} />
            <Listado colaboradores={colaboradores} />
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="d-flex justify-content-center mx-auto">
            <Formulario
              listado={listado}
              setListado={setListado}
              setColaboradores={setColaboradores}
              setAlertaMensaje={setAlertaMensaje}
              setAlertaColor={setAlertaColor}
            />
          </div>
        </div>
      </div>
      <Alert alertaMensaje={alertaMensaje} alertaColor={alertaColor} />
    </div>
  );
}

export default App;
