import SectionTitle from "./support/SectionTitle";
import BenefitItem from "./BenefitItem";
export default function BenefitsPage() {
  return (
    <section class="bg-gray-100 text-blue-100 body-font">
      <div class="container px-5 py-24 mx-auto items-center md:flex-row flex-col">
        <div class="flex flex-col md:pr-10 px-20 md:mb-0 mb-6 pr-0 w-full sm:items-center md:text-center md:w-auto md:text-left text-center">
          <SectionTitle className="mt-6 text-gray-600">
            Your Benefits
          </SectionTitle>
          <p class="leading-relaxed text-base text-black-100 mb-6">
            Loved by enterpreneurs and tech companies accross the world Loved by
            enterpreneurs and tech companies accross the world
          </p>
        </div>
        <div class="flex flex-wrap sm:-m-4 px-20 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-10 lg:w-1/2">
            <BenefitItem
              image="/benefitItem1.png"
              title="Scala Services as You Want"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt."
            />
          </div>
          <div class="p-10 lg:w-1/2">
            <BenefitItem
              image="/benefitItem1.png"
              title="Scala Services as You Want"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt."
            />
          </div>
          <div class="p-10 lg:w-1/2">
            <BenefitItem
              image="/benefitItem1.png"
              title="Scala Services as You Want"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt."
            />
          </div>
          <div class="p-10 lg:w-1/2">
            <BenefitItem
              image="/benefitItem1.png"
              title="Scala Services as You Want"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt."
            />
          </div>
        </div>
        <div className="flex justify-center  mt-7">
          <button className="inline-flex text-lg h-15 mr-10 items-center text-white bg-oranye-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Get The Service
          </button>
        </div>
      </div>
    </section>
  );
}
