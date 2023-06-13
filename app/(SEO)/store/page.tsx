import Header from '@/components/Header'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex h-full bg-od_black">
      <Header title={'Store'} />
    </div>
  )
}

export default Page
