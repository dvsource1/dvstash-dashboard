import Header from '@/components/Header'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex h-full flex-col gap-2">
      <Header title={'Terms & Conditions'} />
      <div className="mb-4 flex flex-col gap-6 overflow-auto p-4 text-OD_GRAY">
        <h2 className="font-bold">Effective Date: 2023 June 20</h2>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">1. Acceptance of Terms</h3>
          <p className="text-justify">
            By accessing or using this website, you agree to be bound by these
            Terms and Conditions. If you do not agree with any part of these
            terms, please do not use this website.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">2. Intellectual Property</h3>
          <p className="text-justify">
            All content on this website, including text, graphics, logos,
            images, and software, is the property of [Your Company Name] and
            protected by intellectual property laws. You may not reproduce,
            distribute, modify, or use any content without our prior written
            consent.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">3. User Conduct</h3>
          <p className="text-justify">
            When using this website, you agree to abide by the following rules:
          </p>
          <ul>
            <li>Do not violate any applicable laws or regulations.</li>
            <li>Do not infringe upon the rights of others.</li>
            <li>
              Do not upload or distribute any harmful or offensive content.
            </li>
            <li>
              Do not interfere with the operation of this website or its
              underlying technology.
            </li>
            <li>
              Do not attempt to gain unauthorized access to any part of this
              website.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">4. Limitation of Liability</h3>
          <p className="text-justify">
            [Your Company Name] shall not be liable for any direct, indirect,
            incidental, consequential, or punitive damages arising out of your
            access or use of this website. This includes any damages resulting
            from errors, omissions, interruptions, or delays in operation.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">5. Links to Third-Party Websites</h3>
          <p className="text-justify">
            This website may contain links to third-party websites. These links
            are provided solely for your convenience and do not imply
            endorsement or responsibility for the content or activities of those
            websites.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">6. Termination</h3>
          <p className="text-justify">
            We reserve the right to terminate or suspend your access to this
            website at any time, without prior notice, for any reason, including
            if we believe you have violated these Terms and Conditions.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">7. Governing Law</h3>
          <p className="text-justify">
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of [Your Country].
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
