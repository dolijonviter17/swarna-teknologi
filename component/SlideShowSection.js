import SectionTitle from "./support/SectionTitle";
export default function SlideShowSection() {
  return (
    <section className="bg-blue-100 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <SectionTitle className="text-white">Our Works</SectionTitle>
        </div>
      </div>
    </section>
  );
}
