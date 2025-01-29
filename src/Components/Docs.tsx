import { Link } from "react-router-dom";

const Docs = () => {
  return (
    <div className="min-h-screen pt-12 mb-14 maxContainer">
      <section className="-mt-7 flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold p-2 Telverify">
          <Link to={"/"}>TelVerify </Link>Docs
        </h1>
        <p className="">Nigerian Sim Card Verification Tool</p>
      </section>

      <section className="flex justify-center items-center mt-9 mb-9">
        <Link to={"/"}>
          <button className="rounded-full border-none outline-none flex items-center justify-center text-sm bg-black text-white px-4 py-2">
            Back to Home
          </button>
        </Link>
      </section>

      <div className="grid grid-col-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mb-7 gap-4">
        <section className="border border-gray-700 p-4 rounded-2xl transition-all bg-[#101010] text-white text-sm hover:border-blue-900 gradient-bg">
          <h2 className="text-2xl font-bold mb-5 Telverify">Overview</h2>
          <p>
            <mark>TelVerify</mark> is a simple and efficient tool for verifying
            Nigerian mobile phone numbers and identifying their network
            providers (MTN, GLO, Airtel, 9mobile, NTL, or others). This project
            is designed to help developers easily integrate carrier detection
            into their applications, enabling accurate network classification
            for phone numbers.
          </p>
        </section>
        <section className="border border-gray-700 p-4 rounded-2xl transition-all bg-[#101010] text-white text-sm hover:border-blue-900 gradient-bg">
          <h2 className="text-2xl font-bold Telverify mb-5">Features</h2>
          <ul className="list-disc list-inside">
            <li>Validate Nigerian phone numbers.</li>
            <li>
              Detect and classify carrier networks (MTN, GLO, Airtel, 9mobile,
              NTL, etc.).
            </li>
            <li>Provide user-friendly APIs for integration.</li>
            <li>Lightweight and scalable solution.</li>
          </ul>
        </section>
        <section className="border border-gray-700 p-4 rounded-2xl transition-all bg-[#101010] text-white text-sm hover:border-blue-900 gradient-bg">
          <h2 className="text-2xl font-bold Telverify mb-5">Use Cases</h2>
          <ul className="list-disc list-inside">
            <li>Optimize SMS gateway routing.</li>
            <li>Analyze user demographics based on carrier data.</li>
            <li>Enhance fraud prevention systems with carrier verification.</li>
          </ul>
        </section>
        <section className="border border-gray-700 p-4 rounded-2xl transition-all bg-[#101010] text-white text-sm hover:border-blue-900 gradient-bg">
          <h2 className="text-2xl font-bold Telverify mb-5">
            Acknowledgements
          </h2>
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

      <div>
        <section className="mb-8">
          <div className="flex justify-center items-center mt-7 mb-4 flex-col">
            <h2 className="text-4xl font-bold p-2 Telverify">Usage</h2>
            <p>Follow these steps to use the TelVerify application</p>
          </div>
          <ol className="list-decimal list-inside">
            <li>
              Open your browser and navigate to{" "}
              <mark>
                <code>http://tel-verify.vercel.app</code>
              </mark>
            </li>
            <li>
              Enter a Nigerian phone number in the input field. The input field
              only accepts numeric values and has a maximum length of 11 digits.
            </li>
            <li>
              Click the verify button. The button will display a loading spinner
              while the verification is in progress.
            </li>
            <li>
              Once the verification is complete, the application will display
              the network provider information for the entered phone number. If
              the phone number is invalid, an appropriate message will be shown.
            </li>
            <li>
              You can also interact with the chatbot by clicking the chatbot
              icon at the bottom right corner of the screen. The chatbot can
              provide additional information and assistance.
            </li>
          </ol>
        </section>
      </div>

      <h1 className="text-3xl mb-2 font-bold Telverify" style={{ paddingTop: "32px" }}>
        Subscribe
      </h1>
      <footer
        className="bg-black text-white p-8 rounded"
        style={{ paddingBottom: "32px" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold Telverify">
                Subscribe to our Newsletter
              </h2>
              <p className="text-gray-400 text-center md:text-left lg:text-left xl:text-left 2xl:text-left">
                Get the latest updates and offers.
              </p>
            </div>
            <form className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Example@gmail.com"
                className="p-2 rounded-sm bg-gray-900 text-black mb-2 md:mb-0 md:mr-2"
                required
              />
              <button
                type="submit"
                className="bg-white text-black font-medium p-2 rounded-sm text-sm transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="mt-8 text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} TelVerify. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-start mt-4">
              <Link to="/privacy" className="text-gray-400 mx-2 Telverify">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 mx-2 Telverify">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Docs;
