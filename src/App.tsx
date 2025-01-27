import { useState } from "react";
import { toast, Toaster } from "sonner";
import useVerifyNumber from "tel-check-ts";
// import { AiFillCheckCircle } from "react-icons/ai"
import { MdPhone } from "react-icons/md";

const App = () => {
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleVerification = async () => {
    if (!input || input.length !== 11) {
      toast.error("Please enter a valid 11-digit number.");
      return;
    }

    setIsLoading(true);
    try {
      const { verifyNumber } = useVerifyNumber();
      const result = verifyNumber(input);
      if (result) {
        if (result.name && result.imgSrc) {
          toast(
            <div className="flex items-center gap-x-3">
              <img src={result.imgSrc} className="h-6 w-6" alt={result.name} />
              {result.message}
            </div>
          );
        } else {
          toast(result.message);
        }
      }
    } catch (error) {
      toast.error("An error occurred while verifying the number.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numeric values
    const numericValue = value.replace(/[^0-9]/g, "");
    setInput(numericValue);
  };

  return (
    <main className="bg-[#F8F8F8] flex h-screen flex-col justify-center items-center px-5">
      <Toaster />
      <div className="border-2 border-[#333] bg-white flex items-center gap-x-2 justify-between w-full md:w-2/4 lg:w-1/3 my-5 p-2 rounded-full">
        <input
          type="tel"
          value={input}
          onChange={handleInputChange}
          className="w-full pl-4 outline-transparent text-sm md:text-base font-medium text-gray-900 bg-transparent"
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

      <div className="absolute bottom-5 left-0">
        <a
          href="https://karasune.vercel.app/"
          target="_blank"
          className="border border-[#E5E5E5] bg-black py-3 px-4 rounded-2xl flex items-center gap-x-3.5"
        >
          <span className="text-sm text-[#fff]">Developed by Kara Sune</span>
        </a>
      </div>
    </main>
  );
};

export default App;
