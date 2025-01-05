"use client";
import HeaderSection from "@/components/header/header";
import { testimonialArray, TestimonialInfo } from "./testimonials";
import React, { useEffect } from "react";
import TestimonialBlockLeft from "@/components/testimonial-block/testimonial-block-left";
import TestimonialBlockRight from "@/components/testimonial-block/testimonial-block-right";

const TestimonialPage = () => {
  const [testimonials, setTestimonials] = React.useState<TestimonialInfo[]>([]);

  useEffect(() => {
    setTestimonials(testimonialArray);
  }, []);
  return (
    <>
      <HeaderSection />
      {testimonials.map((item, index) => {
        return index % 2 == 0 ? (
          <TestimonialBlockLeft testimonialInfo={item} key={index} />
        ) : (
          <TestimonialBlockRight testimonialInfo={item} key={index} />
        );
      })}
    </>
  );
};

export default TestimonialPage;
