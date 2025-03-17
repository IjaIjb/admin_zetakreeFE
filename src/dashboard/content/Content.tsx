import React, { useState } from 'react'
import AdminDashboardLayout from '../../component/AdminDashboardLayout'
import { MdAnnouncement, MdMessage, MdOutlineSmartToy, MdNotifications } from 'react-icons/md'
import { FaRegEdit, FaTrash, FaEye, FaRegClock } from 'react-icons/fa'

const Content = () => {
  const [activeTab, setActiveTab] = useState('announcements')

  // Dummy data for demonstration
  const announcementStats = {
    total: 87,
    active: 12,
    scheduled: 5,
    archived: 70
  }

  const supportStats = {
    openTickets: 28,
    resolvedToday: 17,
    averageResolution: '4.3 hours',
    satisfaction: '94%'
  }

  const chatbotStats = {
    totalInteractions: 28695,
    successRate: 82.7,
    avgSessionTime: '3.5 min',
    popularQueries: [
      'Medication reminders',
      'Subscription plans',
      'Health report interpretation',
      'Doctor availability'
    ]
  }

  const announcements = [
    { id: 'ANN-098', title: 'New Features Released', status: 'Active', audience: 'All Users', date: 'Mar 15, 2025' },
    { id: 'ANN-097', title: 'Scheduled Maintenance', status: 'Scheduled', audience: 'All Users', date: 'Mar 19, 2025' },
    { id: 'ANN-096', title: 'Spring Wellness Challenge', status: 'Active', audience: 'Premium Users', date: 'Mar 14, 2025' },
    { id: 'ANN-095', title: 'New Specialist Doctors Added', status: 'Active', audience: 'All Users', date: 'Mar 12, 2025' },
    { id: 'ANN-094', title: 'Discount on Annual Plans', status: 'Active', audience: 'Free Users', date: 'Mar 10, 2025' }
  ]

  const supportTickets = [
    { id: 'TIC-342', user: 'Jennifer Smith', subject: 'Payment Issue', status: 'Open', priority: 'High', created: 'Mar 17, 2025 (2 hours ago)' },
    { id: 'TIC-341', user: 'David Wilson', subject: 'Account Access', status: 'Open', priority: 'Medium', created: 'Mar 17, 2025 (4 hours ago)' },
    { id: 'TIC-340', user: 'Michelle Brown', subject: 'Subscription Cancel', status: 'In Progress', priority: 'Low', created: 'Mar 16, 2025 (1 day ago)' },
    { id: 'TIC-339', user: 'Robert Taylor', subject: 'App Crash Issue', status: 'Open', priority: 'High', created: 'Mar 16, 2025 (1 day ago)' },
    { id: 'TIC-338', user: 'Elizabeth Jones', subject: 'Doctor Review', status: 'Waiting on User', priority: 'Medium', created: 'Mar 15, 2025 (2 days ago)' }
  ]

  const renderStatusBadge = (status:any) => {
    let colors:any = {
      'Active': 'bg-green-800 text-green-200',
      'Scheduled': 'bg-blue-800 text-blue-200',
      'Archived': 'bg-gray-800 text-gray-200',
      'Open': 'bg-red-800 text-red-200',
      'In Progress': 'bg-yellow-800 text-yellow-200',
      'Waiting on User': 'bg-purple-800 text-purple-200',
      'Resolved': 'bg-green-800 text-green-200'
    }
    
    return (
      <span className={`${colors[status]} px-2 py-1 rounded-full text-xs`}>
        {status}
      </span>
    )
  }

  const renderPriorityBadge = (priority:any) => {
    let colors:any = {
      'High': 'bg-red-800 text-red-200',
      'Medium': 'bg-yellow-800 text-yellow-200',
      'Low': 'bg-blue-800 text-blue-200'
    }
    
    return (
      <span className={`${colors[priority]} px-2 py-1 rounded-full text-xs`}>
        {priority}
      </span>
    )
  }

  const renderTabContent = () => {
    switch(activeTab) {
      case 'announcements':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl text-white font-medium">Announcements & Notifications</h3>
              <button className="bg-[#0C8B01] text-white px-4 py-2 rounded-md flex items-center gap-2">
                <FaRegEdit /> New Announcement
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Total</h4>
                <p className="text-2xl text-white">{announcementStats.total}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Active</h4>
                <p className="text-2xl text-white">{announcementStats.active}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Scheduled</h4>
                <p className="text-2xl text-white">{announcementStats.scheduled}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Archived</h4>
                <p className="text-2xl text-white">{announcementStats.archived}</p>
              </div>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg">
              <h4 className="text-[#0C8B01] mb-4">Recent Announcements</h4>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-3">ID</th>
                    <th className="pb-3">Title</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Audience</th>
                    <th className="pb-3">Date</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {announcements.map((announcement, index) => (
                    <tr key={index} className="border-t border-gray-800">
                      <td className="py-3">{announcement.id}</td>
                      <td className="py-3">{announcement.title}</td>
                      <td className="py-3">{renderStatusBadge(announcement.status)}</td>
                      <td className="py-3">{announcement.audience}</td>
                      <td className="py-3">{announcement.date}</td>
                      <td className="py-3">
                        <div className="flex space-x-3">
                          <button className="text-[#0C8B01]"><FaEye /></button>
                          <button className="text-yellow-500"><FaRegEdit /></button>
                          <button className="text-red-500"><FaTrash /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'chatbot':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">AI Chatbot Logs & Performance Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Total Interactions</h4>
                <p className="text-2xl text-white">{chatbotStats.totalInteractions.toLocaleString()}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Success Rate</h4>
                <p className="text-2xl text-white">{chatbotStats.successRate}%</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Avg. Session Time</h4>
                <p className="text-2xl text-white">{chatbotStats.avgSessionTime}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Failed Queries</h4>
                <p className="text-2xl text-white">238</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-4">Popular Queries</h4>
                <ul className="text-white space-y-2">
                  {chatbotStats.popularQueries.map((query, index) => (
                    <li key={index} className="bg-[#0C1130] p-3 rounded-md flex justify-between">
                      <span>{query}</span>
                      <span className="text-[#0C8B01]">{Math.floor(Math.random() * 500) + 100}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-4">Chatbot Performance</h4>
                <div className="h-64 flex items-center justify-center">
                  <p className="text-gray-400">Performance metrics chart placeholder</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'messaging':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">In-App Messaging & Support Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Open Tickets</h4>
                <p className="text-2xl text-white">{supportStats.openTickets}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Resolved Today</h4>
                <p className="text-2xl text-white">{supportStats.resolvedToday}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Avg. Resolution</h4>
                <p className="text-2xl text-white">{supportStats.averageResolution}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Satisfaction</h4>
                <p className="text-2xl text-white">{supportStats.satisfaction}</p>
              </div>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[#0C8B01]">Active Support Tickets</h4>
                <div className="flex space-x-2">
                  <button className="bg-[#0C1130] text-white text-sm px-3 py-1 rounded-md">Filter</button>
                  <button className="bg-[#0C1130] text-white text-sm px-3 py-1 rounded-md">Sort</button>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-3">ID</th>
                    <th className="pb-3">User</th>
                    <th className="pb-3">Subject</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Priority</th>
                    <th className="pb-3">Created</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {supportTickets.map((ticket, index) => (
                    <tr key={index} className="border-t border-gray-800">
                      <td className="py-3">{ticket.id}</td>
                      <td className="py-3">{ticket.user}</td>
                      <td className="py-3">{ticket.subject}</td>
                      <td className="py-3">{renderStatusBadge(ticket.status)}</td>
                      <td className="py-3">{renderPriorityBadge(ticket.priority)}</td>
                      <td className="py-3 text-sm flex items-center gap-1">
                        <FaRegClock className="text-gray-400" /> {ticket.created}
                      </td>
                      <td className="py-3">
                        <div className="flex space-x-3">
                          <button className="text-[#0C8B01]">View</button>
                          <button className="text-yellow-500">Assign</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
        <h2 className="text-2xl font-bold mb-6">Content & Communication</h2>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'announcements' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('announcements')}
          >
            <MdAnnouncement /> Announcements
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'messaging' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('messaging')}
          >
            <MdMessage /> Support Tickets
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'chatbot' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('chatbot')}
          >
            <MdOutlineSmartToy /> AI Chatbot
          </button>
        </div>
        
        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </AdminDashboardLayout>
  )
}

export default Content