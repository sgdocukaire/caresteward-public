'use client';

import React, { useState } from 'react';

interface DataPoint {
  month: string;
  value: number;
  color: string;
}

export default function DataVisualization() {
  const [selectedMetric, setSelectedMetric] = useState<'revenue' | 'users' | 'growth'>('revenue');
  
  const data: Record<string, DataPoint[]> = {
    revenue: [
      { month: 'Jan', value: 12000, color: 'bg-brand' },
      { month: 'Feb', value: 15000, color: 'bg-brand' },
      { month: 'Mar', value: 18000, color: 'bg-brand' },
      { month: 'Apr', value: 22000, color: 'bg-brand' },
      { month: 'May', value: 25000, color: 'bg-brand' },
      { month: 'Jun', value: 28000, color: 'bg-brand' },
    ],
    users: [
      { month: 'Jan', value: 150, color: 'bg-blue-500' },
      { month: 'Feb', value: 220, color: 'bg-blue-500' },
      { month: 'Mar', value: 310, color: 'bg-blue-500' },
      { month: 'Apr', value: 450, color: 'bg-blue-500' },
      { month: 'May', value: 580, color: 'bg-blue-500' },
      { month: 'Jun', value: 720, color: 'bg-blue-500' },
    ],
    growth: [
      { month: 'Jan', value: 15, color: 'bg-green-500' },
      { month: 'Feb', value: 22, color: 'bg-green-500' },
      { month: 'Mar', value: 18, color: 'bg-green-500' },
      { month: 'Apr', value: 25, color: 'bg-green-500' },
      { month: 'May', value: 32, color: 'bg-green-500' },
      { month: 'Jun', value: 28, color: 'bg-green-500' },
    ]
  };

  const currentData = data[selectedMetric];
  const maxValue = Math.max(...currentData.map(d => d.value));

  const getMetricLabel = (metric: string) => {
    switch (metric) {
      case 'revenue': return 'Revenue ($)';
      case 'users': return 'Active Users';
      case 'growth': return 'Growth Rate (%)';
      default: return '';
    }
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Data Visualization Demo
          </h2>
          <p className="text-lg text-gray-600">
            Interactive charts demonstrating data handling and visualization capabilities
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Metric Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {(['revenue', 'users', 'growth'] as const).map((metric) => (
                <button
                  key={metric}
                  onClick={() => setSelectedMetric(metric)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedMetric === metric
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {getMetricLabel(metric)}
                </button>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="space-y-4">
            <div className="flex items-end justify-between h-64 px-4 pb-4 border-b border-gray-200">
              {currentData.map((point, index) => (
                <div key={point.month} className="flex flex-col items-center">
                  <div className="relative">
                    <div
                      className={`w-12 ${point.color} rounded-t-lg transition-all duration-500 ease-out`}
                      style={{
                        height: `${(point.value / maxValue) * 200}px`
                      }}
                    />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {point.value.toLocaleString()}
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 mt-2">{point.month}</span>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">
                  {currentData[currentData.length - 1].value.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Current {getMetricLabel(selectedMetric)}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(currentData.reduce((sum, d) => sum + d.value, 0) / currentData.length).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Average {getMetricLabel(selectedMetric)}</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  +{Math.round(((currentData[currentData.length - 1].value - currentData[0].value) / currentData[0].value) * 100)}%
                </div>
                <div className="text-sm text-gray-600">Total Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 