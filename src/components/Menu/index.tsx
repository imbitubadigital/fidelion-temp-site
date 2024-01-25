import { useMenuStore } from '@/store/menu'
import { LinkText } from '../LinkText'
import { usePathname } from 'next/navigation'

type MenuProps = {
  type: 'light' | 'dark'
}

export default function Menu({ type }: MenuProps) {
  const settingCloseMenuStore = useMenuStore(
    (store) => store.actions.settingCloseMenuStore,
  )
  const pathname = usePathname()

  function activeMenu(path: string): 'red' | 'white' | 'gray' {
    if (pathname === path) {
      return 'red'
    }
    return type !== 'light' ? 'white' : 'gray'
  }

  return (
    <nav className=" flex items-start gap-3 flex-1 flex-col xl:flex xl:flex-row xl:w-full xl:justify-center xl:gap-11 ">
      <LinkText
        href={'/'}
        onClick={settingCloseMenuStore}
        type="menu"
        color={activeMenu('/')}
      >
        Home
      </LinkText>
      <LinkText
        href={'/empresa'}
        onClick={settingCloseMenuStore}
        type="menu"
        color={activeMenu('/empresa')}
      >
        Para empresas
      </LinkText>
      <LinkText
        href={'/cliente'}
        onClick={settingCloseMenuStore}
        type="menu"
        color={activeMenu('/cliente')}
      >
        Para clientes
      </LinkText>
      <LinkText
        href={'/central-de-ajuda/empresas'}
        onClick={settingCloseMenuStore}
        type="menu"
        color={activeMenu('/central-de-ajuda/empresas')}
      >
        Central de ajuda
      </LinkText>
    </nav>
  )
}
