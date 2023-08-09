'use client'
import { useState } from 'react'
import styled from 'styled-components';
import { MemoryIcon, MenuIcon } from '@/components/svg/Icons';
import { routerList } from '@/services/Menu';
import Link from 'next/link';
import { theme } from '@/theme/theme';


interface HeaderProps{
  menuActive?:string
}

const Header = ({ menuActive = '' } : HeaderProps) => {
  const [active, setActive] = useState(false)

  const handleMenuMoble = () => setActive(!active)

  return <>
    <BoxHeader>
      <h1 className='logo'><MemoryIcon /> JVD </h1>

      <MenuPerfil>
        <Menu className={active ? 'active' : ''}>
          {routerList.map((i, idx) => {
            return <Link key={idx} href={i.path} className={menuActive === i.title ? 'active' : ''}>{i.title}</Link>
          })}
        </Menu>

        <MenuMobile onClick={() => handleMenuMoble()} ><MenuIcon /></MenuMobile>
        
      </MenuPerfil>
    </BoxHeader>
  </>
}

const BoxHeader = styled.div`
  display:flex;
  position: relative;
  justify-content: space-between;

  .logo{
    display:flex;
    align-items: center;
    gap:10px;
  }   
`

const MenuPerfil = styled.div`
  display:flex;
  padding:20px;
  align-items: center;
  gap: 20px;
  position:relative;
`

const MenuMobile = styled.div`
  display: none;
  padding:5px;
  width:45px;
  height:45px;

  svg{
    width:24px;
    height:24px;
  }

  @media (max-width:600px) {
    display:flex;  
  }
`  
const Menu = styled.div`
  display:flex;
  justify-content: center;
  gap:10;

  & > a{
    display:flex;
    padding:10px 15px;

    &.active{
      background:${theme.color.prim800}
    }
  }

  @media(max-width:600px){
    display:${props => props.className == 'active' ? "flex": 'none'};
    flex-direction: column;
    position: absolute;
    z-index: 10;
    top:30px;
    left:-100px;
      
    & > a{
      width:120px;
      background:${theme.color.prim800}
    }
  }
`
export { Header } 