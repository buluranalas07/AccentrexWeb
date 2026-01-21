import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, Target, HeartHandshake, Star } from "lucide-react";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center p-6 space-y-8 cursor-default">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <Card className="hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out border-0 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <HeartHandshake className="w-8 h-8 text-blue-600" /> About Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 leading-relaxed text-center">
              Welcome to{" "}
              <span className="font-semibold text-gray-800">Accentrex</span>, we
              specialize in providing reliable and efficient visa application
              services. We are aiming to simplify the visa process for
              individuals and businesses, ensuring a smooth and hassle-free
              experience. Whether you're traveling for tourism, work, study, or
              immigration, our expert team is dedicated to assisting you every
              step of the way.
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out border-0 bg-gradient-to-r from-green-50 to-teal-50">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <Target className="w-8 h-8 text-green-600" /> Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 leading-relaxed text-center">
              At <span className="font-semibold text-gray-800">Accentrex</span>,
              we are dedicated to making the visa application process simple,
              efficient, and stress-free for individuals and businesses. Our
              mission is to provide expert guidance, fast processing, and
              personalized service to help our clients achieve their travel and
              immigration goals with confidence.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out border-0 bg-gradient-to-r from-pink-50 to-red-50">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <CheckCircle className="w-8 h-8 text-pink-600" /> Our Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
              <li>
                <strong>Integrity:</strong> We operate with honesty and
                transparency.
              </li>
              <li>
                <strong>Customer Focus:</strong> Your satisfaction is our
                priority.
              </li>
              <li>
                <strong>Excellence:</strong> We strive for the highest standards
                in service.
              </li>
              <li>
                <strong>Efficiency:</strong> We value your time and work to
                provide quick solutions.
              </li>
              <li>
                <strong>Confidentiality:</strong> Your personal information is
                always protected.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out border-0 bg-gradient-to-r from-yellow-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <Star className="w-8 h-8 text-yellow-600" /> Why Choose Us?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 leading-relaxed"></CardDescription>
            <ul className="text-gray-600 leading-relaxed list-disc list-inside mt-2 space-y-2">
              <li>
                {" "}
                <strong>Expert Support:</strong> Professional support at every
                step.
              </li>
              <li>
                <strong>Fast Processing:</strong> Quick and efficient
                application handling.
              </li>
              <li>
                <strong>Personalized Service:</strong> Solutions tailored to
                your needs
              </li>
              <li>
                <strong>High Success Rate:</strong> Proven track record of
                approvals.
              </li>
              <li>
                <strong>Confidentiality:</strong> Your documents are safe with
                us.
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default About;
