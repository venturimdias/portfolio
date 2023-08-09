'use client'
import styled from "styled-components"
import { Container } from "@/styles/global"
import { theme } from "@/theme/theme"


const Footer = () => {

  return <BoxFooter>
    <Container className="py-[40px]">
      <h6>Contato</h6>
      <a href="https://github.com/venturimdias" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/venturimdias/" target="_blank" rel="noreferrer">Linkedin</a>
      <a href="mailto:venturim.dias@gmail.com" target="_blank" rel="noreferrer">Email</a>
    </Container>
  </BoxFooter>
}

const BoxFooter = styled.footer`
  & > div{
    display:flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
  
  h6{
    font-size:1.2rem;
    color:${theme.color.prim800};
    text-transform: uppercase;
    padding:0 0 20px;
    max-width: 350px;
    width:100%;

    &:before{
      content: '';
      display:block;
      width:100%;
      height: 1px;
      background:${theme.color.prim800};
      margin-bottom:2px;
    }
  }

  a{
    display:inline-flex;
    text-decoration: underline;
  }

`
export { Footer }