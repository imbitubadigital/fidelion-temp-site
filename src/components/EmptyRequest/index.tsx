import { Frown } from 'lucide-react'

type EmptyRequestProps = {
  message: string
}
export function EmptyRequest({ message }: EmptyRequestProps) {
  return (
    <div className="flex items-center justify-center gap-5 min-h-[200px]">
      <Frown size={50} />
      <p className="text-lg">{message}</p>
    </div>
  )
}
