import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 510px;
  height: 768px;
`

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const ContainerTitulo = styled.div`
  text-align: start;
`

export const ContainerFiltro = styled.div`
  text-align: center;
`

export const InputFiltro = styled.input`
  width: 250px;
  height: 50px;
  border-radius: 12px;
  border-color: #d9d9d9;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  font-size: 25px;
`

export const LabelFiltro = styled.label`
  display: inline-block;
  font-size: 16px;
  letter-spacing: 0.34px;
  color: #101010;
  opacity: 50%;
  margin-top: 10px;
`
export const ContainerFiltrar = styled(Cabecalho)`
  width: 90%;
`

export const FiltrarTitulo = styled.h4`
  font-size: 18px;
  letter-spacing: 0.3px;
  line-height: 30px;
  font-style: italic;
  color: #262a41;
`

export const FiltrarButton = styled.button`
  width: 25px;
  height: 30px;
  font-size: 20px;
  border: none;
  color: #d8d8d8;
  background-color: transparent;
  cursor: pointer;
`
