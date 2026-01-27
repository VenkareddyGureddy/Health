'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const partners = [
  {
    id: 1,
    name: 'Shree Saibaba Sanathan Trust',
    location: 'Shirdi',
    description: 'Cancer Awareness Trust',
    initials: 'SS',
  },
  {
    id: 2,
    name: 'South Asian Heart Center',
    description: 'Heart Health Event',
    initials: 'SH',
  },
  {
    id: 3,
    name: 'Global Health Initiative',
    description: 'Health Partners',
    initials: 'GH',
  },
  {
    id: 4,
    name: 'Medical Excellence Alliance',
    description: 'Healthcare Partners',
    initials: 'ME',
  },
  {
    id: 5,
    name: 'International Care Network',
    description: 'Global Healthcare',
    initials: 'IC',
  },
]

export default function PartnersScrollbar() {
  const scrollContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainer.current
    if (!container) return

    // Auto-scroll animation
    let scrollPos = 0
    const scroll = () => {
      scrollPos += 1
      if (container.scrollHeight > container.clientHeight) {
        if (scrollPos >= container.scrollHeight - container.clientHeight) {
          scrollPos = 0
        }
        container.scrollTop = scrollPos
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen flex flex-col sticky top-0">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 text-center">
        <h3 className="font-bold text-sm text-gray-800">Event</h3>
        <p className="text-xs text-gray-600">Partners/</p>
        <p className="text-xs text-gray-600">Sponsors</p>
      </div>

      {/* Scrollable Partners */}
      <div
        ref={scrollContainer}
        className="flex-1 overflow-y-auto space-y-4 p-3"
      >
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex flex-col items-center gap-2 pb-4 border-b border-gray-200 last:border-b-0"
          >
            {/* Logo Placeholder */}
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">{partner.initials}</span>
            </div>

            {/* Partner Info */}
            <div className="text-center text-xs">
              <p className="font-semibold text-gray-800 line-clamp-2">
                {partner.name}
              </p>
              {partner.location && (
                <p className="text-gray-500 text-xs">{partner.location}</p>
              )}
              <p className="text-gray-600 text-xs mt-1">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
