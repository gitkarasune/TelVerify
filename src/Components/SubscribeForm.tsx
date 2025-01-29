const SubscribeForm = () => {
  return (
    <form className="flex flex-col md:flex-row items-center">
      <input
        type="email"
        placeholder="Your Email"
        className="p-2 rounded-md bg-gray-900 text-gray-900 mb-2 md:mb-0 md:mr-2"
        required
      />
      <button
        type="submit"
        className="bg-white text-black font-medium p-2 rounded-sm text-sm transition-all"
      >
        Subscribe
      </button>
    </form>
  );
};

export default SubscribeForm;
