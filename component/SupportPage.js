import SectionTitle from "./support/SectionTitle";
import SupportItem from "./SupportItem";
export default function SupportPage() {
  return (
    <section class="text-blue-600 body-font">
      <div class="container px-5 py-24 mx-auto  items-center md:flex-row flex-col">
        <div class="flex flex-col md:pr-10 px-20 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <SectionTitle className="mt-6 text-gray-600">
            What We Supports ?
          </SectionTitle>
          <p class="leading-relaxed text-base text-black-100 mb-6">
            Loved by enterpreneurs and tech companies accross the world Loved by
            enterpreneurs and tech companies accross the world
          </p>
        </div>
        <div class="flex flex-wrap sm:-m-4 px-20 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-10 lg:w-1/4">
            <SupportItem
              image="/Assets/api-rest.png"
              title="Design"
              description="Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world"
            />
          </div>
          <div class="p-10 lg:w-1/4">
            <SupportItem
              image="/Assets/coding.png"
              title="Backend Dev"
              description="Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world"
            />
          </div>
          <div class="p-10 lg:w-1/4">
            <SupportItem
              image="/Assets/graphic-design.png"
              title="Web and Mobile Dev"
              description="Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world"
            />
          </div>
          <div class="p-10 lg:w-1/4">
            <SupportItem
              image="/Assets/campaign.png"
              title="Digital Strategy"
              description="Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
