export default function SectionTitle({ className, children }) {
  const addClassName = className ? ` ${className}` : "";
  return (
    <h2 className={`text-2xl md:text-3xl font-black  ${addClassName}`}>
      {children}
    </h2>
  );
}
