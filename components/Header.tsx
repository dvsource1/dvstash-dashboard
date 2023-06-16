type HeaderProps = {
  title: string
  subtitle?: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="mx-4 mt-2 flex flex-col text-od_gray">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && (
        <h2 className="text-sx text-od_black__gray_80">{subtitle}</h2>
      )}
    </header>
  )
}

export default Header
