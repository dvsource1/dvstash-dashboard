type HeaderProps = {
  title: string
  subtitle?: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="mx-4 mt-2 flex flex-col text-OD_GRAY">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <h2 className="text-sx text-OD_GRAY-800">{subtitle}</h2>}
    </header>
  )
}

export default Header
