import { Testimonial } from "@/content/testimonials";
import { MultiLineText } from "@/helpers/text";

interface TestimonialProps {
  testimonial: Testimonial;
}

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <section className="relative isolate overflow-hidden px-6 py-4 sm:py-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-2">
          <blockquote className="text-center text-base leading-snug text-gray-600 sm:text-lg sm:leading-normal">
            <div className="inline italic">
              <MultiLineText text={`"` + testimonial.body + `"`} />
            </div>
          </blockquote>
          <figcaption className="mt-2">
            <div className="mt-4 flex items-center justify-center space-x-3 text-lg">
              <div className="font-semibold text-gray-900">
                {testimonial.author}
              </div>
              <div className="text-gray-600">{testimonial.occupation}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
