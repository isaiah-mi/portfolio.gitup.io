
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Data Analyst Portfolio</h3>
            <p className="text-gray-300 mb-4">
              Transforming complex data into actionable insights and compelling visualizations.
            </p>
            <div className="flex space-x-4">
              <FooterSocialLink href="#" label="LinkedIn" />
              <FooterSocialLink href="#" label="GitHub" />
              <FooterSocialLink href="#" label="Twitter" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#home" label="Home" />
              <FooterLink href="#skills" label="Skills" />
              <FooterLink href="#projects" label="Portfolio" />
              <FooterLink href="#about" label="About" />
              <FooterLink href="#contact" label="Contact" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Data Analysis" />
              <FooterLink href="#" label="Data Visualization" />
              <FooterLink href="#" label="Dashboard Development" />
              <FooterLink href="#" label="Statistical Analysis" />
              <FooterLink href="#" label="Data Consultancy" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Nigeria</p>
              <p>isaiahtomatthew@gmail.com</p>
              <p>+2348060923418</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Isaiah Matthew. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-300 hover:text-white transition-colors"
      >
        {label}
      </a>
    </li>
  );
};

const FooterSocialLink = ({ href, label }) => {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
    >
      <span className="sr-only">{label}</span>
      {label === "LinkedIn" && "Li"}
      {label === "GitHub" && "Git"}
      {label === "Twitter" && "X"}
    </a>
  );
};

export default Footer;
