import Link from "next/link";

export default function Button() {
  return (
    <Link
      href="/current-members"
      className="rounded-md bg-iskfRed px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-iskfRed-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iskfRed-dark leading-6"
    >
      Current Members <span aria-hidden="true">→</span>
    </Link>
  );
}
