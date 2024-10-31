import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import EstiloGlobal, { Container } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Estoque from './pages/Estoque'
import NovoMaterial from './pages/NovoMaterial'
import EntradaOuSaida from './pages/EntradaOuSaida'
import NovaEntradaOuSaida from './pages/NovaEntradaOuSaida'
import EmFalta from './pages/EmFalta'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/estoque',
    element: <Estoque />
  },
  {
    path: '/novomaterial',
    element: <NovoMaterial />
  },
  {
    path: '/entradasaida',
    element: <EntradaOuSaida />
  },
  {
    path: '/novaentradasaida',
    element: <NovaEntradaOuSaida />
  },
  {
    path: '/emfalta',
    element: <EmFalta />
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
