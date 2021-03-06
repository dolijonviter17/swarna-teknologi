import SectionTitle from "../component/support/SectionTitle";

export default function MainPage() {
  return (
    <section className="text-blue-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mb-10">
          <div className="sm:w-1/2 px-20 w-1/4">
            <img
              alt="content"
              className="object-cover object-center h-full w-100"
              src="/Assets/Pair-programming-amico.png"
            />
          </div>
          <div className="sm:w-1/2 lg:w-1/2 px-5">
            <h2 className="title-font text-4xl font-black text-blue-100 mb-3 text-left">
              Tech Team as a Service
            </h2>
            <p className="leading-relaxed text-base text-black-100 mb-6">
              Find more options when looking for a software developer.
              Pay-as-you-go, of course!
            </p>
            <button className="inline-flex text-lg h-15 mr-10 items-center text-white bg-oranye-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Learn Our Services
            </button>
            <SectionTitle className="mt-6 text-black-100">
              Our Handled Brands
            </SectionTitle>
            <ul className="flex justify-center  -mx-5 mt-5">
              <li className="mr-10">
                <img src="/logo-toyota.png" className="rounded-full w-20" />
              </li>
              <li className="mr-10">
                <img src="/Lexus-Logo.png" className="rounded-full w-20" />
              </li>
              <li className="mr-10">
                <img src="/logo-toyota.png" className="rounded-full w-20" />
              </li>
              <li className="mr-10">
                <img src="/Lexus-Logo.png" className="rounded-full w-20" />
              </li>
              <li className="mr-10">
                <img src="/logo-toyota.png" className="rounded-full w-20" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
