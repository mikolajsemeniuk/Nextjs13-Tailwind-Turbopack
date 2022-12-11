export default function Page() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/14690503/pexels-photo-14690503.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load')`,
          }}
        ></div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Create your restaurant
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Lets get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="your perfect name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="2419 Diane Street"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Telephone
                </label>
                <input
                  placeholder="22 489 64 00"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Description
                </label>
                <input
                  placeholder="your@restaurant.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Image
                </label>
                <input
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <hr />
              <p className="cursor-pointer flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Create restaurant</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
