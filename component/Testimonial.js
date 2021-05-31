import SectionTitle from "./support/SectionTitle";
import ProfileTestimonial from "./ProfileTestimonial";
export default function TestimonialPage() {
  return (
    <section class="bg-gray-100 text-blue-100 body-font">
      <div class="container px-5 py-24 mx-auto items-center md:flex-row flex-col">
        <div class="flex flex-col md:pr-10 px-20 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <SectionTitle className="mt-6 text-gray-600">
            Testimonials
          </SectionTitle>
          <p class="leading-relaxed text-base text-black-100 mb-6">
            Loved by enterpreneurs and tech companies accross the world Loved by
            enterpreneurs and tech companies accross the world
          </p>
        </div>

        <div class="flex flex-wrap px-20 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-10 lg:w-1/3">
            <ProfileTestimonial
              image="/jason-statham.png"
              name="Achmad Zaky"
              profession="CEO Bukalapak"
              workDesc="Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world"
            />
          </div>
          <div class="p-10 lg:w-1/3">
            <ProfileTestimonial
              image="/jason-statham.png"
              name="Mark Zuckerberg"
              profession="CEO Facebook"
              workDesc="Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world"
            />
          </div>
          <div class="p-10 lg:w-1/3">
            <ProfileTestimonial
              image="/jason-statham.png"
              name="Sundar Pichai"
              profession="CEO Google"
              workDesc="Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
