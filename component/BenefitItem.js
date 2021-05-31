export default function BenefitItem({ image, title, description }) {
  return (
    <>
      <div className="flex items-start mr-5">
        <img
          src={image}
          className="h-20 mr-6 border border-blue-100 rounded inline-block"
        />
        <div>
          <h2 className="text-lg text-blue-100 font-black">{title}</h2>
          <p className="text-sm leading-relaxed mt-2 text-black-100 text-left md:text-left">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
