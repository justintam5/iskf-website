import { notices } from "@/content/notices";
import { MultiLineText } from "@/helpers/text";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { IconExclamationCircle } from "@tabler/icons-react";
import Image from "next/image";

export default function Notices() {
  return (
    <div className="overflow-hidden bg-white py-8 sm:py-16">
      <div className="px-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-iskfRed">
                Last Updated: {notices.lastUpdated}
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Notices
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {notices.noticeList.map((notice) => (
                  <div key={notice.title} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <IconExclamationCircle
                        className="absolute left-1 top-1 h-5 w-5 text-iskfRed"
                        aria-hidden="true"
                      />
                      {notice.title}
                    </dt>{" "}
                    {notice.body && (
                      <dd>
                        <MultiLineText text={notice.body} />
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/iskf-tiger.png"
            className="rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={870}
            height={922}
            alt="iskf tiger"
          />
        </div>
      </div>
    </div>
  );
}
