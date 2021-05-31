import SectionTitle from "./support/SectionTitle";
export default function PartnerPage() {
  return (
    <section className="body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <SectionTitle className="text-gray-600">Our Partner</SectionTitle>
        </div>
        <div className="flex flex-wrap sm:-m-4 px-20 -mx-4 -mb-10 -mt-4 items-center md:space-y-0 space-y-6">
          <div className="p-10 lg:w-1/5">
            <img src="/jamstack-logo.png" className="h-10" />
          </div>
          <div className="p-10 lg:w-1/5">
            <img src="/nextjs-logo.png" className="h-20" />
          </div>
          <div className="p-10 lg:w-1/5">
            <img src="/freelancer-logo.png" className="h-20" />
          </div>
          <div className="p-10 lg:w-1/5">
            <img src="/jamstack-logo.png" className="h-10" />
          </div>
          <div className="p-10 lg:w-1/5">
            <img src="/freelancer-logo.png" className="h-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
