interface SimpleContentProps {
  divClassName?: string;
  title: string;
  subTitle?: string;
  superTitle?: string;
  text: string;
}

export default function SimpleContent({
  title,
  subTitle,
  superTitle,
  text,
  divClassName,
}: SimpleContentProps) {
  return (
    <div className={"py-5 text-center  px-8" + (divClassName ?? "")}>
      <h2 className="text-base font-semibold leading-5 text-iskfRed mx-auto">
        {superTitle}
      </h2>
      <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-3">
        {title}
      </p>
      <h2 className="text-base font-semibold leading-10 text-iskfRed">
        {subTitle}
      </h2>
      <p className="text-base text-gray-500">{text}</p>
    </div>
  );
}
