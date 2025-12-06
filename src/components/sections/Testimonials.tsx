import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Testimonials() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote: t("testimonials.items.t1.quote"),
      author: t("testimonials.items.t1.author"),
      role: t("testimonials.items.t1.role"),
      company: t("testimonials.items.t1.company"),
    },
    {
      quote: t("testimonials.items.t2.quote"),
      author: t("testimonials.items.t2.author"),
      role: t("testimonials.items.t2.role"),
      company: t("testimonials.items.t2.company"),
    },
    {
      quote: t("testimonials.items.t3.quote"),
      author: t("testimonials.items.t3.author"),
      role: t("testimonials.items.t3.role"),
      company: t("testimonials.items.t3.company"),
    },
    {
      quote: t("testimonials.items.t4.quote"),
      author: t("testimonials.items.t4.author"),
      role: t("testimonials.items.t4.role"),
      company: t("testimonials.items.t4.company"),
    },
    {
      quote: t("testimonials.items.t5.quote"),
      author: t("testimonials.items.t5.author"),
      role: t("testimonials.items.t5.role"),
      company: t("testimonials.items.t5.company"),
    },
    {
      quote: t("testimonials.items.t6.quote"),
      author: t("testimonials.items.t6.author"),
      role: t("testimonials.items.t6.role"),
      company: t("testimonials.items.t6.company"),
    },
    {
      quote: t("testimonials.items.t7.quote"),
      author: t("testimonials.items.t7.author"),
      role: t("testimonials.items.t7.role"),
      company: t("testimonials.items.t7.company"),
    },
    {
      quote: t("testimonials.items.t8.quote"),
      author: t("testimonials.items.t8.author"),
      role: t("testimonials.items.t8.role"),
      company: t("testimonials.items.t8.company"),
    },
    {
      quote: t("testimonials.items.t9.quote"),
      author: t("testimonials.items.t9.author"),
      role: t("testimonials.items.t9.role"),
      company: t("testimonials.items.t9.company"),
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleArrowClick = (direction: "prev" | "next") => {
    if (direction === "prev") {
      prevPage();
    } else {
      nextPage();
    }
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextPage();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextPage]);

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {t("testimonials.title")}{" "}
            <span className="text-gradient">{t("testimonials.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => handleArrowClick("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:border-cyan/50 hover:bg-cyan/10 transition-all"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </button>

          <button
            onClick={() => handleArrowClick("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-12 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:border-cyan/50 hover:bg-cyan/10 transition-all"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden px-2 sm:px-8 lg:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {currentTestimonials.map((testimonial, index) => (
                  <div
                    key={`${currentPage}-${index}`}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-cyan/20 transition-colors"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-cyan text-cyan"
                        />
                      ))}
                    </div>
                    <div className="relative mb-4">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-cyan/10" />
                      <p className="text-foreground leading-relaxed relative z-10 text-sm sm:text-base">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? "bg-cyan w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

