'use client'

import Disclosures from '@/components/Disclosures'
import Header from '@/components/Header'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  const faqs = [
    {
      q: 'What is your refund policy?',
      a: "We don't do that here.",
    },
    {
      q: 'Do you offer technical support?',
      a: 'No.',
    },
    {
      q: 'Why',
      a: "We don't care.",
    },
  ]

  return (
    <div className="flex flex-col">
      <Header title={'FAQ'} />

      <div className="w-full flex-1 px-4 pt-16">
        <div className="mx-auto w-full max-w-md bg-od_gray/10 p-2">
          <Disclosures faqs={faqs} />
        </div>
      </div>
    </div>
  )
}

export default Page
