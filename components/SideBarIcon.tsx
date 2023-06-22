import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/Tooltip'

type SideBarIconProps = {
  icon: any
  title: string
}

const SideBarIcon: React.FC<SideBarIconProps> = ({ icon: Icon, title }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="group flex h-12 w-12 items-center justify-center hover:bg-OD_BLUE-600">
            <Icon className="h-6 w-6 text-OD_GRAY group-hover:text-OD_WHITE"></Icon>
          </div>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default SideBarIcon
