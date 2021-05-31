export default function Navbar() {
  return (
    <>
      <header className="text-gray-600 h-16 body-font mx-auto">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b-2 border-fuchsia-600">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto font-black flex flex-wrap items-center text-2xl justify-center">
            <a className="mr-10 hover:text-gray-900">Services & Pricing</a>
            <a className="mr-10 hover:text-gray-900">Company</a>
            <a className="mr-10 hover:text-gray-900">Talk to us</a>
            <button className="inline-flex text-lg  h-15 mr-10 items-center text-white bg-blue-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Schedule a Call
            </button>
            <a className="mr-10 hover:text-gray-900">EN</a>
          </nav>
        </div>
      </header>
    </>
  );
}
