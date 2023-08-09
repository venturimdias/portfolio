"use client"
export interface EventoProps {
  date:string,
  title: string,
  slug: string,
  local: string,
  img?: string
}
export const ListaEventos: EventoProps[] = [
  { 
    date: "2023-09-17", 
    title: "CHURRASCADA GAÚCHA",
    slug: 'churrascada-gaucha',
    local: 'STEFFEN CENTRO DE EVENTOS',
    img: "https://www.steffencentrodeeventos.com.br/wp-content/uploads/2023/06/banner-site-3.png" 
  },
  {
    date: "2023-11-02",
    title: "COROA VERMELHA", 
    slug: 'coroa-vermelha',
    local: 'Porto seguro - Bahia',
    img: "/coroa.png"
  },
  { 
    date: "2023-08-25",
    title: "SESC WINE FESTIVAL", 
    slug: 'sesc-wine',
    local: 'Domingo Martins - Pedra Azul',
    img: ""
  },
  {
    date: "2024-04-05",
    title: "EXCURSÃO BÚZIOS", 
    slug: 'buzios',
    local: 'Búzios - RJ',
    img: ""
  }
]