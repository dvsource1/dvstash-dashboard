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
          <div className="group flex h-12 w-12 items-center justify-center hover:bg-od_black_90__blue_40">
            <Icon className="h-6 w-6 text-od_gray group-hover:text-white"></Icon>
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
