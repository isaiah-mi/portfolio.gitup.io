
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-6">
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-full h-full opacity-5">
          {/* Data visualization pattern */}
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#grid)" />
            {/* Data points */}
            <circle cx="50" cy="150" r="4" fill="teal" />
            <circle cx="100" cy="120" r="4" fill="teal" />
            <circle cx="150" cy="170" r="4" fill="teal" />
            <circle cx="200" cy="90" r="4" fill="teal" />
            <circle cx="250" cy="140" r="4" fill="teal" />
            <circle cx="300" cy="110" r="4" fill="teal" />
            {/* Line chart */}
            <path d="M50,150 L100,120 L150,170 L200,90 L250,140 L300,110" stroke="teal" strokeWidth="5" fill="none" />
          </svg>
        </div>
      </div>

      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center md:text-left md:flex items-center">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
              <span className="block">Isaiah the Data Analyst</span>
              <span className="text-teal-600">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto md:mx-0">
              Transforming raw data into meaningful insights and compelling visualizations to drive informed decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={scrollToProjects}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-6 h-auto text-lg transition-all"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-6 h-auto text-lg transition-all"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:w-2/5 mt-12 md:mt-0 hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-3">
              <div className="bg-slate-800 p-4 rounded-md">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-teal-400 text-xs md:text-sm font-mono whitespace-pre">
                  <span className="text-blue-400">import</span> pandas <span className="text-blue-400">as</span> pd<br />
                  <span className="text-blue-400">import</span> matplotlib.pyplot <span className="text-blue-400">as</span> plt<br />
                  <br />
                  <span className="text-green-400"># Load the dataset</span><br />
                  df = pd.read_csv(<span className="text-yellow-300">'sales_data.csv'</span>)<br />
                  <br />
                  <span className="text-green-400"># Data analysis</span><br />
                  results = df.groupby(<span className="text-yellow-300">'region'</span>)[<span className="text-yellow-300">'revenue'</span>].sum()<br />
                  <br />
                  <span className="text-blue-400">print</span>(results)<br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center">
          <span className="text-sm text-slate-500 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
