import React from "react";
import CardComponent from "../components/CardComponent";

const programData = [
  {
    title: "Apply for Visa Application",
    description: "Start your visa application process today.",
    highlights: [
      "Guidance on required documents",
      "Step-by-step application assistance",
      "Latest visa regulations",
    ],
  },
  {
    title: "Migration Options",
    description: "Explore various migration pathways.",
    highlights: [
      "Find the best country for you",
      "Permanent residency programs",
      "Family sponsorship opportunities",
    ],
  },
  {
    title: "Consultation and Assessment",
    description: "Get expert advice on your options.",
    highlights: [
      "Personalized eligibility assessment",
      "One-on-one consultation with experts",
      "Comprehensive migration planning",
    ],
  },
  {
    title: "Work and Study",
    description: "Opportunities for working while studying.",
    highlights: [
      "Scholarships and financial aid options",
      "Visa programs with work permits",
      "Internship and job placement assistance",
    ],
  },
];

const Programs = () => {
  return (
    <div className="px-2 py-5 cursor-default">
      <h1 className=" text-center scroll-m-20 font-extrabold tracking-tight lg:text-5xl">
        What we offer
      </h1>
      <section className="p-6 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programData.map((program, index) => (
            <CardComponent
              key={index}
              title={program.title}
              description={program.description}
              highlights={program.highlights}
              className="h-full"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Programs;
