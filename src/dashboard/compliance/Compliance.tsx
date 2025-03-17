import React, { useState } from 'react'
import AdminDashboardLayout from '../../component/AdminDashboardLayout'
import { MdSecurity, MdAdminPanelSettings, MdPrivacyTip } from 'react-icons/md'
import { FaUserShield, FaLock, FaUnlock, FaUserCog, FaExclamationTriangle } from 'react-icons/fa'
import { BsShieldCheck, BsShieldExclamation } from 'react-icons/bs'

const Compliance = () => {
  const [activeTab, setActiveTab] = useState('gdpr')

  // Dummy data for demonstration
  const securityStats = {
    totalLogs: 12478,
    securityIncidents: 3,
    activeUsers: 845,
    dataRequests: 14
  }

  const adminRoles = [
    { id: 'ROLE-001', name: 'Super Admin', users: 2, permissions: 'Full access to all systems' },
    { id: 'ROLE-002', name: 'Content Manager', users: 4, permissions: 'Manage content, announcements, and communications' },
    { id: 'ROLE-003', name: 'User Support', users: 8, permissions: 'Handle user issues and support tickets' },
    { id: 'ROLE-004', name: 'Financial Admin', users: 3, permissions: 'Manage payments, subscriptions, and refunds' },
    { id: 'ROLE-005', name: 'Data Analyst', users: 5, permissions: 'View analytics and reports only' }
  ]

  const securityLogs = [
    { id: 'LOG-8765', type: 'Login Attempt', user: 'admin@zetakree.com', status: 'Success', ip: '192.168.1.45', timestamp: 'Mar 17, 2025 09:32 AM' },
    { id: 'LOG-8764', type: 'Data Export', user: 'datamgr@zetakree.com', status: 'Success', ip: '192.168.1.23', timestamp: 'Mar 17, 2025 09:15 AM' },
    { id: 'LOG-8763', type: 'User Update', user: 'support@zetakree.com', status: 'Success', ip: '192.168.1.89', timestamp: 'Mar 17, 2025 08:55 AM' },
    { id: 'LOG-8762', type: 'Login Attempt', user: 'unknown', status: 'Failed', ip: '45.232.91.76', timestamp: 'Mar 17, 2025 08:43 AM' },
    { id: 'LOG-8761', type: 'Permission Change', user: 'admin@zetakree.com', status: 'Success', ip: '192.168.1.45', timestamp: 'Mar 17, 2025 08:30 AM' }
  ]

  const renderStatusBadge = (status:any) => {
    let colors = status === 'Success' 
      ? 'bg-green-800 text-green-200' 
      : 'bg-red-800 text-red-200'
    
    return (
      <span className={`${colors} px-2 py-1 rounded-full text-xs`}>
        {status}
      </span>
    )
  }

  const renderTabContent = () => {
    switch(activeTab) {
      case 'gdpr':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">GDPR & Data Protection Logs</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Data Requests</h4>
                <p className="text-2xl text-white">{securityStats.dataRequests}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Data Exports</h4>
                <p className="text-2xl text-white">8</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Deletion Requests</h4>
                <p className="text-2xl text-white">5</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Privacy Updates</h4>
                <p className="text-2xl text-white">2</p>
              </div>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg mb-6">
              <h4 className="text-[#0C8B01] mb-4">Data Request Status</h4>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-3">Request ID</th>
                    <th className="pb-3">Type</th>
                    <th className="pb-3">User</th>
                    <th className="pb-3">Requested</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr className="border-t border-gray-800">
                    <td className="py-3">REQ-289</td>
                    <td className="py-3">Data Export</td>
                    <td className="py-3">john.smith@example.com</td>
                    <td className="py-3">Mar 16, 2025</td>
                    <td className="py-3"><span className="bg-yellow-800 text-yellow-200 px-2 py-1 rounded-full text-xs">Pending</span></td>
                    <td className="py-3">
                      <button className="text-[#0C8B01]">Process</button>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td className="py-3">REQ-288</td>
                    <td className="py-3">Account Deletion</td>
                    <td className="py-3">sarah.jones@example.com</td>
                    <td className="py-3">Mar 15, 2025</td>
                    <td className="py-3"><span className="bg-blue-800 text-blue-200 px-2 py-1 rounded-full text-xs">In Progress</span></td>
                    <td className="py-3">
                      <button className="text-[#0C8B01]">Review</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg">
              <h4 className="text-[#0C8B01] mb-4">Data Processing Compliance</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-white mb-2">Consent Management</h5>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-3/4 bg-gray-700 rounded-full h-4">
                      <div className="bg-green-600 h-4 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-white">92%</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Users with valid consent records</p>
                </div>
                <div>
                  <h5 className="text-white mb-2">Data Retention Policy</h5>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-3/4 bg-gray-700 rounded-full h-4">
                      <div className="bg-green-600 h-4 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-white">100%</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Compliance with retention schedule</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'security':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <h3 className="text-xl text-white font-medium mb-4">Security Logs & User Access Controls</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Total Logs</h4>
                <p className="text-2xl text-white">{securityStats.totalLogs.toLocaleString()}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Security Incidents</h4>
                <p className="text-2xl text-white">{securityStats.securityIncidents}</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Failed Logins</h4>
                <p className="text-2xl text-white">26</p>
              </div>
              <div className="bg-[#060D26] p-4 rounded-lg">
                <h4 className="text-[#0C8B01] mb-2">Permission Changes</h4>
                <p className="text-2xl text-white">8</p>
              </div>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[#0C8B01]">Recent Security Logs</h4>
                <button className="bg-[#0C1130] text-white text-sm px-3 py-1 rounded-md">Export Logs</button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-3">Log ID</th>
                    <th className="pb-3">Type</th>
                    <th className="pb-3">User</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">IP Address</th>
                    <th className="pb-3">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {securityLogs.map((log, index) => (
                    <tr key={index} className="border-t border-gray-800">
                      <td className="py-3">{log.id}</td>
                      <td className="py-3">{log.type}</td>
                      <td className="py-3">{log.user}</td>
                      <td className="py-3">{renderStatusBadge(log.status)}</td>
                      <td className="py-3">{log.ip}</td>
                      <td className="py-3">{log.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'adminRoles':
        return (
          <div className="bg-[#0C1130] p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl text-white font-medium">Admin Role & Permission Management</h3>
              <button className="bg-[#0C8B01] text-white px-4 py-2 rounded-md flex items-center gap-2">
                <FaUserCog /> Add New Role
              </button>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg mb-6">
              <h4 className="text-[#0C8B01] mb-4">Admin Roles</h4>
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-3">Role ID</th>
                    <th className="pb-3">Role Name</th>
                    <th className="pb-3">Users Assigned</th>
                    <th className="pb-3">Permissions</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {adminRoles.map((role, index) => (
                    <tr key={index} className="border-t border-gray-800">
                      <td className="py-3">{role.id}</td>
                      <td className="py-3">{role.name}</td>
                      <td className="py-3">{role.users}</td>
                      <td className="py-3 text-sm max-w-xs truncate">{role.permissions}</td>
                      <td className="py-3">
                        <div className="flex space-x-3">
                          <button className="text-[#0C8B01]">View</button>
                          <button className="text-yellow-500">Edit</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-[#060D26] p-4 rounded-lg">
              <h4 className="text-[#0C8B01] mb-4">Recent Permission Changes</h4>
              <div className="space-y-3">
                <div className="bg-[#0C1130] p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-white">Financial Admin role updated</span>
                    <span className="text-gray-400 text-sm">Mar 17, 2025</span>
                  </div>
                  <p className="text-gray-400 text-sm">Added payment refund approval permission</p>
                </div>
                <div className="bg-[#0C1130] p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-white">New Data Analyst role created</span>
                    <span className="text-gray-400 text-sm">Mar 15, 2025</span>
                  </div>
                  <p className="text-gray-400 text-sm">Read-only access to analytics and reports</p>
                </div>
                <div className="bg-[#0C1130] p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-white">Content Manager permissions updated</span>
                    <span className="text-gray-400 text-sm">Mar 12, 2025</span>
                  </div>
                  <p className="text-gray-400 text-sm">Added AI chatbot configuration access</p>
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
        <h2 className="text-2xl font-bold mb-6">Compliance & Security</h2>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'gdpr' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('gdpr')}
          >
            <MdPrivacyTip /> GDPR & Data Protection
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'security' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('security')}
          >
            <MdSecurity /> Security Logs
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'adminRoles' ? 'bg-[#0C8B01] text-white' : 'bg-[#060D26] text-gray-300 hover:bg-[#0C1130]'}`}
            onClick={() => setActiveTab('adminRoles')}
          >
            <MdAdminPanelSettings /> Admin Roles
          </button>
        </div>
        
        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </AdminDashboardLayout>
  )
}

export default Compliance