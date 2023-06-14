'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

type DisclosuresProps = {
  faqs: { q: string; a: string }[]
}

const Disclosures: React.FC<DisclosuresProps> = ({ faqs }) => {
  return (
    <div className="">
      {faqs.map((faq, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between p-2 text-left text-sm font-medium text-od_purple hover:text-od_purple/40 focus:outline-none focus-visible:text-od_purple/70 focus-visible:ring focus-visible:ring-opacity-75">
                <span>{faq.q}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-od_purple`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-od_gray">
                {faq.a}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}

export default Disclosures
