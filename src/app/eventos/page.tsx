"use client"
import React from 'react'
import { ListaEventos } from '@/services/Evento'
import moment from 'moment';
import Link from 'next/link';
import { CasalIcon, UsersIcon } from '@/components/svg/Icons';
import { evento_dias_restantes } from './[slug]/page';

export default function EventoList() {

  const listaOrd = ListaEventos.sort((a, b) => {
    if(a.date > b.date){
      return 1
    }
    if(a.date < b.date){
      return -1
    }
    return 0
  })

  return (<div className='flex flex-wrap p-[20px] gap-10 justify-center'>
    {listaOrd?.map(i => <Link 
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
  </div>)
}
