import { DateToday, Titulo } from '../../styles'
import {
  Cabecalho,
  Container,
  ContainerFiltrar,
  ContainerFiltro,
  ContainerTitulo,
  FiltrarButton,
  FiltrarTitulo,
  InputFiltro,
  LabelFiltro
} from './styles'

const EstoqueList = () => {
  return (
    <Container>
      <Cabecalho>
        <ContainerTitulo>
          <Titulo>Estoque</Titulo>
          <DateToday>1 SET, 2024</DateToday>
        </ContainerTitulo>
        <ContainerFiltro>
          <InputFiltro type="text" name="filtro" id="filtro" /> <br />
          <LabelFiltro htmlFor="filtro">Pesquisar Material</LabelFiltro>
        </ContainerFiltro>
      </Cabecalho>
      <ContainerFiltrar>
        <FiltrarTitulo>Filtrar</FiltrarTitulo>
        <FiltrarButton type="button">...</FiltrarButton>
      </ContainerFiltrar>
    </Container>
  )
}

export default EstoqueList
