import Header from '@/components/Header'

type PageProps = {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex h-full flex-col gap-2">
      <Header title={'Privacy Policy'} />
      <div className="mb-4 flex flex-col gap-6 overflow-auto p-4 text-OD_GRAY">
        <h2 className="font-bold">Effective Date: 2023 June 20</h2>
        <p className="text-justify">
          This Privacy Policy outlines the practices and policies implemented by
          DVStash (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) regarding
          the collection, use, and disclosure of personal information when you
          visit our website or use our services. We are committed to protecting
          your privacy and ensuring the security of the personal information you
          provide to us. By accessing our website or using our services, you
          consent to the practices described in this Privacy Policy.
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">1. Information We Collect</h3>

          <p className="text-justify">
            We may collect personal information that you voluntarily provide to
            us, such as your name, email address, phone number, and any other
            information you choose to provide. Additionally, we may
            automatically collect certain information, including your IP
            address, browser type, operating system, and referring website.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">2. Use of Information</h3>
          <p className="text-justify">
            We may use the collected information for various purposes, including
            but not limited to:
          </p>

          <ul className="list-disc pl-4">
            <li>
              Providing and personalizing our services to meet your specific
              needs.
            </li>
            <li>
              Responding to your inquiries, requests, or customer
              service-related matters.
            </li>
            <li>
              Sending you important updates, newsletters, or marketing
              communications.
            </li>
            <li>
              Analyzing and improving the effectiveness of our website and
              services.
            </li>
            <li>
              Protecting our rights, property, or safety, as well as the rights,
              property, and safety of our users or others.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">3. Information Sharing</h3>
          <p className="text-justify">
            We may share your personal information with trusted third parties
            who assist us in providing our services, such as website hosting,
            data analysis, and customer support. These third parties are
            obligated to maintain the confidentiality and security of your
            information and are prohibited from using your information for any
            other purposes.
          </p>
          <p className="text-justify">
            We may also disclose your personal information when required by law,
            such as in response to a court order or governmental request, or if
            we believe it is necessary to protect our rights, property, or
            safety.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">4. Data Security</h3>
          <p className="text-justify">
            We take reasonable precautions to protect your personal information
            from unauthorized access, use, or disclosure. However, no method of
            transmission over the internet or electronic storage is 100% secure.
            Therefore, while we strive to protect your information, we cannot
            guarantee its absolute security.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">
            5. Cookies and Tracking Technologies
          </h3>
          <p className="text-justify">
            We may use cookies and similar tracking technologies to enhance your
            experience on our website. These technologies allow us to collect
            information about your browsing activities, such as pages visited
            and links clicked, to personalize your experience and deliver
            relevant content. You can choose to disable cookies through your
            browser settings; however, this may limit certain functionalities of
            our website.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">6. Third-Party Links</h3>
          <p className="text-justify">
            Our website may contain links to third-party websites or services
            that are not controlled or operated by us. This Privacy Policy does
            not apply to those third-party websites or services. We recommend
            reviewing the privacy policies of those websites or services before
            providing any personal information.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">7. Children&apos;s Privacy</h3>
          <p className="text-justify">
            Our website and services are not directed to individuals under the
            age of 13. We do not knowingly collect personal information from
            children. If you are a parent or guardian and believe that your
            child has provided us with personal information, please contact us,
            and we will promptly remove such information from our records.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">8. Updates to Privacy Policy</h3>
          <p className="text-justify">
            We reserve the right to update or modify this Privacy Policy at any
            time. We will notify you of any changes by posting the revised
            Privacy Policy on our website. The updated Privacy Policy will be
            effective as of the date of posting.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">9. Contact Us</h3>
          <p className="text-justify">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of your personal information, please
            contact us at virajkaush@gmail.com.
          </p>
        </div>

        <p className="text-justify">
          By using our website or services, you acknowledge that you have read
          and understood this Privacy Policy and agree to its terms.
        </p>

        <address>
          <p className="text-justify">DVStash</p>
          <p className="text-justify">Earch</p>
        </address>
      </div>
    </div>
  )
}

export default Page
