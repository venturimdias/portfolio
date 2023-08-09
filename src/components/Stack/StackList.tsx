'use client'
import styled from "styled-components"
import { Stack } from "./Stack"
import { stackObj } from "@/services/Stack"

const StackList = () => {
  return <>
    <br/>
      <h5>Stacks:</h5>
      <BoxStack>
        {stackObj.map((i, key) => {
          return <Stack key={key} titulo={i.titulo} num={i.num} color={i.color} />
        })}
      </BoxStack>
  </>
}


const BoxStack = styled.div`
  padding:20px 0 0;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap:30px 40px;

  @media(max-width:960px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media(max-width:768px){
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width:480px){
    grid-template-columns: 1fr;
  }
`
export { StackList }