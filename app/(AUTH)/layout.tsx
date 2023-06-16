type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="h-full bg-od_black">{children}</div>
}

export default Layout
