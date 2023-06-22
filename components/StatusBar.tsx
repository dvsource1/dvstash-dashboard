'use client'

import { PlusIcon } from '@heroicons/react/24/outline'

type StatusBarProps = {}

const StatusBar: React.FC<StatusBarProps> = ({}) => {
  const actions = [{ title: 'Logout' }, { title: 'Export' }]

  return (
    <div className="flex h-4 w-full justify-between border-t border-OD_GRAY-600 bg-OD_BLACK text-xxs">
      <div className="flex items-center px-2 text-OD_GRAY">
        <p>&copy; Copyright 2023 | DVSTASH</p>
      </div>
      <div className="flex flex-row-reverse gap-2 text-OD_GRAY-600">
        {actions.map((action, i) => (
          <div
            className="group flex cursor-pointer items-center gap-1 border-l border-OD_GRAY-600 pl-2 pr-4"
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
