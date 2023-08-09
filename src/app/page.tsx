"use client"
import { Suspense, useEffect, useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { StackList } from '@/components/Stack/StackList'
import { Container } from '@/styles/global'
import Image from 'next/image'
import LoadingPage from '@/components/LoadingPage'

export default function Home() {
  const [load, setLoad] = useState('')
  
  useEffect(() => {
    setLoad('carregado')
  },[load])

  return (!load 
  ? <LoadingPage />
  : <>
    <Header menuActive='home'/>

    <Container>
      <main>
        <h2>Olá!</h2>
        <h3>Sou Jonathan Venturim Dias, desenvolvedor front-end </h3>

        <StackList />
      </main>
    </Container>

    <Footer />
  </>
  )
}
