"use client"
import { gql } from 'graphql-request'
import graphQLClient from './config'

export interface EventoItemProps {
  id: string,
  data: string,
  titulo: string,
  slug: string,
  local: string,
  isCasal: boolean,
  img: {
    url: string,
  }
}
export interface EventoListProps {
  eventos: EventoItemProps[]
}
export interface EventoDetalheProps {
  evento: EventoItemProps
}


export const getEventoLista = async () => {
  const query = gql`query MyQuery {
    eventos {
      id
      data
      titulo
      slug
      local
      isCasal
      img {
        url
      }
    }
  }`

  const resp : EventoListProps = await graphQLClient.request(query)
  return resp
}


export const getEvento = async ( slug : string ) => {
  const query = gql`
  query Evento {
    evento(where: { slug: "${slug}" }){
       id
      data
      titulo
      slug
      local
      isCasal
      img {
        url
      }
    }
  }`

  const resp : EventoDetalheProps = await graphQLClient.request(query)
  return resp
}


export interface EventoProps {
  date:string,
  title: string,
  slug: string,
  local: string,
  img?: string,
  isCasal?: boolean
}
export const ListaEventos: EventoProps[] = [
  { 
    date: "2023-09-17", 
    title: "CHURRASCADA GAÚCHA",
    slug: 'churrascada-gaucha',
    local: 'STEFFEN CENTRO DE EVENTOS',
    img: "https://www.steffencentrodeeventos.com.br/wp-content/uploads/2023/06/banner-site-3.png",
    isCasal: false,
  },
  {
    date: "2023-11-02",
    title: "COROA VERMELHA", 
    slug: 'coroa-vermelha',
    local: 'Porto seguro - BA',
    img: "/coroa.png",
    isCasal: false,
  },
  { 
    date: "2023-08-25",
    title: "SESC WINE FESTIVAL", 
    slug: 'sesc-wine',
    local: 'Domingo Martins - Pedra Azul',
    img: "",
    isCasal: true,
  },
  {
    date: "2024-04-05",
    title: "EXCURSÃO BÚZIOS", 
    slug: 'buzios',
    local: 'Búzios - RJ',
    img: "",
    isCasal: true,
  },
  {
    date: "2023-10-14",
    title: "ENCONTRO DOS MURUCI", 
    slug: 'encontro-dos-murucis',
    local: 'Guaçuí - ES',
    img: "",
    isCasal: true,
  }
]