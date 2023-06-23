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

  return (
    <div className="z-20 flex h-screen w-12 flex-col bg-OD_BLACK-200">
      <Logo />
      <div className="flex h-[calc(100vh-3rem)] flex-1 flex-col">
        <ul className="touch-pan-y snap-y overflow-y-auto overflow-x-hidden scroll-smooth">
          {actions.map((action, i) => (
            <li
              key={i}
              className="cursor-pointer snap-start"
              onClick={() => router.push(action.path)}>
              <SideBarIcon icon={action.icon} title={action.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
