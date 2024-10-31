import { useNavigate } from 'react-router-dom'
import { Botoes } from '../../styles'
import { LoginForm, LoginInput } from './styles'

const Login = () => {
  const navigate = useNavigate()

  return (
    <LoginForm onSubmit={() => navigate('/estoque')}>
      <LoginInput type="text" name="user" placeholder="Usuário" />
      <LoginInput type="password" name="pass" placeholder="Senha" />
      <Botoes marginTop="43px" type="submit">
        Entrar
      </Botoes>
    </LoginForm>
  )
}

export default Login
