export default function Footer() {
  return (
    <footer class="bg-blue-100 text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-96 flex-shrink-0 px-20 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              src="/logo.png"
              className="h-10 w-40 border border-blue-500 rounded inline-block"
            />
          </a>
          <p class="mt-2 text-sm text-white pt-6">
            Find more options when looking for a software developer.
            Pay-as-you-go, of course!
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 pt-6 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest mb-3">
              Service
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-blue-300 text-sm hover:text-gray-800">
                  Graphic Design
                </a>
              </li>
              <li>
                <a class="text-blue-300 text-sm hover:text-gray-800">
                  Web Development
                </a>
              </li>
              <li>
                <a class="text-blue-300 text-sm hover:text-gray-800">
                  Mobile Development
                </a>
              </li>
              <li>
                <a class="text-blue-300 text-sm hover:text-gray-800">
                  Backend Development
                </a>
              </li>
              <li>
                <a class="text-blue-300 text-sm hover:text-gray-800">
                  CMS Developer
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest mb-3">
              Company
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="font-medium text-blue-300 text-sm hover:text-gray-800">
                  About Swarna Studio
                </a>
              </li>
              <li>
                <a class="text-blue-300 text-sm hover:text-gray-800">
                  Tech Stack
                </a>
              </li>
              <li>
                <a class="text-blue-300 text-sm hover:text-gray-800">
                  What We Support?
                </a>
              </li>
              <li>
                <a class="text-blue-300 text-sm hover:text-gray-800">FAQ</a>
              </li>

              <li>
                <a class="text-blue-300 text-sm hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a class="text-blue-300 text-sm hover:text-gray-800">
                  Term & Conditions
                </a>
              </li>
              <li>
                <a class="text-blue-300 text-sm hover:text-gray-800">
                  Portfolio
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            {/* <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2> */}
            <nav class="list-none mb-10">
              <li className="mb-6">
                <img
                  src="/logo.png"
                  className="h-10 w-40 border border-blue-500 rounded inline-block"
                />
              </li>
              <li>
                <img
                  src="/logo.png"
                  className="h-10 w-40 border border-blue-500 rounded inline-block"
                />
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex">
        <p class="text-gray-500 px-20 py-4 lg:text-center mb-3 sm:text-left">
          PT Swarna Teknologi Digital is a company registered in indonesia with
          company no. CS201738408 whose registered office is at <br /> Some
          Address, DKI Jakarta, Indonesia 2020
        </p>
      </div>
      {/* <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 px-20 text-sm text-center sm:text-left">
            PT Swarna Teknologi Digital is a company registered in indonesia
            with company no. CS201738408 whose registered office is at Some
            Address, DKI Jakarta, Indonesia 2020
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              class="text-gray-600 ml-1"
              target="_blank"
            ></a>
          </p>
        </div>
      </div>
     */}
    </footer>
  );
}
