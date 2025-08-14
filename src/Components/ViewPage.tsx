
import { useState } from "react";
import { toast, Toaster } from "sonner";
import useVerifyNumber from "tel-check-ts";
import { MdPhone } from 'react-icons/md'
import { CustomModal } from "./ui/cutom-model";

const ViewPage = () => {
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { verifyNumber } = useVerifyNumber()
  const [showDemo, setShowDemo] = useState<boolean>(false)
  const [verificationHistory, setVerificationHistory] = useState<any[]>([])

  const handleVerification = async () => {
    if (!input || input.length !== 11) {
      toast.error("Please enter a valid 11-digit Nigerian number.")
      return
    }

    setIsLoading(true)
    try {
      const result = verifyNumber(input)
      if (result) {
        // Add to history for analytics
        const historyItem = {
          number: input,
          network: result.name,
          timestamp: new Date().toISOString(),
          location: "Nigeria", // Could be enhanced with actual location detection
        }
        setVerificationHistory((prev) => [historyItem, ...prev.slice(0, 4)])

        if (result.name && result.imgSrc) {
          toast(
            <div className="flex items-center gap-x-3">
              <img src={result.imgSrc || "/placeholder.svg"} className="h-6 w-6 rounded-full" alt={result.name} />
              <div>
                <p className="font-semibold">{result.message}</p>
                <p className="text-xs text-gray-500">Verified instantly</p>
              </div>
            </div>,
          )
        } else {
          toast(result.message)
        }
      }
    } catch (error) {
      console.log("error", error)
      toast.error("An error occurred while verifying the number.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numeric values
    const numericValue = value.replace(/[^0-9]/g, "");
    setInput(numericValue);
  };

  return (
    <main className="bg-[#F8F8F8] flex h-screen flex-col justify-center items-center px-5">
      <Toaster />

      <section className="-mt-7 flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold p-3 Telverify">TelVerify</h1>
        <p className="max-w-lg mx-auto">Verify any Nigerian phone number instantly with 99.9% accuracy.</p>
        <p className="max-w-lg mx-auto">Trusted by 10,000+ businesses.</p>
      </section>

      <div className="border-2 border-[#333] bg-white flex items-center gap-x-2 justify-between w-full md:w-2/4 lg:w-1/3 my-5 p-1 rounded-full">
        <input
          type="tel"
          value={input}
          onChange={handleInputChange}
          className="w-full pl-4 p-2 outline-transparent text-sm md:text-base font-medium text-gray-900 bg-transparent"
          placeholder="Comfirm Number..."
          maxLength={11}
        />
        <button
          type="submit"
          className="bg-black text-white p-3 rounded-full transition-all ease-out duration-200 hover:shadow-lg"
          onClick={handleVerification}
          disabled={isLoading || input.length !== 11} // Disable if loading or input is invalid
        >
          {isLoading ? (
            <div className="spinner border-2 border-white border-t-transparent h-5 w-5 rounded-full animate-spin"></div>
          ) : (
            <MdPhone className="text-lg" />
          )}
        </button>
      </div>

      {/* Recent Verifications Analytics */}
      {verificationHistory.length > 0 && (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-semibold text-gray-900">Recent Verifications</h3>
          </div>
          <div className="space-y-3">
            {verificationHistory.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-mono text-sm">
                    {item.number.slice(0, 4)}***{item.number.slice(-3)}
                  </span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {item.network}
                  </span>
                </div>
                <span className="text-xs text-gray-500">Just now</span>
              </div>
            ))}
          </div>
        </div>
      )}


      {/* CTA Section */}
      <section className=" py-12 px-5 absolute bottom-0 left-0 right-0">
        <button
          onClick={() => setShowDemo(true)}
          className="bg-black text-white px-8 font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 disabled:opacity-70 rounded-full py-2"
        >
          Confused?
        </button>
        <p className="text-sm mt-3">See how TelVerify can transform your business</p>
      </section>



      {/* Demo Modal */}
      <CustomModal isOpen={showDemo} onClose={() => setShowDemo(false)} title="TelVerify: Complete Demo" size="lg">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Experience the Power of TelVerify</h3>
            <p className=" mb-6">
              See how our platform revolutionizes phone number verification in Nigeria
            </p>
          </div>

          {/* Demo Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl">
              <h4 className="font-semibold mb-2">Instant Verification</h4>
              <p className="text-sm">
                Verify any Nigerian number in under 0.3 seconds with 99.9% accuracy across all major networks.
              </p>
            </div>

            <div className="p-4 rounded-xl">
              <h4 className="font-semibold mb-2">Real-Time Analytics</h4>
              <p className="text-sm">
                Track verification patterns, network distribution, and usage statistics in real-time.
              </p>
            </div>

            <div className="p-4 rounded-xl">
              <h4 className="font-semibold mb-2">API Integration</h4>
              <p className="text-sm">
                Seamlessly integrate with your existing systems using our robust REST API.
              </p>
            </div>

            <div className="p-4 rounded-xl">
              <h4 className="font-semibold  mb-2">Enterprise Security</h4>
              <p className="text-sm ">
                Bank-grade encryption and privacy protection for all your verification needs.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setShowDemo(false)}
              className="bg-black text-white px-8 font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 disabled:opacity-70 rounded-full py-2"
            >
              Start Using TelVerify
            </button>
          </div>
        </div>
      </CustomModal>
    </main>
  );
};

export default ViewPage;