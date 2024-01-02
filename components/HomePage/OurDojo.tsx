import { dojoDescription } from "@/content/home";
import { SimpleContent } from "@/components";

export default function OurDojo() {
  return (
    <SimpleContent
      title="Our Dojo"
      text={dojoDescription}
      subTitle="Established in 1979 by Senseis Tony and Danny Tam"
    />
  );
}
