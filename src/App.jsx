import './App.css'
import {Listado} from './components/Listado';
import {Formulario} from './components/Formulario';
import {Buscador} from './components/Buscador';
import {Alert} from './components/Alert';
function App() {

  return (
    <div className="App">
      <Listado />
      <Formulario />
      <Buscador />
      <Alert />
    </div>
  )
}

export default App
