import { ChevronRight } from 'lucide-react'

import { LinkButtonTarget } from '../LinkButtonTarget'
import { useMenuStore } from '@/store/menu'

type GroupActionsProps = {
  type: 'light' | 'dark'
}

export default function GroupActions({ type }: GroupActionsProps) {
  const settingCloseMenuStore = useMenuStore(
    (store) => store.actions.settingCloseMenuStore,
  )

  return (
    <div className="flex gap-4 flex-col items-center xl:flex xl:flex-row  ">
      <LinkButtonTarget
        href={process.env.NEXT_PUBLIC_LINK_GO_TO_COMPANY_DASHBOARD}
        onClick={settingCloseMenuStore}
        title="Dashboard"
        color={type !== 'light' ? 'transparent' : 'redLight'}
        size="sm"
        icon={<ChevronRight size={28} />}
      />
    </div>
  )
}
