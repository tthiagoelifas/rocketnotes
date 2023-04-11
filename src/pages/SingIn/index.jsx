import { Container } from "./styles";

import { Input } from "../../components/Input"
import { FiLogIn, FiMail, FiLock} from "react-icons/fi"

 
export function SingIn(){
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>
      </Form>

      <Input
        placeholder = "E-mail"
        type = "text"
        icon= { FiLogIn }
      />
    </Container>
  );
}