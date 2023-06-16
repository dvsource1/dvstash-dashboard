import { useRouter } from 'next/navigation'

type LogoProps = {}

const Logo: React.FC<LogoProps> = ({}) => {
  const router = useRouter()

  return (
    <div
      className="h-12 w-12 cursor-pointer bg-logo bg-cover bg-no-repeat"
      onClick={() => router.push('/')}></div>
  )
}

export default Logo
