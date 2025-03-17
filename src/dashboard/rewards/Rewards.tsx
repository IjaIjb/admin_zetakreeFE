import React, { useState } from 'react'
import AdminDashboardLayout from '../../component/AdminDashboardLayout'
import { FaUserPlus, FaCoins, FaTrophy } from 'react-icons/fa'

const Rewards = () => {
  const [activeTab, setActiveTab] = useState('referrals')

  // Dummy data for demonstration
  const referralStats = {
    totalReferrals: 3478,
    activeReferrers: 846,
    conversionRate: 42.3,
    pendingPayouts: 117
  }

  const challengeStats = {
    activeUsers: 1287,
    completionRate: 68.4,
    mostPopular: 'Daily Steps Challenge',
    avgEngagement: 4.6
  }

  const topReferrers = [
    { id: 'USR-9356', name: 'Michael Johnson', referrals: 28, earnings: '$280' },
    { id: 'USR-7281', name: 'Rachel Williams', referrals: 23, earnings: '$230' },
    { id: 'USR-5429', name: 'David Chen', referrals: 19, earnings: '$190' },
    { id: 'USR-8145', name: 'Sarah Lopez', referrals: 17, earnings: '$170' },
    { id: 'USR-6230', name: 'Kevin Wong', referrals: 15, earnings: '$150' }
  ]

  const challenges = [
    { id: 'CHL-001', name: 'Daily Steps Challenge', participants: 845, completion: 72.4 },
    { id: 'CHL-002', name: 'Water Intake Tracker', participants: 756, completion: 65.8 },
    { id: 'CHL-003', name: 'Weekly Workout Goals', participants: 594, completion: 59.3 },
    { id: 'CHL-004', name: 'Healthy Meal Logging', participants: 487, completion: 51.2 },
    { id: 'CHL-005', name: 'Sleep Quality Challenge', participants: 623, completion: 68.7 }
  ]

  const renderTabContent = () => {
    switch(activeTab) {
      case 'referrals':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">Referral Tracking & Payouts</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Total Referrals</h4>
                <p className="text-2xl text-white">{referralStats.totalReferrals}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Active Referrers</h4>
                <p className="text-2xl text-white">{referralStats.activeReferrers}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Conversion Rate</h4>
                <p className="text-2xl text-white">{referralStats.conversionRate}%</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Pending Payouts</h4>
                <p className="text-2xl text-white">{referralStats.pendingPayouts}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-[#0C8B01]">Top Referrers</h4>
                  <button className="bg-[#0C1130] text-white text-sm px-3 py-1 rounded-md">View All</button>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-400 text-left text-sm">
                      <th className="pb-3">ID</th>
                      <th className="pb-3">Name</th>
                      <th className="pb-3">Referrals</th>
                      <th className="pb-3">Earnings</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    {topReferrers.map((referrer, index) => (
                      <tr key={index} className="border-t border-gray-800">
                        <td className="py-2 text-sm">{referrer.id}</td>
                        <td className="py-2">{referrer.name}</td>
                        <td className="py-2">{referrer.referrals}</td>
                        <td className="py-2">{referrer.earnings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-4">Referral Trends</h4>
                <div className="h-64 flex items-center justify-center">
                  <p className="text-gray-400">Referral growth chart placeholder</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'challenges':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">Challenge & Rewards Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Active Users</h4>
                <p className="text-2xl text-white">{challengeStats.activeUsers}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Completion Rate</h4>
                <p className="text-2xl text-white">{challengeStats.completionRate}%</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Most Popular</h4>
                <p className="text-lg text-white">{challengeStats.mostPopular}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Avg. Engagement</h4>
                <p className="text-2xl text-white">{challengeStats.avgEngagement}/5</p>
              </div>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[#0C8B01]">Active Challenges</h4>
                <button className="bg-[#0C1130] text-white text-sm px-3 py-1 rounded-md">Add New</button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-3">ID</th>
                    <th className="pb-3">Challenge Name</th>
                    <th className="pb-3">Participants</th>
                    <th className="pb-3">Completion %</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {challenges.map((challenge, index) => (
                    <tr key={index} className="border-t border-gray-800">
                      <td className="py-3">{challenge.id}</td>
                      <td className="py-3">{challenge.name}</td>
                      <td className="py-3">{challenge.participants}</td>
                      <td className="py-3">{challenge.completion}%</td>
                      <td className="py-3">
                        <span className="bg-green-800 text-green-200 px-2 py-1 rounded-full text-xs">Active</span>
                      </td>
                      <td className="py-3">
                        <div className="flex space-x-2">
                          <button className="text-[#0C8B01]">View</button>
                          <button className="text-yellow-500">Edit</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'tokens':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">Token/Credit Distribution System</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Total Credits Issued</h4>
                <p className="text-2xl text-white">48,756</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Credits Redeemed</h4>
                <p className="text-2xl text-white">36,219</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Active Balance</h4>
                <p className="text-2xl text-white">12,537</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-4">Credit Distribution</h4>
                <div className="h-64 flex items-center justify-center">
                  <p className="text-gray-400">Credit distribution chart placeholder</p>
                </div>
              </div>
              
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Recent Redemptions</h4>
                <div className="mt-4">
                  <table className="w-full">
                    <thead>
                      <tr className="text-gray-400 text-left text-sm">
                        <th className="pb-3">User</th>
                        <th className="pb-3">Item</th>
                        <th className="pb-3">Credits</th>
                        <th className="pb-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="text-white text-sm">
                      <tr className="border-t border-gray-800">
                        <td className="py-2">Amanda L.</td>
                        <td className="py-2">Premium Week</td>
                        <td className="py-2">500</td>
                        <td className="py-2">Mar 16, 2025</td>
                      </tr>
                      <tr className="border-t border-gray-800">
                        <td className="py-2">Jason T.</td>
                        <td className="py-2">Health Report</td>
                        <td className="py-2">250</td>
                        <td className="py-2">Mar 16, 2025</td>
                      </tr>
                      <tr className="border-t border-gray-800">
                        <td className="py-2">Michelle K.</td>
                        <td className="py-2">Consultation</td>
                        <td className="py-2">1000</td>
                        <td className="py-2">Mar 15, 2025</td>
                      </tr>
                      <tr className="border-t border-gray-800">
                        <td className="py-2">Robert C.</td>
                        <td className="py-2">Fitness Pack</td>
                        <td className="py-2">750</td>
                        <td className="py-2">Mar 15, 2025</td>
                      </tr>
                    </tbody>
                  </table>
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
        <h2 className="text-2xl font-bold mb-6">Rewards & Referrals</h2>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'referrals' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('referrals')}
          >
            <FaUserPlus /> Referral Tracking
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'challenges' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('challenges')}
          >
            <FaTrophy /> Challenges & Rewards
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'tokens' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('tokens')}
          >
            <FaCoins /> Token/Credit System
          </button>
        </div>
        
        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </AdminDashboardLayout>
  )
}

export default Rewards