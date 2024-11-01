import Menu from '../../components/Menu'
import UserTag from '../../components/UserTag'
import { Container } from './styles'

const Sidebar = () => {
  return (
    <Container>
      <UserTag />
      <Menu />
    </Container>
  )
}

export default Sidebar
