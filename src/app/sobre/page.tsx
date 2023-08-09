"use client"
import styled from "styled-components"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Container } from "@/styles/global"
import { theme } from "@/theme/theme"

export default function Sobre(){
  return <> 
    <Header menuActive="sobre" />
    <Container>
      <h2>Sobre </h2>

      <h3>Jonathan Venturim Dias</h3>
      <Desc>
        Desenvolvedor Front-End | HTML | CSS | SASS | Styled-component | React.js | Next.js | Vue.js | Javascript
      </Desc>
      <p><small>Serra, Espírito Santo, Brasil </small></p>

      <p>
        Desenvolvedor Front-end há mais de 12 anos na empresa Aldabra (<a href="https://www.aldabra.com.br" target="_blank">www.aldabra.com.br</a>). 
      </p>

      <p>
        Trabalho atualmente com as seguintes ferramentas: 
        <strong> HTML, CSS, SCSS, Styled-component, Javascript, Jquery, VS Code, GraphQL, Mysql, React js, Next js, Vue js, Figma, Photoshop, Illustrator e Indesign.</strong> 
      </p>

      <p>Tenho conhecimento em: C#, PHP, Python, Node.js, Wordpress, CorelDraw, SQL Server.</p>

      <p>
        Inglês - Nível Intermediário/Avançado - Programa Insider (cursando) <br/>
        Inglês - Nível básico (2018)
      </p>

      <p>
        Alguns trabalhos realizados: Missbela, Videbula, Vigauto, Ivetro, Rede Marcela, Novo site da União Engenharia, Bueraux de Marketing, Dikma.  
        <a href="https://aldabra.com.br/clientes-e-projetos" target="_blank">Veja mais projetos</a>
      </p>

      <p>
        Extra:<br/>
      - Análise e desenvolvimento de um projeto para IE intercambio de gestão interna (IE control - PHP/MYSQL);<br/>
      - Curso online de Criação Publicitária para Web - 2011 (cursos.brunoavila.com.br);<br/>
      - Participei do 16º EDTED - RJ - Encontro de Design e Tecnologia Digital - 2011<br/>
      </p>
    </Container>
    <Footer />
  </>
}

const Desc = styled.div`
  color:${theme.color.prim800};
`