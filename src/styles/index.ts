import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
export const Container = styled.div`
  background-color: #101010;
  border-radius: 30px;
  width: 100vw;
  height: 100vh;
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default EstiloGlobal
