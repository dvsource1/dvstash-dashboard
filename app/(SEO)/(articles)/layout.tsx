import SidePanel from '@/components/SidePanel'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full">
      <SidePanel />
      <div className="flex-1 bg-od_black">{children}</div>
    </div>
  )
}

export default Layout
