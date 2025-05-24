
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">About Me</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-3 mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm a data analyst with a passion for uncovering insights from complex datasets and communicating those findings through compelling visualizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <User className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Personal Info</h3>
                <ul className="space-y-2 text-slate-600">
                  <li><span className="font-medium">Name:</span> Isaisah Matthew</li>
                  <li><span className="font-medium">Phone:</span> +234 8060923418</li>
                  <li><span className="font-medium">Email:</span> isaiahtomatthew@gmail.com</li>
                  <li><span className="font-medium">Location:</span> Enugu Nigeria</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Experience</h3>
                <ul className="space-y-4 text-slate-600">
                  <li>
                    <span className="font-medium block"> Intern Data Analyst</span>
                    <span className="text-sm text-slate-500"> Integrated Elvee Service Ltd (2022 - 2023)</span>
                  </li>
                  
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Education</h3>
                <ul className="space-y-4 text-slate-600">
                  <li>
                    <span className="font-medium block"> Data analysis & visualization</span>
                    <span className="text-sm text-slate-500"> Integrated Elvee Service Ltd (2022 - 2023)</span>
                  </li>
                  <li>
                    <span className="font-medium block"> Alex the Analyst BootCamp</span>
                    <span className="text-sm text-slate-500"> (2023 - 2024)</span>
                  </li>
                  <li>
                    <span className="font-medium block"> Higer National Diploma Computer Science</span>
                    <span className="text-sm text-slate-500"> Institute of Managment and Technology  (2004- 2010)</span>
                  </li>
                  <li>
                    <span className="font-medium block">Certifications</span>
                    <span className="text-sm text-slate-500">Data Analysis & Visualization Certificate</span>
                    <span className="text-sm text-slate-500 block">Data Analyst BootCamp Certificate</span>

                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-slate-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">My Journey</h3>
          <p className="text-slate-600 mb-4">
            I began my career with a strong foundation in statistics and data analysis, driven by my curiosity to understand the stories that numbers can tell. Over the years, I've developed expertise in data visualization, statistical analysis, and machine learning techniques.
          </p>
          <p className="text-slate-600 mb-4">
            My experience spans across multiple industries including finance, healthcare, and e-commerce, where I've collaborated with cross-functional teams to deliver data-driven solutions that impact business decisions.
          </p>
          <p className="text-slate-600">
            I'm passionate about transforming raw data into actionable insights and creating visualizations that make complex information accessible and meaningful to stakeholders at all levels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
