'use client'

import { useClerk, useUser } from '@clerk/nextjs'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import User from './User'

type StatusBarProps = {}

const StatusBar: React.FC<StatusBarProps> = ({}) => {
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const router = useRouter()

  const loggedInUserActions = [
    { title: 'Logout', action: () => signOut() },
    { title: 'Export', action: () => {} },
  ]

  const loggedOutUserActions = [
    { title: 'Login', action: () => router.push('/login') },
    { title: 'Register', action: () => router.push('/register') },
  ]

  return (
    <div
      className={`${
        isSignedIn ? 'bg-OD_RED-800' : 'bg-OD_BLACK'
      } flex h-4 justify-between border-t border-OD_GRAY-400 text-xxs`}>
      {isLoaded && isSignedIn && user ? (
        <User
          isLoaded={isLoaded}
          isSignedIn={isSignedIn}
          user={user}
          signOut={signOut}
        />
      ) : (
        <div className="flex items-center px-2 text-OD_GRAY">
          <p>&copy; Copyright 2023 | DVSTASH</p>
        </div>
      )}
      <div className="flex flex-1 flex-row-reverse gap-2 text-OD_GRAY-600">
        {(isLoaded && isSignedIn
          ? loggedInUserActions
          : loggedOutUserActions
        ).map((action, i) => (
          <div
            className="group flex cursor-pointer items-center gap-1 border-l border-OD_GRAY-400 pl-2 pr-4"
            key={i}
            onClick={action.action}>
            <PlusIcon className="h-2 w-2" />
            <p className="group-hover:underline">{action.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatusBar
