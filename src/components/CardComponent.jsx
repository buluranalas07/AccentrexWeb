import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const CardComponent = ({ className, title, description, highlights = [] }) => {
  return (
    <Card
      className={`cursor-default text-center h-full flex flex-col p-2 space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg ${className}`}
    >
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="grid grid-cols-[20px_1fr] items-start gap-2 pb-4 last:pb-0 hover:bg-gray-100 p-2 rounded-md transition-colors duration-300"
          >
            <span className="text-green-500 text-xl">✔</span>

            <div>
              <p>
                {typeof highlight === "string" ? highlight : highlight.title}
              </p>
              <p>
                {typeof highlight === "string" ? "" : highlight.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="pt-4">
        <Button
          asChild
          className="w-full transition-colors duration-300 hover:bg-green-600"
        >
          <Link to="/pages/inquiry">
            <Check className="mr-2" /> Apply now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
