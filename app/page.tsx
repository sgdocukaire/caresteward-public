import ProblemSolutionGraphic from '../components/ProblemSolutionGraphic';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UI Component Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A responsive, three-step visual component that demonstrates our approach to building clean, 
            professional front-end components with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
        
        <ProblemSolutionGraphic />
        
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  );
} 