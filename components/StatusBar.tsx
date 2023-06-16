'use client'

import { PlusIcon } from '@heroicons/react/24/outline'

type StatusBarProps = {}

const StatusBar: React.FC<StatusBarProps> = ({}) => {
  const actions = [
    { title: 'Logout' },
    { title: 'Export' },
    { title: 'Hi Mom!' },
  ]

  return (
    <div className="flex h-4 w-full justify-between border-t border-od_black__gray_40 bg-od_black text-xxs">
      <div className="flex items-center px-2 text-od_gray">
        <p>&copy; Copyright 2023 | DVSTASH</p>
      </div>
      <div className="flex flex-row-reverse gap-2 text-od_black__gray_40">
        {actions.map((action, i) => (
          <div
            className="group flex cursor-pointer items-center gap-1 border-l border-od_black__gray_40 pl-2 pr-4"
            key={i}>
            <PlusIcon className="h-2 w-2" />
            <p className="group-hover:underline">{action.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatusBar
