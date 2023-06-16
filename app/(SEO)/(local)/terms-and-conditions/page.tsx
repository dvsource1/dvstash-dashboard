import Header from '@/components/Header'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex h-full flex-col gap-2">
      <Header title={'Terms & Conditions'} />
      <div className="overflow-auto"></div>
    </div>
  )
}

export default Page
