import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  details: {
    objective: string;
    methodology: string;
    results: string;
    tools: string[];
    charts?: boolean;
  };
}

// Project Detail Component
const ProjectDetail = ({ project }: { project: Project }) => (
  <div className="space-y-6">
    <div className="rounded-lg overflow-hidden h-64">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
    </div>
    
    <div>
      <h3 className="text-xl font-semibold text-slate-700 mb-2">Project Objective</h3>
      <p className="text-slate-600">{project.details.objective}</p>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold text-slate-700 mb-2">Methodology</h3>
      <p className="text-slate-600">{project.details.methodology}</p>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold text-slate-700 mb-2">Results & Impact</h3>
      <p className="text-slate-600">{project.details.results}</p>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold text-slate-700 mb-2">Tools & Technologies</h3>
      <div className="flex flex-wrap gap-2">
        {project.details.tools.map((tool, index) => (
          <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700">
            {tool}
          </Badge>
        ))}
      </div>
    </div>
    
    {project.details.charts && (
      <div>
        <h3 className="text-xl font-semibold text-slate-700 mb-2">Visualizations</h3>
        <div className="bg-slate-100 p-6 rounded-lg flex items-center justify-center h-64">
          <p className="text-slate-500 text-center">Interactive charts would be displayed here. <br/>Click links below to see full project details.</p>
        </div>
      </div>
    )}
    
    <div className="flex gap-4 pt-4">
      {project.demoUrl && (
        <Button asChild className="bg-teal-600 hover:bg-teal-700">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">View Demo</a>
        </Button>
      )}
      {project.repoUrl && (
        <Button variant="outline" asChild className="border-teal-600 text-teal-600 hover:bg-teal-50">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">View Repository</a>
        </Button>
      )}
    </div>
  </div>
);

