'use client'

import { useClerk, useUser } from '@clerk/nextjs'
import { Popover } from '@headlessui/react'
import {
  ArrowDownOnSquareIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import MenuItem from './MenuItem'

type UserProps = {}

const User: React.FC<UserProps> = ({}) => {
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const router = useRouter()

  return (
    <Popover className="relative flex h-12 w-12 items-center justify-center">
      <Popover.Button className="group cursor-pointer">
        {isLoaded && isSignedIn ? (
          <Image
            className="h-8 w-8 rounded-full"
            width={60}
            height={60}
            src={user.profileImageUrl}
            alt="profile_picture"
          />
        ) : (
          <UserCircleIcon className="h-8 w-8 text-od_gray group-hover:text-white" />
        )}
      </Popover.Button>
      <Popover.Panel className="max-w absolute bottom-0 left-12 z-30 flex w-52 min-w-max max-w-xs flex-col bg-od_black__gray_5">
        {/* Profile Header */}
        {isSignedIn && isLoaded && (
          <div
            className="group flex w-full cursor-pointer gap-2 p-2"
            onClick={() => router.push('/profile')}>
            <div className="flex w-12 items-center justify-center">
              <Image
                className="h-10 w-10 rounded-full"
                width={100}
                height={100}
                src={user.profileImageUrl}
                alt="profile_picture"
              />
            </div>
            <div className="flex-1 text-od_gray">
              <p className="group-hover:underline">{`${user.firstName} ${user.lastName}`}</p>
              <p className="text-sm text-od_gray/80 group-hover:underline">
                @{user.username}
              </p>
            </div>
          </div>
        )}
        {/* Menu Items */}
        {isSignedIn ? (
          <MenuItem
            title="Logout"
            icon={ArrowRightOnRectangleIcon}
            onClick={() => signOut()}></MenuItem>
        ) : (
          <>
            <MenuItem
              title="Login"
              icon={ArrowLeftOnRectangleIcon}
              onClick={() => router.push('/login')}></MenuItem>
            <MenuItem
              title="Register"
              icon={ArrowDownOnSquareIcon}
              onClick={() => router.push('/register')}></MenuItem>
          </>
        )}
      </Popover.Panel>
    </Popover>
  )
}

export default User
