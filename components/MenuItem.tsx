'use client'

type MenuItemProps = {
  title: string
  icon: any
  onClick: (e: any) => void
}

const MenuItem: React.FC<MenuItemProps> = ({ title, icon: Icon, onClick }) => {
  return (
    <div
      className="flex cursor-pointer gap-2 p-2 text-od_gray hover:bg-od_blue/40"
      onClick={onClick}>
      <div className="flex h-6 w-6 items-center justify-center">
        <Icon className="h-5 w-5 " />
      </div>
      <div className="mr-2 flex-1">{title}</div>
    </div>
  )
}

export default MenuItem
