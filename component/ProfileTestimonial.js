export default function ProfileTestimonial({
  image,
  name,
  profession,
  workDesc,
}) {
  return (
    <>
      <div className="flex">
        <img className="h-10 mr-6 rounded-full" src={image} />
        <div>
          <h4 className="text-lg text-black font-black">{name}</h4>
          <p className="text-sm">{profession}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed mt-2 text-black-100 text-left md:text-left">
        {workDesc}
      </p>
    </>
  );
}
