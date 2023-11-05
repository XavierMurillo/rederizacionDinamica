import { Alert as Alerta } from "react-bootstrap";
export const Alert = ({ alertaMensaje, alertaColor }) => {
  return <Alerta variant={alertaColor}>{alertaMensaje}</Alerta>;
};
