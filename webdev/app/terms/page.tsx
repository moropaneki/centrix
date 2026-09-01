import LegalPage from "@/components/LegalPage";

export default function TermsPage() {
  const sections = [
    {
      id: "website-use",
      number: "01",
      title: "Use of This Website",
      content: (
        <>
          <p>
            This website provides information about AgencyName and the digital
            services we offer, including website development, software
            development, mobile applications, e-commerce, integrations,
            automation, and related technical services.
          </p>

          <p>
            By using this website, you agree to use it lawfully and in a manner
            that does not interfere with its availability, security, or
            functionality.
          </p>
        </>
      ),
    },

    {
      id: "enquiries",
      number: "02",
      title: "Enquiries & Quotations",
      content: (
        <>
          <p>
            Information submitted through our website may be used to evaluate a
            potential project and prepare a quotation, proposal, or
            recommendation.
          </p>

          <p>
            A project enquiry, discussion, estimate, or quotation does not
            automatically create a binding service agreement unless confirmed
            through an accepted proposal, statement of work, contract, or
            other agreed arrangement.
          </p>
        </>
      ),
    },

    {
      id: "project-scope",
      number: "03",
      title: "Project Scope",
      content: (
        <>
          <p>
            The scope of each project will normally be defined through a
            proposal, quotation, statement of work, specification, or other
            written project document.
          </p>

          <p>
            Requests outside the agreed project scope may require additional
            time, cost, or a separate quotation.
          </p>
        </>
      ),
    },

    {
      id: "payments",
      number: "04",
      title: "Payments & Deposits",
      content: (
        <>
          <p>
            Payment terms may vary depending on the project and may include an
            upfront deposit, milestone payments, recurring fees, or final
            payment before release.
          </p>

          <p>
            Specific payment requirements will be communicated in the relevant
            quotation, proposal, invoice, or project agreement.
          </p>

          <p>
            Work may be paused where agreed payments remain outstanding.
          </p>
        </>
      ),
    },

    {
      id: "timelines",
      number: "05",
      title: "Project Timelines",
      content: (
        <>
          <p>
            Project timelines are estimates unless specifically agreed
            otherwise. Delivery dates may depend on timely client feedback,
            access credentials, content, approvals, third-party services, and
            other project dependencies.
          </p>

          <p>
            Significant changes to requirements may affect the original
            timeline.
          </p>
        </>
      ),
    },

    {
      id: "client-responsibilities",
      number: "06",
      title: "Client Responsibilities",
      content: (
        <>
          <p>
            Clients are responsible for providing information, content,
            feedback, approvals, credentials, access, and other resources
            reasonably required to complete the project.
          </p>

          <p>
            Clients are also responsible for ensuring that materials supplied
            to us can lawfully be used for the intended project.
          </p>
        </>
      ),
    },

    {
      id: "intellectual-property",
      number: "07",
      title: "Intellectual Property",
      content: (
        <>
          <p>
            Ownership of project-specific deliverables will be determined by
            the applicable project agreement.
          </p>

          <p>
            Third-party libraries, software, platforms, fonts, plugins,
            templates, APIs, and other licensed materials remain subject to
            their respective licence terms.
          </p>

          <p>
            Reusable development methods, internal tools, general code
            patterns, and pre-existing intellectual property may remain the
            property of their original owner unless otherwise agreed.
          </p>
        </>
      ),
    },

    {
      id: "third-party-services",
      number: "08",
      title: "Third-Party Platforms & Services",
      content: (
        <>
          <p>
            Projects may depend on third-party platforms such as hosting
            providers, domain registrars, payment gateways, CRM systems, cloud
            services, APIs, app stores, plugins, or software providers.
          </p>

          <p>
            We cannot guarantee the continued availability, pricing,
            functionality, or policies of third-party services that we do not
            control.
          </p>
        </>
      ),
    },

    {
      id: "support",
      number: "09",
      title: "Support & Maintenance",
      content: (
        <>
          <p>
            Ongoing support, maintenance, updates, monitoring, hosting, or
            feature development are not automatically included unless stated
            in the applicable project agreement.
          </p>

          <p>
            Additional support arrangements may be offered separately.
          </p>
        </>
      ),
    },

    {
      id: "limitations",
      number: "10",
      title: "Limitations",
      content: (
        <>
          <p>
            We aim to deliver reliable digital solutions, but software and
            third-party systems may occasionally experience errors,
            interruptions, compatibility issues, or unexpected behaviour.
          </p>

          <p>
            Any specific warranties, service commitments, or liability terms
            applicable to a client project should be defined in the relevant
            service agreement.
          </p>
        </>
      ),
    },

    {
      id: "changes",
      number: "11",
      title: "Changes to These Terms",
      content: (
        <>
          <p>
            We may update these Terms & Conditions from time to time to reflect
            changes to our services, website, or business operations.
          </p>

          <p>
            Updated terms will be published on this page with the latest
            revision date.
          </p>
        </>
      ),
    },

    {
      id: "contact",
      number: "12",
      title: "Contact",
      content: (
        <>
          <p>
            If you have questions regarding these terms, please contact us
            through the contact page on this website.
          </p>
        </>
      ),
    },
  ];

  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      description="The general terms that apply when using our website, requesting services, or working with us on a digital project."
      lastUpdated="30 August 2026"
      icon="terms"
      sections={sections}
    />
  );
}