"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data/TestimonialData";
import { variants } from "../utils/variants";
import TestimonialCard from "../cards/TestimonialCard";

export default function TestimonialsCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonialIndex =
    ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = Array.from(containerRef.current.children) as HTMLElement[];
    const heights = cards.map((card) => card.offsetHeight);
    const maxHeight = Math.max(...heights);
    setContainerHeight(maxHeight);
  }, [page]);

  return (
    <section
      id="testimonials"
      className="bg-gray-50 dark:bg-gray-950 py-20 px-4 sm:px-6 md:px-8 lg:px-16"
      aria-label="Customer Testimonials"
    >
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          What Our Customers Say
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          Real stories from real users who achieved results.
        </p>
      </div>

      <div className="relative flex items-center justify-center max-w-3xl mx-auto">
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous Testimonial"
          className="z-20 bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          ‹
        </button>

        <div
          ref={containerRef}
          className="overflow-hidden relative flex-1 mx-4 sm:mx-6"
          style={{ height: containerHeight || "auto", minHeight: 300 }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <TestimonialCard {...testimonials[testimonialIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => paginate(1)}
          aria-label="Next Testimonial"
          className="z-20 bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          ›
        </button>
      </div>
    </section>
  );
}
