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
    <div className="flex h-full flex-col gap-2">
      <Header title={'Faq'} />
      <div className="overflow-auto">
        <div className="mx-auto w-full max-w-md bg-OD_GRAY-500 p-2">
          <Disclosures faqs={faqs} />
        </div>
      </div>
    </div>
  )
}

export default Page
