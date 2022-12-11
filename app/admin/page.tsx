export default function Page() {
  return (
    <div className="pt-16 sm:px-6 w-full">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="flex items-center justify-between">
          <p
            tabIndex={0}
            className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
          >
            Tasks
          </p>
        </div>
      </div>
      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div className="sm:flex items-center justify-between">
          <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
            <p className="text-sm font-medium leading-none text-white">
              Add Task
            </p>
          </button>
        </div>
        <div className="mt-7 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <tbody>
              <tr
                tabIndex={0}
                className="focus:outline-none h-16 border border-gray-100 rounded"
              >
                <td className="">
                  <img
                    width="150"
                    height="150"
                    className="rounded-md"
                    src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="img"
                  />
                </td>
                <td className="">
                  <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">
                      Name
                    </p>
                  </div>
                </td>
                <td className="pl-24">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      Type
                    </p>
                  </div>
                </td>
                <td className="">
                  <div className="flex items-center pl-5">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      Description
                    </p>
                  </div>
                </td>
                <td className="">
                  <div className="flex items-center pl-5">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      Price
                    </p>
                  </div>
                </td>
                <td className="pl-12">
                  <button className="text-sm leading-none text-blue-900 py-3 px-5 bg-blue-300 rounded hover:bg-blue-500 focus:outline-none">
                    View
                  </button>
                </td>
                <td className="">
                  <button className="text-sm leading-none text-orange-900 py-3 px-5 bg-orange-300 rounded hover:bg-orange-500 focus:outline-none">
                    Update
                  </button>
                </td>
                <td className="">
                  <button className="text-sm leading-none text-red-900 py-3 px-5 bg-red-300 rounded hover:bg-red-500 focus:outline-none">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
