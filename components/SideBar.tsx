'use client'

import {
  BoltIcon,
  BookmarkIcon,
  CubeTransparentIcon,
  HomeIcon,
  ListBulletIcon,
  NewspaperIcon,
  PencilSquareIcon,
  PhoneIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Logo from './Logo'
import SideBarIcon from './SideBarIcon'
import User from './User'

type SideBarProps = {}

enum SideBarActions {
  HOME,
  LOCAL,
  ARTICLES,
  SERVICES,
  STORE,
}

interface SideBarAction {
  id: SideBarActions
  title: string
  icon: any
  path: string
}

const SideBar: React.FC<SideBarProps> = ({}) => {
  const router = useRouter()

  const actions: SideBarAction[] = [
    {
      id: SideBarActions.HOME,
      title: 'Home',
      icon: HomeIcon,
      path: '/',
    },
    {
      id: SideBarActions.SERVICES,
      title: 'Products',
      icon: ListBulletIcon,
      path: '/products',
    },
    {
      id: SideBarActions.SERVICES,
      title: 'Projects',
      icon: BoltIcon,
      path: '/projects',
    },
    {
      id: SideBarActions.SERVICES,
      title: 'Services',
      icon: CubeTransparentIcon,
      path: '/services',
    },
    {
      id: SideBarActions.ARTICLES,
      title: 'News',
      icon: NewspaperIcon,
      path: '/news',
    },
    {
      id: SideBarActions.ARTICLES,
      title: 'Blog',
      icon: BookmarkIcon,
      path: '/blog',
    },
    {
      id: SideBarActions.STORE,
      title: 'Store',
      icon: ShoppingCartIcon,
      path: '/store',
    },
    {
      id: SideBarActions.LOCAL,
      title: 'Contact',
      icon: PhoneIcon,
      path: '/contact',
    },
    {
      id: SideBarActions.LOCAL,
      title: 'About',
      icon: PencilSquareIcon,
      path: '/about',
    },
  ]

  const handleActionClick = (action: SideBarAction) => () => {
    router.push(action.path)

    switch (action.id) {
      case SideBarActions.HOME:
      case SideBarActions.LOCAL:
      case SideBarActions.ARTICLES:
      case SideBarActions.SERVICES:
        break
    }
  }

  return (
    <div className="flex h-screen w-12 flex-col bg-od_black/90">
      <Logo />
      <div className="flex flex-1 flex-col">
        <ul className="flex-1">
          {actions.map((action, i) => (
            <li
              className="cursor-pointer"
              key={i}
              onClick={handleActionClick(action)}>
              <SideBarIcon icon={action.icon} title={action.title} />
            </li>
          ))}
        </ul>
        <User />
      </div>
    </div>
  )
}

export default SideBar
