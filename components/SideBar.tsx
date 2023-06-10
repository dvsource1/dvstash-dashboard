'use client'

import {
  BookmarkIcon,
  HomeIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline'
import Logo from './Logo'
import SideBarIcon from './SideBarIcon'

type SideBarProps = {}

enum SideBarAction {
  HOME,
  NEWS,
  BLOG,
}

const SideBar: React.FC<SideBarProps> = ({}) => {
  const actions = [
    {
      id: SideBarAction.HOME,
      title: 'Home',
      icon: HomeIcon,
    },
    {
      id: SideBarAction.NEWS,
      title: 'News',
      icon: NewspaperIcon,
    },
    {
      id: SideBarAction.BLOG,
      title: 'Blog',
      icon: BookmarkIcon,
    },
  ]

  return (
    <div className="h-screen w-12 bg-od_black/95">
      <Logo />
      <ul>
        {actions.map(action => (
          <li key={action.id}>
            <SideBarIcon icon={action.icon} title={action.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
