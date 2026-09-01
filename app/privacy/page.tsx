import LegalPage from "@/components/LegalPage";

export default function PrivacyPage() {
  const sections = [
    {
      id: "information-we-collect",
      number: "01",
      title: "Information We Collect",
      content: (
        <>
          <p>
            We may collect personal information that you voluntarily provide
            when you contact us, submit a project enquiry, request a quotation,
            or otherwise communicate with us.
          </p>

          <p>
            This information may include your name, company name, email
            address, telephone number, project requirements, budget
            information, and any other information you choose to provide.
          </p>

          <p>
            We may also collect limited technical information relating to your
            use of our website, such as browser type, device information, IP
            address, pages visited, and general usage information where
            analytics tools are enabled.
          </p>
        </>
      ),
    },

    {
      id: "how-we-use-information",
      number: "02",
      title: "How We Use Your Information",
      content: (
        <>
          <p>
            We use information collected through our website primarily to
            communicate with you and provide our services.
          </p>

          <p>
            This may include responding to enquiries, evaluating project
            requirements, preparing quotations, managing client
            communications, providing technical support, and improving our
            website and services.
          </p>

          <p>
            We do not use personal information for purposes that are unrelated
            to the reason it was collected unless required or permitted by
            applicable law.
          </p>
        </>
      ),
    },

    {
      id: "project-enquiries",
      number: "03",
      title: "Project Enquiries",
      content: (
        <>
          <p>
            When you submit a project enquiry, information you provide may be
            reviewed for the purpose of understanding your requirements and
            determining whether we are able to assist with your project.
          </p>

          <p>
            Submission of an enquiry does not automatically create a
            contractual relationship between you and AgencyName.
          </p>
        </>
      ),
    },

    {
      id: "data-protection",
      number: "04",
      title: "Data Protection & Security",
      content: (
        <>
          <p>
            We take reasonable administrative and technical measures to
            protect information against unauthorised access, misuse, loss,
            alteration, or disclosure.
          </p>

          <p>
            However, no website, storage system, or internet transmission can
            be guaranteed to be completely secure. We therefore cannot
            guarantee absolute security of information transmitted online.
          </p>
        </>
      ),
    },

    {
      id: "third-party-services",
      number: "05",
      title: "Third-Party Services",
      content: (
        <>
          <p>
            Our website and projects may rely on third-party platforms or
            service providers including hosting providers, analytics tools,
            email services, payment providers, cloud infrastructure, and
            business software.
          </p>

          <p>
            These providers may process information according to their own
            privacy policies and terms.
          </p>
        </>
      ),
    },

    {
      id: "cookies",
      number: "06",
      title: "Cookies & Analytics",
      content: (
        <>
          <p>
            Our website may use cookies or similar technologies to support
            essential functionality, analyse website traffic, and understand
            how visitors interact with our pages.
          </p>

          <p>
            Where non-essential tracking technologies are used, additional
            consent mechanisms may be introduced where required.
          </p>
        </>
      ),
    },

    {
      id: "data-retention",
      number: "07",
      title: "Data Retention",
      content: (
        <>
          <p>
            We retain personal information only for as long as reasonably
            necessary for the purposes for which it was collected, to maintain
            business records, or to comply with legal and contractual
            obligations.
          </p>
        </>
      ),
    },

    {
      id: "your-rights",
      number: "08",
      title: "Your Rights",
      content: (
        <>
          <p>
            Depending on applicable law, you may have rights relating to your
            personal information, including requesting access, correction, or
            deletion of information that we hold about you.
          </p>

          <p>
            Requests can be submitted through our contact page.
          </p>
        </>
      ),
    },

    {
      id: "policy-updates",
      number: "09",
      title: "Changes to This Policy",
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our services, website functionality, business
            operations, or legal requirements.
          </p>

          <p>
            The latest version will always display its most recent update date
            at the top of this page.
          </p>
        </>
      ),
    },

    {
      id: "contact",
      number: "10",
      title: "Contact Us",
      content: (
        <>
          <p>
            If you have any questions regarding this Privacy Policy or how your
            information is handled, please contact us through the contact page
            on this website.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPage
      eyebrow="Legal & Privacy"
      title="Privacy Policy"
      description="How we collect, use, protect, and manage information when you use our website or communicate with us."
      lastUpdated="30 August 2026"
      icon="privacy"
      sections={sections}
    />
  );
}