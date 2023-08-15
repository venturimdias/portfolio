'use client'
import React, { useEffect, useState } from "react";
import { EventoDetalheProps, EventoItemProps, EventoListProps, EventoProps, ListaEventos, getEvento } from "@/services/Evento"
import Image from "next/image"

import moment from 'moment';
import { evento_dias_restantes } from "@/components/Utils";
import LoadingPage from "@/components/LoadingPage";

moment.locale('pt-br')

interface pageProps{
  params: { slug: string }
}

export default function Page({ params } : pageProps){
  const [load, setLoad] = useState<boolean>(true)
  const [eventoDetalhe, setEventoDetalhe] = useState<EventoItemProps>()

  const eventos : EventoProps[] = ListaEventos.filter(i => i.slug == params.slug)
  const evento = eventos[0]

  const init = async () => {
    const resp : EventoDetalheProps = await getEvento( params.slug )
      .finally(() => setLoad(false))
      setEventoDetalhe(resp.evento)
  }

  useEffect(() => {
    init()
  },[])

  return load ? <LoadingPage /> 
  : (<>
      {eventoDetalhe ? 
      <div className='text-center min-h-[100vh] py-5 flex flex-col align-middle justify-center'>
        <div>
          <h1 className="justify-center">{eventoDetalhe?.titulo}</h1>
          <div>Local: <b className='text-amber-400'> {eventoDetalhe?.local}</b></div>
          <div>Data do evento:  <b> {moment(eventoDetalhe?.data).format('DD/MM/YYYY')}</b></div>
          <h2> Falta 
            <b className='text-amber-400'> {evento_dias_restantes(eventoDetalhe?.data || "")}</b> 
            {evento_dias_restantes(eventoDetalhe?.data || "") > 1 ? " dias" : " dia" } 
          </h2>
          {eventoDetalhe?.img?.url && <img className='object-cover max-w-[400px] w-full h-auto md:max-w-[1200px]' src={eventoDetalhe.img.url} width={800} height={400} alt="imagem evento" />}
        </div>
      </div>
      :
      <div className='text-center min-h-[100vh] py-5 flex flex-col align-middle justify-center'>
        <div>
          <h1 className="justify-center">{evento?.title}</h1>
          <div>Local: <b className='text-amber-400'> {evento?.local}</b></div>
          <div>Data do evento:  <b> {moment(evento?.date).format('DD/MM/YYYY')}</b></div>
          <h2> Falta 
            <b className='text-amber-400'> {evento_dias_restantes(evento?.date)}</b> 
            {evento_dias_restantes(evento?.date) > 1 ? " dias" : " dia" } 
          </h2>
          {evento?.img && <Image className='object-cover max-w-[400px] w-full h-auto md:max-w-[1200px] ' src={evento?.img} width={800} height={400} alt="imagem evento" />}
        </div>
      </div>
      }
  </>
  )
}