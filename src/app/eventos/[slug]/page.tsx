"use client"
import moment from 'moment';

import { EventoProps, ListaEventos } from "@/services/Evento"
import Image from "next/image"
import { Metadata } from 'next';

moment.locale('pt-br')

interface pageProps{
  params: { slug: string }
}

export default async function Page({ params } : pageProps){
  
  const eventos : EventoProps[] = ListaEventos.filter(i => i.slug == params.slug)
  const evento = eventos[0]
  
  const evento_dias_restantes = () => {
    const data1 = moment(new Date()) //.format('DD/MM/YYYY')
    const data2 = moment(evento?.date) //.format('DD/MM/YYYY')
    const dias =  data2.diff(data1, 'days');
    // const horas = data2.diff(data1, 'hours');
    // console.log(horas / 24, horas % 24 )
    return dias
  }

  return <div className='text-center min-h-[100vh] py-5 flex flex-col align-middle justify-center'>
    <div>
      <h1 className="justify-center">{evento?.title}</h1>
      <div>Local: <b className='text-amber-400'> {evento?.local}</b></div>
      <div>Data do evento:  <b> {moment(evento?.date).format('DD/MM/YYYY')}</b></div>
      <h2> Falta <b className='text-amber-400'>{evento_dias_restantes()}</b> dias </h2>
      {evento?.img && <Image className='object-cover w-[400px] h-[400px] md:w-full' src={evento?.img} width={800} height={400} alt="imagem evento" />}
    </div>
  </div>
}