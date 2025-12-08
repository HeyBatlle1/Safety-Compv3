'use client'

import { useState, useEffect } from 'react';
import { checkJHAHealth } from '@/lib/api-client';

export default function ApiTestPage() {
  const [healthData, setHealthData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await checkJHAHealth();
      setHealthData(result);
      console.log('✅ API Connection Success:', result);
    } catch (err: any) {
      setError(err.message);
      console.error('❌ API Connection Failed:', err);
    } finally {
      setLoading(false);
    }
  };

  // Test on mount
  useEffect(() => {
    testConnection();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">API Integration Test</h1>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Backend Connection Status</h2>

          <button
            onClick={testConnection}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 mb-4"
          >
            {loading ? 'Testing...' : 'Test Connection'}
          </button>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded mb-4">
              <h3 className="font-semibold">❌ Connection Failed</h3>
              <p className="text-sm mt-2">{error}</p>
            </div>
          )}

          {healthData && (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded">
              <h3 className="font-semibold mb-2">✅ Connection Successful!</h3>
              <div className="text-sm space-y-2">
                <p><strong>Status:</strong> {healthData.status}</p>
                <p><strong>Service:</strong> {healthData.service}</p>
                <p><strong>Version:</strong> {healthData.version}</p>
                <div>
                  <strong>Agents:</strong>
                  <ul className="ml-4 mt-1">
                    {Object.entries(healthData.agents || {}).map(([key, value]) => (
                      <li key={key}>
                        {key}: <span className="text-green-600">{String(value)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Test Details</h2>
          <div className="text-sm space-y-2 text-gray-700">
            <p><strong>Backend URL:</strong> {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}</p>
            <p><strong>Test Endpoint:</strong> GET /api/v1/jha/health</p>
            <p><strong>CORS:</strong> {error?.includes('CORS') ? '❌ Blocked' : healthData ? '✅ Configured' : '⏳ Testing...'}</p>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>This page tests the frontend API integration with the backend.</p>
          <p className="mt-2">Check the browser console for detailed logs.</p>
        </div>
      </div>
    </div>
  );
}
