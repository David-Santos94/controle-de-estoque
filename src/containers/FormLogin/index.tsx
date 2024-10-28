import { Container } from './styles'

const FormLogin = () => {
  return (
    <Container>
      <h1>Login Usuário</h1>
      <form>
        <input type="text" name="user" placeholder="Usuário" />
        <input type="password" name="pass" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  )
}

export default FormLogin
