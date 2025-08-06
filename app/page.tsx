import ProblemSolutionGraphic from '../components/ProblemSolutionGraphic';
import InteractiveDemo from '../components/InteractiveDemo';
import DataVisualization from '../components/DataVisualization';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional UI Component Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive collection of responsive, interactive components that demonstrate modern web development 
              practices with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>
          
          <div id="problem-solution">
            <ProblemSolutionGraphic />
          </div>
          
          <div id="interactive-demo">
            <InteractiveDemo />
          </div>
          
          <div id="data-visualization">
            <DataVisualization />
          </div>
          
          <div id="performance-monitor">
            <PerformanceMonitor />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 