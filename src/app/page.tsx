"use client"
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { StackList } from '@/components/Stack/StackList'
import { Container } from '@/styles/global'
import Image from 'next/image'

export default function Home() {
  return (<>
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
