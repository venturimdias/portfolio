"use client"
import React, { useEffect, useState } from 'react'
import { EventoItemProps, EventoListProps, ListaEventos, getEventoLista } from '@/services/Evento'
import moment from 'moment';
import Link from 'next/link';
import { CasalIcon, UsersIcon } from '@/components/svg/Icons';
import { evento_dias_restantes } from '@/components/Utils';
import LoadingPage from '@/components/LoadingPage';


export default function EventoList() {
  const [load, setLoad] = useState<boolean>(true)
  const [listaOrdAPI, setListaOrdAPI] = useState<EventoItemProps[]>()

  const init = async () => { 
    const resp : { eventos: any } = await getEventoLista().finally(() => setLoad(false))

    const lista = resp.eventos.sort((a: { data: number; }, b: { data: number; }) => {
      if(a.data > b.data){
        return 1
      }
      if(a.data < b.data){
        return -1
      }
      return 0
    })
    setListaOrdAPI(lista)
  }

  const listaOrd = ListaEventos.sort((a, b) => {
    if(a.date > b.date){
      return 1
    }
    if(a.date < b.date){
      return -1
    }
    return 0
  })

  useEffect(() => {
    init()
  },[])

  return load ? <LoadingPage /> : (<div className='flex flex-wrap p-[20px] gap-10 justify-center'>
    <React.StrictMode>

    {listaOrdAPI?.map((i, idx) => {
      return <Link 
      key={idx}
      href={"/eventos/"+ i.slug}
      className='w-[300px] border-[1px] border-white border-solid p-5 rounded-md'>
        <div className='w-24 h-24 mb-3'>
          {i.isCasal ? <CasalIcon /> : <UsersIcon />}
        </div>
        <h4 className="leading-[120%] mb-5 uppercase">{i.titulo}</h4>
        <b className='text-amber-400'>{i.local}</b>
        <p>{moment(i.data).format('DD/MM/YYYY')} | 
        Faltam: <b className='text-amber-400'> {evento_dias_restantes(i.data)}</b> 
        {evento_dias_restantes(i.data) > 1 ? " dias" : " dia" }
        </p>
      </Link>
    })}

    {listaOrd?.map((i, idx) => <Link 
      key={idx}
      href={"/eventos/"+ i.slug} 
      className='w-[300px] border-[1px] border-white border-solid p-5 rounded-md'>
      <div className='w-24 h-24 mb-3'>
        {i.isCasal ? <CasalIcon /> : <UsersIcon />}
      </div>
      <h4 className="leading-[120%] mb-5">{i.title}</h4>
      <b className='text-amber-400'>{i.local}</b>
      <p>{moment(i.date).format('DD/MM/YYYY')} | 
      Faltam: <b className='text-amber-400'> {evento_dias_restantes(i.date)}</b> 
      {evento_dias_restantes(i.date) > 1 ? " dias" : " dia" }
      </p>
    </Link>)}
    </React.StrictMode>
  </div>)
}
