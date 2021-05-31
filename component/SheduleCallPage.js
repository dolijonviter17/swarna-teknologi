import SectionTitle from "../component/support/SectionTitle";

export default function SheduleCallPage() {
  return (
    <section class="bg-blue-200 text-blue-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-4 -mb-10">
          <div class="sm:w-1/2 px-20">
            <h2 class="title-font text-4xl font-black text-blue-100 mb-3 text-left">
              Wanna get know more we can help you?
            </h2>
            <p class="leading-relaxed text-base text-black-100 mb-6">
              Find more options when looking for a software developer.
              Pay-as-you-go, of course!
            </p>
            <button className="inline-flex text-lg h-15 mr-10 items-center text-white bg-blue-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Learn Our Services
            </button>
          </div>
          <div class="sm:w-1/2 px-5">
            <div class="rounded-lg overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="/Assets/Brainstorming-pana.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
