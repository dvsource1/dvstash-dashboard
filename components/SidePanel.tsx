'use client'

import { Transition } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

type SidePanelProps = {}

const SidePanel: React.FC<SidePanelProps> = ({}) => {
  const [showSidePanel, setShowSidePanel] = useState(false)

  return (
    <div className="relative z-10 hidden bg-transparent sm:flex">
      <Transition
        show={showSidePanel}
        enterFrom="-ml-72"
        enterTo="ml-0"
        leaveFrom="ml-0"
        leaveTo="-ml-72"
        enter="duration-300"
        leave="duration-200">
        <div className="h-full w-72 bg-OD_BLACK-300">...</div>
      </Transition>
      <div className="relative h-full bg-transparent">
        <div
          onClick={() => setShowSidePanel(!showSidePanel)}
          className="absolute bottom-0 left-0 flex h-12 w-4 cursor-pointer items-center justify-center  border-l border-OD_BLACK bg-OD_BLACK-300 text-OD_GRAY">
          {showSidePanel ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </div>
      </div>
    </div>
  )
}

export default SidePanel
