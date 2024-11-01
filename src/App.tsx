import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import EstiloGlobal, { Container } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import EstoquePage from './pages/EstoquePage'
import NovoMaterialPage from './pages/NovoMaterialPage'
import EntradaOuSaidaPage from './pages/EntradaOuSaidaPage'
import NovaEntradaOuSaidaPage from './pages/NovaEntradaOuSaidaPage'
import EmFaltaPage from './pages/EmFaltaPage'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/estoque',
    element: <EstoquePage />
  },
  {
    path: '/novomaterial',
    element: <NovoMaterialPage />
  },
  {
    path: '/entradasaida',
    element: <EntradaOuSaidaPage />
  },
  {
    path: '/novaentradasaida',
    element: <NovaEntradaOuSaidaPage />
  },
  {
    path: '/emfalta',
    element: <EmFaltaPage />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
