import Header from '@/components/Header'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex">
      <Header title={'Projects'} />
    </div>
  )
}

export default Page
