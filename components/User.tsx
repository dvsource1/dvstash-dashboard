'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import { Menu } from '@headlessui/react'
import {
  ArrowDownOnSquareIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import MenuItem from './MenuItem'

type UserProps = {}

const User: React.FC<UserProps> = ({}) => {
  const { isLoaded, isSignedIn, user } = useUser()
  const router = useRouter()

  const menuItems = [
    { title: 'Login', icon: ArrowLeftOnRectangleIcon, path: '/sign-in' },
    { title: 'Register', icon: ArrowDownOnSquareIcon, path: '/sign-up' },
  ]

  const handleMenuItemClick = (item: { path: string }) => {
    router.push(item.path)
  }

  return (
    <Menu>
      <Menu.Button
        disabled={isLoaded && isSignedIn}
        className="group flex h-12 w-12 cursor-pointer items-center justify-center">
        {isLoaded && isSignedIn ? (
          <UserButton
            afterSignOutUrl="/"
            userProfileMode="navigation"
            userProfileUrl={
              typeof window !== 'undefined'
                ? `${window.location.origin}/profile`
                : undefined
            }
          />
        ) : (
          <UserCircleIcon className="h-8 w-8 text-od_gray group-hover:text-white" />
        )}
      </Menu.Button>
      <Menu.Items className="max-w absolute bottom-0 left-12 flex w-32 min-w-max max-w-xs flex-col bg-od_gray/5">
        <Menu.Item disabled>
          <div className="">{user?.username || user?.id!!}</div>
        </Menu.Item>
        {menuItems.map((item, i) => (
          <Menu.Item key={i}>
            <MenuItem
              title={item.title}
              icon={item.icon}
              onClick={_ => handleMenuItemClick(item)}></MenuItem>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}

export default User
