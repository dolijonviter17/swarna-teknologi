export default function SupportItem({ image, title, description }) {
  return (
    <>
      <div className="flex justify-center">
        <img src={image} className="h-20" />
      </div>
      <h2 className="text-lg mt-5 text-center text-blue-100 font-black">
        {title}
      </h2>
      <p className="text-sm leading-relaxed mt-2 text-black-100 text-center md:text-center">
        {description}
      </p>
    </>
  );
}
