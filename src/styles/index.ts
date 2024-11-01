import styled, { createGlobalStyle } from 'styled-components'

interface BotoesProps {
  color?: string
  marginTop?: string
}

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
  grid-template-columns: 360px auto;
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: 710px 350px;
  background-color: #ffffff;
  border-radius: 30px;
  margin: 20px 20px 20px 0;
`

export const Titulo = styled.h1`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 40px;
  color: ${(props) => props.color || '#262A41'};
`

export const LineH = styled.hr`
  width: 500px;
  height: 1px;
  color: #dedede;
  margin: 64px;
`

export const AllInput = styled.input`
  background-color: #d9d9d9;
  padding: 4px 0;
  border-radius: 8px;
  border-color: #000000;
  border-style: solid;
  border-width: 1px;
  font-size: 20px;
  letter-spacing: 0.34px;
  line-height: medium;
  text-align: center;
  color: #273240;
`

export const Botoes = styled.button<BotoesProps>`
  background-color: ${(props) => props.color || '#64C081'};
  margin-top: ${(props) => props.marginTop || '0px'};
  width: 200px;
  height: 45px;
  border-radius: 8px;
  border: none;
  font-size: 13px;
  letter-spacing: 1.5px;
  text-align: center;
  font-weight: bold;
  color: #ffffff;
`

export const DateToday = styled.span`
  display: inline-block;
  font-size: 16px;
  letter-spacing: 0.34px;
  color: #101010;
  opacity: 50%;
  margin-top: 10px;
`

export default EstiloGlobal
