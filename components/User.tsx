'use client'

import { Menu } from '@headlessui/react'
import {
  ArrowDownOnSquareIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import MenuItem from './MenuItem'

type UserProps = {}

const User: React.FC<UserProps> = ({}) => {
  const menuItems = [
    { title: 'Login', icon: ArrowLeftOnRectangleIcon },
    { title: 'Register', icon: ArrowDownOnSquareIcon },
  ]

  return (
    <Menu>
      <Menu.Button className="group flex h-12 w-12 cursor-pointer items-center justify-center">
        <UserCircleIcon className="h-6 w-6 text-od_gray group-hover:text-white" />
      </Menu.Button>
      <Menu.Items className="max-w absolute bottom-0 left-12 flex w-32 min-w-max max-w-xs flex-col bg-od_gray/5">
        {menuItems.map((item, i) => (
          <Menu.Item key={i}>
            <MenuItem title={item.title} icon={item.icon}></MenuItem>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}

export default User
