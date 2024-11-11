import { useState } from "react";
import { Quote } from "lucide-react";

import Introduction1 from "../assets/Introduction1.png";
import Swati from "../assets/Swati_Brainy.jpeg.jpg";
import Amit from "../assets/Amit_Brainy.jpeg.jpg";
import Divyesh from "../assets/Divyesh_Brainy.jpeg.jpg";
import Jyoti from "../assets/Jyoti_Brainy.jpeg.jpg";
import Khushbu from "../assets/Khushbu_Brainy.jpeg.jpg";
const Reviews = () => {
  const testimonials = [
    {
      quote:
        "Brainy Abacus has boosted my child's confidence in math beyond my expectations!",
      author: "Mrs. Swati",
      image: Swati, // Add your image path here
    },
    {
      quote:
        "The Brainy Abacus program has really impacted my child's ability to focus and overall academic performance.",
      author: "Mr. Amit",
      image: Amit, // Add your image path here
    },
    {
      quote:
        "It's a game-changer! This program has really improved the math skills and the self-confidence of my child significantly.",
      author: "Mr. Divyesh",
      image: Divyesh, // Add your image path here
    },
    {
      quote:
        "The interactive lessons and personalized progress tracking have made learning both fun and effective for my child. Thank you, Brainy Abacus!",
      author: "Mrs. Jyoti",
      image: Jyoti, // Add your image path here
    },
    {
      quote:
        "Skepticism aside, the results speak for themselves. The Brainy Abacus program built a great math foundation and fueled my child's love for learning.",
      author: "Mrs. Khushbu",
      image: Khushbu, // Add your image path here
    },
  ];

  const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    const getVisibleTestimonials = () => {
      const visibleItems = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visibleItems.push(testimonials[index]);
      }
      return visibleItems;
    };

    const TestimonialCard = ({ testimonial }) => {
      const ImageContainer = () => (
        <div
          className={`absolute left-1/2 -top-8 -translate-x-1/2 w-24 h-24 rounded-full bg-white shadow-lg border-4 border-white overflow-hidden ${
            testimonial.link
              ? "cursor-pointer hover:scale-105 transition-transform"
              : ""
          }`}
        >
          <img
            src={testimonial.image || "/api/placeholder/64/64"}
            alt={`${testimonial.author}'s testimonial`}
            className="w-full h-full object-cover"
          />
        </div>
      );

      return (
        <div className="relative bg-white rounded-lg shadow-lg p-6 flex-1 pt-16">
          <ImageContainer />

          <div className="text-4xl mb-4 text-center">
            <Quote size={30} color="#0470b5" />
          </div>
          <p className="mb-4">{testimonial.quote}</p>
          <p className="italic">— {testimonial.author}</p>
        </div>
      );
    };

    return (
      <div
        className="w-full max-w-6xl mx-auto py-8 mt-5 px-4 poppins-light"
        id="reviews"
      >
        <div className="text-2xl text-center font-medium poppins-light-italic mb-16">
          "Hear from Parents Who've Experienced Remarkable Changes"
        </div>

        <div className="relative">
          {/* Desktop View (3 cards) */}
          <div className="hidden md:flex gap-6 transition-all duration-300">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>

          {/* Mobile View (1 card) */}
          <div className="md:hidden">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-800 w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <TestimonialSlider />
    </div>
  );
};

export default Reviews;
