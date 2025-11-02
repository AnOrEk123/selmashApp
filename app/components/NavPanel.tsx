'use client'

import type { INavElement } from "@/shared/types/navElement.interface"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

interface Props {
  navElements: INavElement[]
}

export function NavPanel({ navElements }: Props) {
  const pathname = usePathname()

  return (
    <nav className="bg-red-700 text-white w-full flex justify-between items-center p-4 fixed z-50 top-0">
      <Image
        src="/img/selmashLogo.png"
        alt="Selmash Logo"
        width={40}
        height={40}
        className="object-contain"
      />

      <div className="flex gap-4">
        {navElements.map((navElement, index) => {
          const isActive = pathname === navElement.url
          return (
            <Link
              key={index}
              href={navElement.url}
              className={`transition px-3 py-1 rounded ${
                isActive
                  ? 'bg-white text-red-700 font-semibold'
                  : 'hover:underline'
              }`}
            >
              {navElement.text}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
