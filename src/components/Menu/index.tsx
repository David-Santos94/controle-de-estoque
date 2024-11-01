import {
  BlocoConfiguração,
  BlocoNavegação,
  Container,
  ItemMenu
} from './styles'

const Menu = () => {
  return (
    <Container>
      <BlocoNavegação>
        <ItemMenu>
          <a href="#">Estoque</a>
        </ItemMenu>
        <ItemMenu>
          <a href="#">Entradas/Saídas</a>
        </ItemMenu>
        <ItemMenu>
          <a href="#">Em Falta</a>
        </ItemMenu>
      </BlocoNavegação>
      <BlocoConfiguração>
        <ItemMenu>
          <a href="#">Usuários</a>
        </ItemMenu>
        <ItemMenu>
          <a href="#">Configurações</a>
        </ItemMenu>
      </BlocoConfiguração>
    </Container>
  )
}

export default Menu
