import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color:#f5d0fe;
  height:100vh;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
 `
export const CardContainer = styled.div`
   display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-color: #ffffff;
  padding: 30px;
  height: 200px;
  border-radius: 10px;
 `
export const Heading = styled.h1`
  font-size: 20px;
  font-family:"Roboto";
  `
export const InputContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
`
export const Paragraph = styled.p`
  font-family:"Roboto";
  font-size:15px;
  padding-right: 10px
  `
export const Input = styled.button`
  height: 30px;
  width: 55px;
  cursor:pointer;
  background-color: #d946ef;
  color: white;
  border-width: 0px;
  font-family:"Roboto";
  font-size: 13px;
  `