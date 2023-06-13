'use client'

import { UserCircleIcon } from '@heroicons/react/24/outline'

type UserProps = {}

const User: React.FC<UserProps> = ({}) => {
  return (
    <div className="group flex h-12 w-12 cursor-pointer items-center justify-center">
      <UserCircleIcon className="h-6 w-6 text-od_gray group-hover:text-white" />
    </div>
  )
}

export default User
