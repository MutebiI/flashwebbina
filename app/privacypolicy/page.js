import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Mueletech</title>
      </Head>
      <div className="container  mx-auto px-4 py-8">
        <h1 className="mt-20 text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At Mueletech, we are committed to protecting your privacy and
          safeguarding your personal information. This Privacy Policy explains
          how we collect, use, and disclose information when you use our
          website.
        </p>
        <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information from you when you voluntarily
          submit it to us through our website, such as when you subscribe to our
          newsletter or fill out a contact form. The types of personal
          information we may collect include your name, email address, and any
          other information you provide.
        </p>
        <h2 className="text-xl font-bold mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          We may use the information we collect from you to:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Provide and personalize our services</li>
          <li>Communicate with you, including responding to your inquiries</li>
          <li>Send you newsletters or promotional emails</li>
          <li>
            Analyze and improve our website performance and functionality
          </li>
          <li>Comply with applicable laws and regulations</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">
          Disclosure of Your Information
        </h2>
        <p className="mb-4">
          We may disclose your personal information to third parties in the
          following circumstances:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>With your consent</li>
          <li>
            To our service providers who assist in providing and maintaining our
            website
          </li>
          <li>
            To comply with legal obligations or respond to lawful requests
          </li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access, loss,
          or alteration. However, please note that no method of transmission
          over the internet or electronic storage is 100% secure, and we cannot
          guarantee absolute security.
        </p>
        <h2 className="text-xl font-bold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be effective when posted on this page. We
          encourage you to review this Privacy Policy periodically.
        </p>
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at publicationzoaf@gmail.com.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
