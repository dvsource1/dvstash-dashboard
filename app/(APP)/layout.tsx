type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="h-full bg-OD_BLUE-800">{children}</div>
}

export default Layout
