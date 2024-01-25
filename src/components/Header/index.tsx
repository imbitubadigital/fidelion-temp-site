'use client'

import { useMenuStore } from '@/store/menu'
import { TransparentScreen } from '../TransparentScreen'
import { MenuWrapper } from '../MenuWrapper '
import { usePathname } from 'next/navigation'
import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const Logo = dynamic(() => import('../Logo'), { ssr: false })
const Menu = dynamic(() => import('../Menu'), { ssr: false })
const GroupActions = dynamic(() => import('../GroupActions'), { ssr: false })
const Mobile = dynamic(() => import('../Mobile'), { ssr: false })

export function Header() {
  const settingToggleStore = useMenuStore(
    (store) => store.actions.settingToggleStore,
  )
  const settingCloseMenuStore = useMenuStore(
    (store) => store.actions.settingCloseMenuStore,
  )

  const isDesktop = useMediaQuery({ minWidth: 1280 })

  const pathname = usePathname()

  function getType() {
    if (!isDesktop) {
      return 'dark'
    } else {
      return pathname !== '/' ? 'light' : 'dark'
    }
  }

  const type = getType()

  const showMenu = useMenuStore((store) => store.state.showMenu)

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex justify-between items-start gap-4 xl:items-center"
    >
      <div className="flex justify-between items-start gap-8 w-full flex-col xl:flex xl:flex-row xl:items-center xl:gap-4   ">
        <Logo type={type} />
        <TransparentScreen isOpen={showMenu} onClose={settingCloseMenuStore} />
        <MenuWrapper isOpen={showMenu}>
          <Menu type={type} />
          <GroupActions type={type} />
        </MenuWrapper>
      </div>
      <Mobile
        typeMobile={type}
        isOpen={showMenu}
        color={type === 'light' ? 'transparent' : 'redLight'}
        onClick={() => settingToggleStore()}
      />
    </motion.header>
  )
}
