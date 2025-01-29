const Privacy = () => {
  return (
    <div className="min-h-screen pt-32 mb-14 p-8 maxContainer">
      <div className="flex justify-center items-center flex-col mb-8">
        <h1 className="text-4xl font-bold mb-1 Telverify flex justify-center items-center">
          Terms of Service
        </h1>
        <p className="text-sm">
          Last updated:{" "}
          <span className="kara-kendev text-xs">28 January, 2025</span>
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 Telverify">Introduction</h2>
        <p>
          Welcome to TelVerify. We are committed to protecting your personal
          information and your right to privacy. If you have any questions or
          concerns about this privacy notice or our practices with regard to
          your personal information, please contact us at support@telverify.com.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 Telverify">Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us
          when you register on the website, express an interest in obtaining
          information about us or our products and services, when you
          participate in activities on the website, or otherwise when you
          contact us.
        </p>
        <ul className="list-disc list-inside ml-3 overflow-x-scroll text-nowrap">
          <li>Personal Information: Name, email address, phone number, etc.</li>
          <li>Usage Data: IP address, browser type, pages visited, etc.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 Telverify">How We Use Your Information</h2>
        <p>
          We use personal information collected via our website for a variety of
          business purposes described below:
        </p>
        <ul className="list-disc list-inside ml-3 overflow-x-scroll text-nowrap">
          <li>To provide and maintain our service.</li>
          <li>To manage user accounts.</li>
          <li>To send administrative information to you.</li>
          <li>To protect our services.</li>
          <li>To enforce our terms, conditions, and policies.</li>
          <li>To respond to legal requests and prevent harm.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 Telverify">Sharing Your Information</h2>
        <p>
          We only share information with your consent, to comply with laws, to
          provide you with services, to protect your rights, or to fulfill
          business obligations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 Telverify">
          Security of Your Information
        </h2>
        <p>
          We use administrative, technical, and physical security measures to
          help protect your personal information. However, no electronic
          transmission over the internet or information storage technology can
          be guaranteed to be 100% secure, so we cannot promise or guarantee
          that hackers, cybercriminals, or other unauthorized third parties will
          not be able to defeat our security and improperly collect, access,
          steal, or modify your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 Telverify">Your Privacy Rights</h2>
        <p>
          In some regions, such as the European Economic Area (EEA) and United
          Kingdom (UK), you have rights that allow you greater access to and
          control over your personal information. You may review, change, or
          terminate your account at any time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 Telverify">Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may email us
          at support@telverify.com.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
