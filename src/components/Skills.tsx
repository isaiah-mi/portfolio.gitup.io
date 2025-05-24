
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    category: "Data Analysis",
    items: [
      { name: "Python", level: 90 },
      { name: "R", level: 85 },
      { name: "SQL", level: 95 },
      { name: "Excel/Google Sheets", level: 95 },
    ]
  },
  {
    category: "Data Visualization",
    items: [
      { name: "Tableau", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Matplotlib", level: 90 },
      { name: "Seaborn", level: 85 },
    ]
  },
  {
    category: "Machine Learning",
    items: [
      { name: "Scikit-learn", level: 80 },
      { name: "TensorFlow", level: 70 },
      { name: "Statistical Analysis", level: 85 },
      { name: "Feature Engineering", level: 80 },
    ]
  },
];

const Skills = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Technical Skills</h2>
        <div className="w-20 h-1 bg-teal-600 mx-auto mt-4"></div>
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          I specialize in transforming complex data into clear, actionable insights through a combination of analytical tools and visualization techniques.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, groupIndex) => (
          <div key={groupIndex} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">
              {skillGroup.category}
            </h3>
            
            <div className="space-y-6">
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-slate-200" 
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Data Cleaning & Preprocessing</h3>
            <p className="text-slate-600">Expert at transforming messy data into clean, usable datasets.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Statistical Analysis</h3>
            <p className="text-slate-600">Applying statistical methods to extract meaningful patterns from data.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Reporting & Documentation</h3>
            <p className="text-slate-600">Creating clear, actionable reports and dashboards for stakeholders.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Predictive Modeling</h3>
            <p className="text-slate-600">Building models to forecast trends and inform strategic decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
