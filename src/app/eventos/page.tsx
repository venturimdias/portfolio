"use client"
import React from 'react'
import { ListaEventos } from '@/services/Evento'
import moment from 'moment';
import Link from 'next/link';

export default function EventoList() {

  return (<div className='flex flex-wrap p-[20px] gap-10 justify-center'>
    {ListaEventos?.map(i => <Link 
      href={"/eventos/"+ i.slug} 
      className='w-[300px] border-[1px] border-white border-solid p-5'>
      
      <h4 className="leading-[120%] mb-5">{i.title}</h4>
      <b className='text-amber-400'>{i.local}</b>
      <p>{moment(i.date).format('DD/MM/YYYY')}</p>
      
    </Link>)}
  </div>)
}
