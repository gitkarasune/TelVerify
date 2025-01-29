import React from 'react';

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
          <ul className="list-disc list-inside">
            <li>Node.js</li>
            <li>npm or yarn</li>
          </ul>

          <h3 className="text-xl font-semibold">Installation</h3>
          <ol className="list-decimal list-inside">
            <li>Clone the repository:
              <pre className="bg-gray-100 p-2 rounded">
                <code>
                  git clone https://github.com/yourusername/telcheck.git<br />
                  cd telcheck
                </code>
              </pre>
            </li>
            <li>Install dependencies:
              <pre className="bg-gray-100 p-2 rounded">
                <code>
                  npm install<br />
                  # or<br />
                  yarn install
                </code>
              </pre>
            </li>
            <li>Start the development server:
              <pre className="bg-gray-100 p-2 rounded">
                <code>
                  npm start<br />
                  # or<br />
                  yarn start
                </code>
              </pre>
            </li>
          </ol>
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
          <h2 className="text-2xl font-bold">Components</h2>
          <h3 className="text-xl font-semibold">App.tsx</h3>
          <p>The main component that sets up the application, including the phone number verification and chatbot integration.</p>

          <h3 className="text-xl font-semibold">Chatbot.tsx</h3>
          <p>A component that renders the chatbot interface, allowing users to interact with the bot.</p>

          <h3 className="text-xl font-semibold">ChatForm.tsx</h3>
          <p>A component that handles the input form for the chatbot, allowing users to send messages.</p>

          <h3 className="text-xl font-semibold">ChatMessage.tsx</h3>
          <p>A component that displays individual chat messages in the chatbot interface.</p>

          <h3 className="text-xl font-semibold">ChatIcon.tsx</h3>
          <p>A component that renders the chatbot icon, which can be clicked to expand or collapse the chatbot.</p>

          <h3 className="text-xl font-semibold">ContactInfo.ts</h3>
          <p>A file containing company information and FAQs that can be used by the chatbot to provide responses.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">NPM Package</h2>
          <p>I also turned it into an npm package for developers! 🎉</p>
          <p>Check it out here: <a href="https://www.npmjs.com/package/tel-check-ts" className="text-blue-500">tel-check-ts on npm</a></p>
          <p>💻 <em>Tools Used</em>: Vite, TypeScript, and Rollup.</p>
          <p>Whether you're building apps or just curious, this tool is fast, efficient, and easy to integrate!</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">License</h2>
          <p>This project is licensed under the MIT License - see the <a href="/LICENSE" className="text-blue-500">LICENSE</a> file for details.</p>
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