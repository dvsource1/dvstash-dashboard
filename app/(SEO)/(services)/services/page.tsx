import Header from '@/components/Header'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex">
      <Header title={'Services'} />
    </div>
  )
}

export default Page