// Project Card Component
const ProjectCard = ({ 
  project, 
  onSelect 
}: { 
  project: Project, 
  onSelect: (project: Project) => void 
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{project.title}</CardTitle>
          <Badge variant="outline" className="bg-slate-100">
            {project.category}
          </Badge>
        </div>
        <CardDescription className="text-slate-500">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="w-full bg-teal-600 hover:bg-teal-700"
              onClick={() => onSelect(project)}
            >
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-slate-800">{project.title}</DialogTitle>
            </DialogHeader>
            <ProjectDetail project={project} />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Sales Analysis",
      description: "Analyzed sales data for an e-commerce company to identify trends and opportunities for growth.",
      image: "src/components/images/dash.png",
      category: "Data Analysis",
      tags: ["Python", "Pandas", "Matplotlib", "SQL"],
      demoUrl: "#",
      repoUrl: "#",
      details: {
        objective: "To analyze sales patterns, customer behavior, and product performance to identify growth opportunities and optimize inventory management.",
        methodology: "Utilized Python and Pandas for data cleaning and analysis. Applied statistical methods to identify trends and seasonal patterns. Created visualizations with Matplotlib and Seaborn.",
        results: "Identified top-performing products and underperforming categories. Discovered seasonal trends that influenced inventory decisions. Segmented customers based on purchase behavior.",
        tools: ["Python", "Pandas", "SQL", "Matplotlib", "Seaborn"],
        charts: true
      }
    },
    {
      id: 2,
      title: "Customer Churn Prediction",
      description: "Built a predictive model to identify customers at risk of churning from a subscription service.",
      image: "src/components/images/dash.png",
      category: "Machine Learning",
      tags: ["Python", "Scikit-learn", "Pandas", "Tableau"],
      demoUrl: "#",
      repoUrl: "#",
      details: {
        objective: "To develop a predictive model that identifies customers likely to cancel their subscription, enabling proactive retention strategies.",
        methodology: "Used historical customer data to train several machine learning models. Applied feature engineering to enhance model performance. Evaluated models using accuracy, precision, recall, and F1 scores.",
        results: "Achieved 87% accuracy in predicting customer churn. Identified key factors contributing to churn. Created an interactive dashboard for the customer success team.",
        tools: ["Python", "Scikit-learn", "Pandas", "Tableau"],
        charts: true
      }
    },
    {
      id: 3,
      title: "Financial Market Analysis",
      description: "Analyzed stock market data to identify investment opportunities and patterns.",
      image: "src/components/images/dash.png",
      category: "Data Analysis",
      tags: ["R", "ggplot2", "tidyverse", "Time Series"],
      details: {
        objective: "To analyze historical stock market data and identify patterns that could inform investment strategies.",
        methodology: "Collected and cleaned financial data from multiple sources. Applied time series analysis to identify trends and seasonal patterns. Created visualizations to communicate findings.",
        results: "Identified correlations between market sectors. Created predictive models for stock price movements. Developed interactive visualizations for exploring market trends.",
        tools: ["R", "ggplot2", "tidyverse", "Time Series Analysis"],
        charts: true
      }
    },
    {
      id: 4,
      title: "Healthcare Patient Analytics",
      description: "Analyzed patient data to improve hospital operations and patient care.",
      image: "src/components/images/dash.png",
      category: "Healthcare",
      tags: ["Python", "SQL", "Power BI", "Statistics"],
      details: {
        objective: "To improve hospital efficiency and patient care through data-driven insights.",
        methodology: "Analyzed patient admission data, treatment outcomes, and resource utilization. Used SQL for data extraction and Python for analysis. Created interactive dashboards with Power BI.",
        results: "Reduced average wait times by 15%. Improved resource allocation based on patient volume patterns. Enhanced patient satisfaction through targeted improvements.",
        tools: ["Python", "SQL", "Power BI", "Statistical Analysis"],
        charts: true
      }
    },
    {
      id: 5,
      title: "Supply Chain Optimization",
      description: "Optimized supply chain operations to reduce costs and improve efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Supply Chain",
      tags: ["Excel", "Power BI", "SQL", "Optimization"],
      details: {
        objective: "To identify inefficiencies in the supply chain and develop strategies to reduce costs and delivery times.",
        methodology: "Collected and analyzed data on suppliers, inventory, transportation, and demand. Built simulation models to test different optimization strategies. Created visualizations to communicate findings.",
        results: "Reduced inventory costs by 12%. Improved delivery times by 18%. Enhanced supplier performance through data-driven feedback.",
        tools: ["Excel", "Power BI", "SQL", "Optimization Techniques"],
        charts: false
      }
    },
    {
      id: 6,
      title: "Social Media Sentiment Analysis",
      description: "Analyzed social media sentiment for a product launch to gauge customer reception.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "NLP",
      tags: ["Python", "NLTK", "Sentiment Analysis", "Visualization"],
      details: {
        objective: "To evaluate public reception to a new product through social media sentiment analysis.",
        methodology: "Scraped social media data using APIs. Applied natural language processing techniques to classify sentiment. Created visualizations to track sentiment over time.",
        results: "Identified key themes in positive and negative feedback. Tracked sentiment trends over the product launch period. Provided actionable insights for product improvements.",
        tools: ["Python", "NLTK", "Sentiment Analysis", "Data Visualization"],
        charts: true
      }
    }
  ];

  const categories = Array.from(new Set(projects.map(p => p.category)));

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Portfolio Projects</h2>
        <div className="w-20 h-1 bg-teal-600 mx-auto mt-4"></div>
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          A showcase of my data analysis work, featuring projects that demonstrate my skills in extracting insights from data.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-slate-100">
            <TabsTrigger value="all" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              All Projects
            </TabsTrigger>
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} onSelect={setActiveProject} />
            ))}
          </div>
        </TabsContent>

        {categories.map(category => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(project => project.category === category)
                .map(project => (
                  <ProjectCard key={project.id} project={project} onSelect={setActiveProject} />
                ))
              }
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Project Detail Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <span className="hidden">{/* Hidden trigger, we'll use the cards to open the dialog */}</span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          {activeProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-slate-800">{activeProject.title}</DialogTitle>
              </DialogHeader>
              <ProjectDetail project={activeProject} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
