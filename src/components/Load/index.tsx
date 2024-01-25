import { Loader } from 'lucide-react'

export function Load() {
  return (
    <div className="flex flex-col min-h-[200px] mt-6 justify-center items-center ">
      <Loader size={70} className="animate-spin text-fd-gray-800" />
    </div>
  )
}
