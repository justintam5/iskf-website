"use client";
import Link from "next/link";
import { Notices, OurDojo } from "@/components";
import Testimonials from "@/components/Testimonials";
import { useRef } from "react";

export default function Home() {
  const learnMoreRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    learnMoreRef.current!.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-28 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Halifax International Shotokan Karate Association
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Location:{" "}
              <a href="">
                King&apos;s College gymnasium, Castine Way, Halifax, NS B3H 2A1
              </a>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/current-members"
                className="rounded-md bg-iskfRed px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-iskfRed-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iskfRed-dark leading-6"
              >
                Beginners <span aria-hidden="true">→</span>
              </Link>
              <button
                onClick={handleScroll}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Member Notices
              </button>
            </div>
          </div>
        </div>
      </div>
      <div ref={learnMoreRef} className="py-16">
        <OurDojo />
      </div>
      <Notices />
      <Testimonials />
    </div>
  );
}
