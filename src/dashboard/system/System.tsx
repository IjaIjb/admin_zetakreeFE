import React, { useState } from 'react'
import AdminDashboardLayout from '../../component/AdminDashboardLayout'
import { MdSettings, MdApi, MdSpeed, MdBackup, MdToggleOn, MdToggleOff } from 'react-icons/md'
import { FaCog } from 'react-icons/fa'

const System = () => {
  const [activeTab, setActiveTab] = useState('features')

  // Dummy data for demonstration
  const systemStats = {
    serverStatus: 'Operational',
    responseTime: '285ms',
    uptime: '99.98%',
    cpuUsage: '42%',
    memoryUsage: '68%',
    storageUsage: '57%'
  }

  const apiStats = {
    totalEndpoints: 42,
    totalRequests: 1287654,
    averageResponseTime: '312ms',
    errorRate: '0.24%'
  }

  const featureToggles = [
    { id: 'FT-001', name: 'New AI Skin Analysis Tool', status: true, environment: 'Production', lastUpdated: 'Mar 15, 2025' },
    { id: 'FT-002', name: 'Teleconsultation Chat Enhancements', status: true, environment: 'Production', lastUpdated: 'Mar 10, 2025' },
    { id: 'FT-003', name: 'Redesigned User Dashboard', status: false, environment: 'Staging', lastUpdated: 'Mar 16, 2025' },
    { id: 'FT-004', name: 'Enhanced Health Metrics', status: true, environment: 'Beta', lastUpdated: 'Mar 14, 2025' },
    { id: 'FT-005', name: 'New Subscription Plans', status: false, environment: 'Development', lastUpdated: 'Mar 17, 2025' }
  ]

  const apiEndpoints = [
    { path: '/api/v1/users', methods: 'GET, POST, PUT', avgResponseTime: '280ms', requests: '356K' },
    { path: '/api/v1/health-data', methods: 'GET, POST', avgResponseTime: '325ms', requests: '289K' },
    { path: '/api/v1/subscriptions', methods: 'GET, POST, DELETE', avgResponseTime: '295ms', requests: '178K' },
    { path: '/api/v1/teleconsultation', methods: 'GET, POST', avgResponseTime: '310ms', requests: '145K' },
    { path: '/api/v1/ai-analysis', methods: 'POST', avgResponseTime: '450ms', requests: '198K' }
  ]

  const backupSchedules = [
    { id: 'BKP-001', type: 'Full Database', frequency: 'Daily', time: '02:00 AM', retention: '30 days', lastRun: 'Mar 17, 2025' },
    { id: 'BKP-002', type: 'User Data', frequency: 'Daily', time: '03:00 AM', retention: '90 days', lastRun: 'Mar 17, 2025' },
    { id: 'BKP-003', type: 'Health Records', frequency: 'Hourly', time: 'Every hour', retention: '7 days', lastRun: 'Mar 17, 2025' },
    { id: 'BKP-004', type: 'System Logs', frequency: 'Weekly', time: 'Sunday 01:00 AM', retention: '52 weeks', lastRun: 'Mar 12, 2025' }
  ]

  const renderServerStatus = (status:any) => {
    return status === 'Operational' ? (
      <span className="bg-green-800 text-green-200 px-2 py-1 rounded-full text-xs">
        {status}
      </span>
    ) : (
      <span className="bg-red-800 text-red-200 px-2 py-1 rounded-full text-xs">
        {status}
      </span>
    )
  }

  const renderTabContent = () => {
    switch(activeTab) {
      case 'features':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl text-white font-medium">Feature Toggles & Experiment Settings</h3>
              <button className="bg-[#0C8B01] text-white px-4 py-2 rounded-md flex items-center gap-2">
                <FaCog /> New Feature Flag
              </button>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg mb-6">
              <h4 className="text-[#0C8B01] mb-4">Active Feature Toggles</h4>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-3">ID</th>
                    <th className="pb-3">Feature Name</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Environment</th>
                    <th className="pb-3">Last Updated</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {featureToggles.map((feature, index) => (
                    <tr key={index} className="border-t border-gray-800">
                      <td className="py-3">{feature.id}</td>
                      <td className="py-3">{feature.name}</td>
                      <td className="py-3">
                        {feature.status ? 
                          <span className="flex items-center text-green-400"><MdToggleOn className="mr-1" /> Enabled</span> : 
                          <span className="flex items-center text-gray-400"><MdToggleOff className="mr-1" /> Disabled</span>
                        }
                      </td>
                      <td className="py-3">{feature.environment}</td>
                      <td className="py-3">{feature.lastUpdated}</td>
                      <td className="py-3">
                        <div className="flex space-x-3">
                          <button className="text-[#0C8B01]">Edit</button>
                          <button className={feature.status ? "text-red-500" : "text-green-500"}>
                            {feature.status ? 'Disable' : 'Enable'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg">
              <h4 className="text-[#0C8B01] mb-4">Recent Feature Changes</h4>
              <div className="space-y-3">
                <div className="bg-[#0C1130] p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-white">Teleconsultation Chat Enhancements</span>
                    <span className="text-gray-400 text-sm">Mar 10, 2025</span>
                  </div>
                  <p className="text-gray-400 text-sm">Enabled in Production environment</p>
                </div>
                <div className="bg-[#0C1130] p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-white">Enhanced Health Metrics</span>
                    <span className="text-gray-400 text-sm">Mar 14, 2025</span>
                  </div>
                  <p className="text-gray-400 text-sm">Moved from Development to Beta environment</p>
                </div>
                <div className="bg-[#0C1130] p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-white">Redesigned User Dashboard</span>
                    <span className="text-gray-400 text-sm">Mar 16, 2025</span>
                  </div>
                  <p className="text-gray-400 text-sm">Created and disabled in Staging environment</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'api':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">API & Integration Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Total Endpoints</h4>
                <p className="text-2xl text-white">{apiStats.totalEndpoints}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Total Requests</h4>
                <p className="text-2xl text-white">{apiStats.totalRequests.toLocaleString()}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Avg. Response Time</h4>
                <p className="text-2xl text-white">{apiStats.averageResponseTime}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Error Rate</h4>
                <p className="text-2xl text-white">{apiStats.errorRate}</p>
              </div>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[#0C8B01]">API Endpoints</h4>
                <button className="bg-[#0C1130] text-white text-sm px-3 py-1 rounded-md">View Documentation</button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-3">Endpoint</th>
                    <th className="pb-3">Methods</th>
                    <th className="pb-3">Avg. Response</th>
                    <th className="pb-3">Requests</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {apiEndpoints.map((endpoint, index) => (
                    <tr key={index} className="border-t border-gray-800">
                      <td className="py-3 font-mono text-sm">{endpoint.path}</td>
                      <td className="py-3">{endpoint.methods}</td>
                      <td className="py-3">{endpoint.avgResponseTime}</td>
                      <td className="py-3">{endpoint.requests}</td>
                      <td className="py-3">
                        <button className="text-[#0C8B01]">Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg">
              <h4 className="text-[#0C8B01] mb-4">Third-Party Integrations</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0C1130] p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h5 className="text-white">Payment Gateway</h5>
                    <span className="bg-green-800 text-green-200 px-2 py-1 rounded-full text-xs">Connected</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Last sync: 2 minutes ago</p>
                </div>
                <div className="bg-[#0C1130] p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h5 className="text-white">Email Service</h5>
                    <span className="bg-green-800 text-green-200 px-2 py-1 rounded-full text-xs">Connected</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Last sync: 15 minutes ago</p>
                </div>
                <div className="bg-[#0C1130] p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h5 className="text-white">Analytics Platform</h5>
                    <span className="bg-green-800 text-green-200 px-2 py-1 rounded-full text-xs">Connected</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Last sync: 5 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'performance':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">Performance & Server Monitoring</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Server Status</h4>
                <div className="flex items-center gap-2">
                  <p className="text-xl text-white">{renderServerStatus(systemStats.serverStatus)}</p>
                </div>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Response Time</h4>
                <p className="text-2xl text-white">{systemStats.responseTime}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Uptime</h4>
                <p className="text-2xl text-white">{systemStats.uptime}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">CPU Usage</h4>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-3/4 bg-gray-700 rounded-full h-4">
                    <div className="bg-yellow-600 h-4 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                  <span className="text-white">{systemStats.cpuUsage}</span>
                </div>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Memory Usage</h4>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-3/4 bg-gray-700 rounded-full h-4">
                    <div className="bg-orange-600 h-4 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <span className="text-white">{systemStats.memoryUsage}</span>
                </div>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Storage Usage</h4>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-3/4 bg-gray-700 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '57%' }}></div>
                  </div>
                  <span className="text-white">{systemStats.storageUsage}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg">
              <h4 className="text-[#0C8B01] mb-4">Server Performance History</h4>
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-400">Performance metrics chart placeholder</p>
              </div>
            </div>
          </div>
        )
      case 'backup':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl text-white font-medium">Backup & Data Recovery Options</h3>
              <button className="bg-[#0C8B01] text-white px-4 py-2 rounded-md flex items-center gap-2">
                <MdBackup /> Create Manual Backup
              </button>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg mb-6">
              <h4 className="text-[#0C8B01] mb-4">Backup Schedules</h4>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-3">ID</th>
                    <th className="pb-3">Type</th>
                    <th className="pb-3">Frequency</th>
                    <th className="pb-3">Scheduled Time</th>
                    <th className="pb-3">Retention Period</th>
                    <th className="pb-3">Last Run</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {backupSchedules.map((backup, index) => (
                    <tr key={index} className="border-t border-gray-800">
                      <td className="py-3">{backup.id}</td>
                      <td className="py-3">{backup.type}</td>
                      <td className="py-3">{backup.frequency}</td>
                      <td className="py-3">{backup.time}</td>
                      <td className="py-3">{backup.retention}</td>
                      <td className="py-3">{backup.lastRun}</td>
                      <td className="py-3">
                        <div className="flex space-x-3">
                          <button className="text-[#0C8B01]">Run Now</button>
                          <button className="text-yellow-500">Edit</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg">
              <h4 className="text-[#0C8B01] mb-4">Recent Backups</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-white mb-3">Available Restore Points</h5>
                  <div className="space-y-3">
                    <div className="bg-[#0C1130] p-3 rounded-lg flex justify-between items-center">
                      <div>
                        <p className="text-white">Full System Backup</p>
                        <p className="text-gray-400 text-sm">Mar 17, 2025 02:00 AM • 1.8 GB</p>
                      </div>
                      <button className="text-[#0C8B01]">Restore</button>
                    </div>
                    <div className="bg-[#0C1130] p-3 rounded-lg flex justify-between items-center">
                      <div>
                        <p className="text-white">Full System Backup</p>
                        <p className="text-gray-400 text-sm">Mar 16, 2025 02:00 AM • 1.7 GB</p>
                      </div>
                      <button className="text-[#0C8B01]">Restore</button>
                    </div>
                    <div className="bg-[#0C1130] p-3 rounded-lg flex justify-between items-center">
                      <div>
                        <p className="text-white">Full System Backup</p>
                        <p className="text-gray-400 text-sm">Mar 15, 2025 02:00 AM • 1.7 GB</p>
                      </div>
                      <button className="text-[#0C8B01]">Restore</button>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-white mb-3">Backup Storage Usage</h5>
                  <div className="bg-[#0C1130] p-4 rounded-lg h-40 flex items-center justify-center">
                    <p className="text-gray-400">Storage usage chart placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <p className="text-gray-400">Select a category to view details</p>
          </div>
        )
    }
  }

  return (
    <AdminDashboardLayout>
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-6">System & Settings</h2>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'features' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('features')}
          >
            <MdSettings /> Feature Toggles
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'api' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('api')}
          >
            <MdApi /> API & Integrations
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'performance' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('performance')}
          >
            <MdSpeed /> Performance
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'backup' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('backup')}
          >
            <MdBackup /> Backup & Recovery
          </button>
        </div>
        
        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </AdminDashboardLayout>
  )
}

export default System