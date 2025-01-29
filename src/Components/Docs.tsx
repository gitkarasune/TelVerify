
const Docs = () => {
  return (
    <div className="min-h-screen pt-32 mb-14">
      <section className="-mt-7 flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold p-2 Telverify">TelVerify Docs</h1>
        <p className="">Nigerian Sim Card Verification Tool</p>
      </section>

      <div className="p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p>
            TelVerify is a simple and efficient tool for verifying Nigerian mobile phone numbers and identifying their network providers (MTN, GLO, Airtel, 9mobile, NTL, or others). This project is designed to help developers easily integrate carrier detection into their applications, enabling accurate network classification for phone numbers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="list-disc list-inside">
            <li>Validate Nigerian phone numbers.</li>
            <li>Detect and classify carrier networks (MTN, GLO, Airtel, 9mobile, NTL, etc.).</li>
            <li>Provide user-friendly APIs for integration.</li>
            <li>Lightweight and scalable solution.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Use Cases</h2>
          <ul className="list-disc list-inside">
            <li>Optimize SMS gateway routing.</li>
            <li>Analyze user demographics based on carrier data.</li>
            <li>Enhance fraud prevention systems with carrier verification.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Getting Started</h2>
          <h3 className="text-xl font-semibold">Prerequisites</h3>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Usage</h2>
          <ol className="list-decimal list-inside">
            <li>Open your browser and navigate to <code>http://localhost:3000</code>.</li>
            <li>Enter a Nigerian phone number in the input field.</li>
            <li>Click the verify button to check the phone number and identify the network provider.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Acknowledgements</h2>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>TypeScript</li>
            <li>Vite</li>
            <li>Rollup</li>
            <li>react-icons</li>
            <li>sonner</li>
            <li>tel-check-ts</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Docs;