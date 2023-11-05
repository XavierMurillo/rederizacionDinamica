import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Listado } from "./components/Listado";
import { Formulario } from "./components/Formulario";
import { Buscador } from "./components/Buscador";
import { Alert } from "./components/Alert";
import { BaseColaboradores } from "./js/BaseColaboradores";
function App() {
  return (
    <div className="App">
      <Listado colaboradores={BaseColaboradores} />
      <Formulario />
      <Buscador />
      <Alert />
    </div>
  );
}

export default App;
