import Home from "@/app/page"
import { PgError } from "@/app/pgError"
import Portfolio from "@/app/portfolio/page"
import Sobre from "@/app/sobre/page"


interface RouterProps{
  title: string,
  path: string,
  element: any,
  errorElement?: any
}

export const routerList : RouterProps[] = [
  { title:"home", path: "/", element: <Home />, errorElement: <PgError /> },
  { title:"sobre", path: "/sobre", element: <Sobre /> },
  // { title:"news", path: "/news", element: <News /> },
  { title:"portfólio", path: "/portfolio", element: <Portfolio /> },
]