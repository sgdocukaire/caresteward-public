import React from 'react';

export default function ProblemSolutionGraphic() {
  return (
    <section className="py-20" id="problem-solution">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start text-center">
            {/* Step 1: Your Challenge */}
            <div>
              <div className="flex justify-center items-center h-16 w-16 rounded-full bg-red-100 text-red-700 mx-auto">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 whitespace-nowrap">Your Challenge</h3>
              <p className="mt-1 text-sm text-gray-600 whitespace-nowrap">Overwhelm & Confusion</p>
            </div>
            
            {/* Arrow 1 */}
            <div className="flex justify-center items-center h-full transform rotate-90 md:rotate-0">
              <svg className="h-12 w-12 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Step 2: Our Expertise */}
            <div>
              <div className="flex justify-center items-center h-16 w-16 rounded-full bg-brand/10 text-brand mx-auto">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7C10.5 5.5 8.5 6 8 8C7.5 10 12 14 12 14C12 14 16.5 10 16 8C15.5 6 13.5 5.5 12 7Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 whitespace-nowrap">Our Expertise</h3>
              <p className="mt-1 text-sm text-gray-600">Expertise & Guidance</p>
            </div>
            
            {/* Arrow 2 */}
            <div className="flex justify-center items-center h-full transform rotate-90 md:rotate-0">
              <svg className="h-12 w-12 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            {/* Step 3: Your Solution */}
            <div>
              <div className="flex justify-center items-center h-16 w-16 rounded-full bg-green-100 text-green-700 mx-auto">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 whitespace-nowrap">Your Solution</h3>
              <p className="mt-1 text-sm text-gray-600">Clarity & Peace of Mind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 