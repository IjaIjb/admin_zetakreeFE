import React, { useState } from 'react'
import AdminDashboardLayout from '../../component/AdminDashboardLayout'
import { FaChartLine, FaHeartbeat, FaRobot, FaChartBar, FaRegFileAlt } from 'react-icons/fa'
import { MdTrendingUp } from 'react-icons/md'

const AIHealth = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // Dummy data for demonstration
  const aiMetrics = {
    skinCareScans: 12489,
    vitalChecks: 9876,
    healthReports: 5432,
    accuracyRate: 96.7,
    userSatisfaction: 92.3
  }

  const popularFeatures = [
    { name: 'Skin Condition Analysis', usage: 8743, growth: 15.2 },
    { name: 'Heart Rate Monitoring', usage: 7658, growth: 12.8 },
    { name: 'Sleep Pattern Analysis', usage: 5432, growth: 23.6 },
    { name: 'Nutrition Recommendations', usage: 4851, growth: 8.7 },
    { name: 'Medication Reminders', usage: 3287, growth: 5.4 }
  ]

  const renderTabContent = () => {
    switch(activeTab) {
      case 'skinCare':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">Skin Care AI Usage Reports</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Total Scans</h4>
                <p className="text-2xl text-white">{aiMetrics.skinCareScans.toLocaleString()}</p>
                <div className="mt-4 h-40 flex items-center justify-center">
                  <p className="text-gray-400">Scan activity chart placeholder</p>
                </div>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Condition Detection</h4>
                <div className="mt-4 h-40 flex items-center justify-center">
                  <p className="text-gray-400">Condition breakdown chart placeholder</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'vitalCheck':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">Vital Check AI Reports</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Vital Checks Performed</h4>
                <p className="text-2xl text-white">{aiMetrics.vitalChecks.toLocaleString()}</p>
                <div className="mt-4 h-40 flex items-center justify-center">
                  <p className="text-gray-400">Vital check trend chart placeholder</p>
                </div>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Most Monitored Vitals</h4>
                <div className="mt-4 h-40 flex items-center justify-center">
                  <p className="text-gray-400">Vitals distribution chart placeholder</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'healthReports':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">AI-Generated Health Reports</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Reports Generated</h4>
                <p className="text-2xl text-white">{aiMetrics.healthReports.toLocaleString()}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Recent Reports</h4>
                <div className="mt-4">
                  <table className="w-full">
                    <thead>
                      <tr className="text-gray-400 text-left">
                        <th className="pb-3">Report ID</th>
                        <th className="pb-3">User</th>
                        <th className="pb-3">Type</th>
                        <th className="pb-3">Date</th>
                        <th className="pb-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      {/* Placeholder data */}
                      <tr className="border-t border-gray-700">
                        <td className="py-3">REP-2354</td>
                        <td className="py-3">John D.</td>
                        <td className="py-3">Monthly Summary</td>
                        <td className="py-3">Mar 15, 2025</td>
                        <td className="py-3"><button className="text-[#0C8B01]">View</button></td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="py-3">REP-2353</td>
                        <td className="py-3">Sarah M.</td>
                        <td className="py-3">Weekly Check</td>
                        <td className="py-3">Mar 14, 2025</td>
                        <td className="py-3"><button className="text-[#0C8B01]">View</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )
      case 'usage':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">Popular Features Usage Statistics</h3>
            <div className="bg-[#060D26] p-4 rounded-lg mb-6">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-3">Feature</th>
                    <th className="pb-3">Usage Count</th>
                    <th className="pb-3">Growth</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {popularFeatures.map((feature, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      <td className="py-3">{feature.name}</td>
                      <td className="py-3">{feature.usage.toLocaleString()}</td>
                      <td className="py-3 flex items-center">
                        <span className={feature.growth > 10 ? "text-green-500" : "text-yellow-500"}>
                          {feature.growth}%
                        </span>
                        <MdTrendingUp className="ml-1" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'healthTrends':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">User Health Trends & Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Population Health Trends</h4>
                <div className="mt-4 h-40 flex items-center justify-center">
                  <p className="text-gray-400">Population health trend chart placeholder</p>
                </div>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Health Improvement Stats</h4>
                <div className="mt-4 h-40 flex items-center justify-center">
                  <p className="text-gray-400">Health improvement chart placeholder</p>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">AI & Health Data Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Skin Care Scans</h4>
                <p className="text-2xl text-white">{aiMetrics.skinCareScans.toLocaleString()}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Vital Checks</h4>
                <p className="text-2xl text-white">{aiMetrics.vitalChecks.toLocaleString()}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Health Reports</h4>
                <p className="text-2xl text-white">{aiMetrics.healthReports.toLocaleString()}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">AI Accuracy Rate</h4>
                <p className="text-2xl text-white">{aiMetrics.accuracyRate}%</p>
                <div className="mt-4 h-40 flex items-center justify-center">
                  <p className="text-gray-400">Accuracy trend chart placeholder</p>
                </div>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">User Satisfaction</h4>
                <p className="text-2xl text-white">{aiMetrics.userSatisfaction}%</p>
                <div className="mt-4 h-40 flex items-center justify-center">
                  <p className="text-gray-400">Satisfaction chart placeholder</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <AdminDashboardLayout>
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-6">AI & Health Data</h2>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'overview' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('overview')}
          >
            <FaChartBar /> Overview
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'skinCare' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('skinCare')}
          >
            <FaRobot /> Skin Care AI
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'vitalCheck' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('vitalCheck')}
          >
            <FaHeartbeat /> Vital Check AI
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'healthReports' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('healthReports')}
          >
            <FaRegFileAlt /> Health Reports
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'usage' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('usage')}
          >
            <FaChartBar /> Usage Statistics
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'healthTrends' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('healthTrends')}
          >
            <FaChartLine /> Health Trends
          </button>
        </div>
        
        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </AdminDashboardLayout>
  )
}

export default AIHealth