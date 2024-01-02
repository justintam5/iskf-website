import { testimonials } from "@/content/testimonials";
import { Testimonial } from ".";

export default function Testimonials() {
  return (
    <div>
      <div className="flex-col text-center">
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
          Testimonials
        </p>
        <h2 className="text-base font-semibold leading-10 text-iskfRed">
          Here are just a few testimonials from our students
        </h2>
      </div>
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.author} testimonial={testimonial} />
      ))}
    </div>
  );
}
