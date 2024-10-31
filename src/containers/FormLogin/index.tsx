import Login from '../../components/Login'
import { Titulo, LineH } from '../../styles'
import { Container } from './styles'

const FormLogin = () => {
  return (
    <Container>
      <Titulo color="#FFFFFF">Login Usuário</Titulo>
      <LineH />
      <Login />
    </Container>
  )
}

export default FormLogin
