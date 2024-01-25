import { usePathname } from 'next/navigation'
import { LinkButtonTab } from '../LinkButtonTab'
import { Typography } from '../Typography'
type LinkTabProps = {
  id: string
  title: string
  url: string
}
type LinksTabProps = {
  title: string
  links: LinkTabProps[]
}

export function MenuTabs({ title, links }: LinksTabProps) {
  const pathname = usePathname()

  return (
    <div className="mb-10">
      <Typography color="red" className="font-semibold mb-2">
        {title}
      </Typography>
      <div className="flex gap-3">
        {links.map((item) => (
          <LinkButtonTab
            key={item.id}
            href={item.url}
            title={item.title}
            type={pathname === item.url ? 'active' : 'inactive'}
          />
        ))}
      </div>
    </div>
  )
}
