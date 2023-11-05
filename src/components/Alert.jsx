import Alert from "react-bootstrap/Alert";
export const Alerta = ({ alertaMensaje, alertaColor }) => {
  return <Alert variant={alertaColor}>{alertaMensaje}</Alert>;
};
