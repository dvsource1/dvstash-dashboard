import Header from '@/components/Header'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex">
      <Header title={'About'} />
    </div>
  )
}

export default Page
