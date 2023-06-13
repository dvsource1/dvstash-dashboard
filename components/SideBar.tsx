'use client'

import {
  AdjustmentsVerticalIcon,
  BookmarkIcon,
  HomeIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline'
import Logo from './Logo'
import SideBarIcon from './SideBarIcon'
import User from './User'

type SideBarProps = {}

enum SideBarActions {
  HOME,
  NEWS,
  BLOG,
  APP,
}

interface SideBarAction {
  id: SideBarActions
  title: string
  icon: any
}

const SideBar: React.FC<SideBarProps> = ({}) => {
  const actions: SideBarAction[] = [
    {
      id: SideBarActions.HOME,
      title: 'Home',
      icon: HomeIcon,
    },
    {
      id: SideBarActions.NEWS,
      title: 'News',
      icon: NewspaperIcon,
    },
    {
      id: SideBarActions.BLOG,
      title: 'Blog',
      icon: BookmarkIcon,
    },
    {
      id: SideBarActions.APP,
      title: 'App',
      icon: AdjustmentsVerticalIcon,
    },
  ]

  const handleActionClick = (action: SideBarAction) => () => {
    switch (action.id) {
      case SideBarActions.HOME:
      case SideBarActions.NEWS:
      case SideBarActions.BLOG:
        break
      case SideBarActions.APP:
        break
    }
  }

  return (
    <div className="flex h-screen w-12 flex-col bg-od_black/95">
      <Logo />
      <div className="flex flex-1 flex-col">
        <ul className="flex-1">
          {actions.map(action => (
            <li
              className="cursor-pointer"
              key={action.id}
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
