type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="h-full bg-OD_BLACK">{children}</div>
}

export default Layout
