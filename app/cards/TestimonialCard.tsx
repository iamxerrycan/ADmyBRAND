"use client";

import Image from "next/image";

interface Props {
  photo: string;
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({ photo, name, role, quote }: Props) {
  return (
    <article
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 text-center border border-gray-200 dark:border-gray-800 mx-auto max-w-xl w-full"
      aria-label={`Testimonial from ${name}`}
    >
      <div className="mb-4 sm:mb-6">
        <Image
          src={photo}
          width={100}
          height={100}
          alt={`Photo of ${name}`}
          className="rounded-full mx-auto object-cover ring-4 ring-blue-500/20 shadow-md"
          priority
        />
      </div>
      <blockquote className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 italic text-base sm:text-lg leading-relaxed">
        “{quote}”
      </blockquote>
      <footer>
        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
          {name}
        </h4>
        <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
      </footer>
    </article>
  );
}
