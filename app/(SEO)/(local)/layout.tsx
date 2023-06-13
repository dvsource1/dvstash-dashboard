import Footer from '@/components/Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full flex-col bg-od_black">
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
