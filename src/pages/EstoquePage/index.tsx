import EstoqueList from '../../containers/EstoqueList'
import Sidebar from '../../containers/Sidebar'
import { GridContainer, GridContent } from '../../styles'

const EstoquePage = () => {
  return (
    <GridContainer>
      <Sidebar />
      <GridContent>
        <EstoqueList />
      </GridContent>
    </GridContainer>
  )
}

export default EstoquePage
