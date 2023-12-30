import { Header } from './Header/header'

interface Ilayout {
  children: any
}

export const Layout: React.FC<Ilayout> = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
