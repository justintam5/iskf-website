import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 text-center p-16">
      <p>
        &copy; {new Date().getFullYear()} Halifax International Shotokan Karate
        Federation. All Rights Reserved.
      </p>
    </footer>
  );
}
