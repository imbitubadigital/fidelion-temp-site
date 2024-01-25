'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
const slides = [
  {
    id: '1',
    url: '/slide1.png',
    title: 'Sobre o Fidelion',
  },
  {
    id: '2',
    url: '/slide2.png',
    title: 'Crie promoções de forma rápida e simples',
  },
  {
    id: '3',
    url: '/slide3.png',
    title: 'Promoções perto de você',
  },
  {
    id: '4',
    url: '/slide4.png',
    title: 'Gerenciar seu negócio nunca foi tão fácil',
  },
]
export function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex])

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [nextSlide])
  return (
    <div className="flex flex-col justify-start">
      <div className="grid grid-cols-4 gap-8 bg-fd-gray-200 h-2 rounded-md mb-2 max-md:gap-4 ">
        {slides.map((item) => (
          <span
            data-active={Number(item.id) === currentIndex + 1}
            key={item.id}
            onClick={() => goToSlide(Number(item.id) - 1)}
            className="block bg-fd-gray-250 rounded-md  data-[active=true]:bg-fd-blue-500 cursor-pointer"
          />
        ))}
      </div>
      <div className="relative group">
        <div
          className="w-full h-full  bg-center bg-contain duration-500 rounded-md shadow-md"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        >
          <Image
            alt="Imagem ilustrativa de como o Fidelion"
            src="/slide1.png"
            width={1200}
            height={800}
            className="opacity-0"
          />
        </div>
        <div className="hidden group-hover:block absolute z-10 top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
          <ChevronLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
          <ChevronRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  )
}
