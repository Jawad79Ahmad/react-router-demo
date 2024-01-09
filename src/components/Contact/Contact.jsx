export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[600px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto">
        <div className="p-6 bg-gray-100 sm:rounded-lg">
          <h1 className="text-3xl text-gray-800 font-extrabold tracking-tight">
            Get in touch:
          </h1>
          <p className="text-normal text-lg font-medium text-gray-600 mt-2 mb-4">
            Fill in the form to start a conversation
          </p>
          <form className="flex flex-col justify-center">
            <div className="flex flex-col">
              <label className="hidden">
                Full Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label className="hidden">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label className="hidden">
                Number
              </label>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Telephone Number"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="md:w-32 text-white bg-blue-700 hover:bg-blue-800 font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
