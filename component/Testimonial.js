import SectionTitle from "./support/SectionTitle";
import ProfileTestimonial from "./ProfileTestimonial";
export default function TestimonialPage() {
  return (
    <section className="bg-gray-100 text-blue-100 body-font">
      <div className="container px-5 py-24 mx-auto items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 px-20 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <SectionTitle className="mt-6 text-gray-600">
            Testimonials
          </SectionTitle>
          <p className="leading-relaxed text-base text-black-100 mb-6">
            Loved by enterpreneurs and tech companies accross the world Loved by
            enterpreneurs and tech companies accross the world
          </p>
        </div>

        <div className="flex flex-wrap px-20 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-10 lg:w-1/3">
            <ProfileTestimonial
              image="/jason-statham.png"
              name="Achmad Zaky"
              profession="CEO Bukalapak"
              workDesc="Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world"
            />
          </div>
          <div className="p-10 lg:w-1/3">
            <ProfileTestimonial
              image="/jason-statham.png"
              name="Mark Zuckerberg"
              profession="CEO Facebook"
              workDesc="Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world Loved by enterpreneurs and tech companies accross the world"
            />
          </div>
          <div className="p-10 lg:w-1/3">
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
