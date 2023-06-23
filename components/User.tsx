'use client'

import type { SignOut, UserResource } from '@clerk/types'
import { useRouter } from 'next/navigation'
import { Popover, PopoverContent, PopoverTrigger } from './ui/Popover'

import Image from 'next/image'
import { useRef, useState } from 'react'

type UserProps = {
  isLoaded: boolean
  isSignedIn: boolean | undefined
  user: UserResource | null | undefined
  signOut: SignOut
}

const User: React.FC<UserProps> = ({ isLoaded, isSignedIn, user, signOut }) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const popover = useRef()

  const closePopoverWithAction = (action?: () => void) => () => {
    action?.()
    setOpen(false)
  }

  const actions = [
    {
      title: 'View Profile',
      action: closePopoverWithAction(() => router.push('/profile')),
    },
    {
      title: 'Settings',
      action: closePopoverWithAction(() => router.push('/settings')),
    },
    { title: 'Logout', action: closePopoverWithAction(() => signOut()) },
  ]

  return (
    isLoaded &&
    isSignedIn &&
    user && (
      <div className="group flex h-full cursor-pointer items-center px-2 text-OD_GRAY hover:bg-OD_BLACK-300">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <p className="group-hover:underline">{`@${user?.username}`}</p>
          </PopoverTrigger>
          <PopoverContent className="flex w-40 bg-OD_BLACK-300 text-OD_GRAY">
            <Image
              className="h-12 w-12"
              width={60}
              height={60}
              src={user.profileImageUrl}
              alt="profile_picture"
            />
            <div className="flex flex-1 flex-col text-xxs">
              {actions.map((action, key) => (
                <div
                  key={key}
                  className="flex h-full cursor-pointer items-center px-2 hover:bg-OD_GRAY-100 hover:underline"
                  onClick={action.action}>
                  <p>{action.title}</p>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    )
  )
}

export default User
