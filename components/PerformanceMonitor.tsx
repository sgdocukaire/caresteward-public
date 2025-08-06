'use client';

import React, { useState, useEffect } from 'react';

interface Metric {
  name: string;
  value: number;
  unit: string;
  status: 'healthy' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { name: 'Response Time', value: 245, unit: 'ms', status: 'healthy', trend: 'down' },
    { name: 'CPU Usage', value: 68, unit: '%', status: 'warning', trend: 'up' },
    { name: 'Memory Usage', value: 45, unit: '%', status: 'healthy', trend: 'stable' },
    { name: 'Error Rate', value: 0.2, unit: '%', status: 'healthy', trend: 'down' },
    { name: 'Active Users', value: 1247, unit: '', status: 'healthy', trend: 'up' },
    { name: 'Database Connections', value: 89, unit: '', status: 'warning', trend: 'up' },
  ]);

  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.value + (Math.random() - 0.5) * 10,
        status: Math.random() > 0.95 ? 'warning' : metric.status,
        trend: Math.random() > 0.7 ? (Math.random() > 0.5 ? 'up' : 'down') : 'stable'
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, [isLive]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      case 'stable': return '→';
      default: return '→';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      case 'stable': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            System Performance Monitor
          </h2>
          <p className="text-lg text-gray-300">
            Real-time system metrics and health monitoring dashboard
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-8">
          {/* Live Status */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-400' : 'bg-gray-400'}`} />
              <span className="text-gray-300 text-sm">
                {isLive ? 'Live Monitoring Active' : 'Monitoring Paused'}
              </span>
            </div>
            <button
              onClick={() => setIsLive(!isLive)}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              {isLive ? 'Pause' : 'Resume'}
            </button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-white font-medium">{metric.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                    {metric.status}
                  </span>
                </div>
                
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-white">
                    {metric.value.toFixed(metric.name === 'Error Rate' ? 1 : 0)}
                  </span>
                  <span className="text-gray-400">{metric.unit}</span>
                  <span className={`text-lg ${getTrendColor(metric.trend)}`}>
                    {getTrendIcon(metric.trend)}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        metric.status === 'healthy' ? 'bg-green-500' :
                        metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{
                        width: `${Math.min((metric.value / (metric.name === 'Response Time' ? 500 : 100)) * 100, 100)}%`
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* System Status */}
          <div className="mt-8 p-6 bg-gray-700 rounded-lg">
            <h3 className="text-white font-semibold mb-4">System Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">All Systems Operational</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Database Connected</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">API Services Active</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">CDN Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 