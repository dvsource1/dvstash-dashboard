type SideBarIconProps = {
  icon: any
  title: string
}

const SideBarIcon: React.FC<SideBarIconProps> = ({ icon: Icon, title }) => {
  return (
    <div className="group flex h-12 w-12 items-center justify-center hover:bg-od_blue/40">
      <Icon className="h-6 w-6 text-od_gray group-hover:text-white"></Icon>
      <span className="absolute left-12 scale-0 bg-od_yellow/20 px-2 py-1 text-xs font-semibold text-od_blue/80 group-hover:scale-100">
        {title}
      </span>
    </div>
  )
}

export default SideBarIcon
