import React, { useState, useEffect } from 'react';
import AdminDashboardLayout from '../../component/AdminDashboardLayout';
import { FaUserEdit, FaUserClock, FaHistory, FaIdCard, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserManagement = () => {
  // Sample user data for demonstration
  const users =[
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 8901',
      country: 'United States',
      subscriptionStatus: 'Premium',
      registrationDate: '2023-08-15',
      lastActive: '2023-10-02',
      type: 'Patient'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 987 654 3210',
      country: 'Canada',
      subscriptionStatus: 'Basic',
      registrationDate: '2023-09-10',
      lastActive: '2023-10-03',
      type: 'Patient'
    },
    {
      id: 3,
      name: 'Dr. Michael Johnson',
      email: 'michael.johnson@example.com',
      phone: '+44 123 456 7890',
      country: 'United Kingdom',
      subscriptionStatus: 'Professional',
      registrationDate: '2023-07-22',
      lastActive: '2023-10-03',
      type: 'Doctor',
      verificationStatus: 'Verified'
    },
    {
      id: 4,
      name: 'Emily Williams',
      email: 'emily.williams@example.com',
      phone: '+61 234 567 890',
      country: 'Australia',
      subscriptionStatus: 'Premium',
      registrationDate: '2023-06-11',
      lastActive: '2023-09-29',
      type: 'Patient'
    },
    {
      id: 5,
      name: 'Dr. Sarah Brown',
      email: 'sarah.brown@example.com',
      phone: '+33 123 456 789',
      country: 'France',
      subscriptionStatus: 'Professional',
      registrationDate: '2023-08-05',
      lastActive: '2023-10-01',
      type: 'Doctor',
      verificationStatus: 'Pending'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  // Filter and sort users
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || user.type === filterType;
    const matchesStatus = filterStatus === 'All' || user.subscriptionStatus === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  }).sort((a:any, b:any) => {
    if (a[sortBy] < b[sortBy]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (field:any) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };

  // In a real app, you would fetch users from your API
  useEffect(() => {
    // Simulating API call to fetch users
    // For now, we're using the initial state
  }, []);

  return (
    <AdminDashboardLayout>
      <div className="text-white">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-gray-400">Manage users, subscriptions, and account details</p>
        </div>

        {/* Quick Access Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <QuickAccessCard 
            title="User Profiles" 
            icon={<FaUserEdit size={20} />}
            link="/dashboard/user-management/profiles"
            count={users.length}
          />
          <QuickAccessCard 
            title="Activity Logs" 
            icon={<FaUserClock size={20} />}
            link="/dashboard/user-management/activity"
            count="1.2k+"
          />
          <QuickAccessCard 
            title="Subscription History" 
            icon={<FaHistory size={20} />}
            link="/dashboard/user-management/subscription-history"
            count="856"
          />
          <QuickAccessCard 
            title="Doctor Verification" 
            icon={<FaIdCard size={20} />}
            link="/dashboard/user-management/doctor-verification"
            count="14"
          />
          <QuickAccessCard 
            title="Referral Tracking" 
            icon={<FaUsers size={20} />}
            link="/dashboard/user-management/referral-tracking"
            count="328"
          />
        </div>

        {/* Search and Filter */}
        <div className="bg-[#11162F] p-4 rounded-lg shadow-lg mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2">
              <input
                type="text"
                placeholder="Search by name or email..."
                className="w-full p-2 bg-[#0F132A] border border-[#252A4A] rounded-md text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                className="w-full p-2 bg-[#0F132A] border border-[#252A4A] rounded-md text-white"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All User Types</option>
                <option value="Patient">Patients</option>
                <option value="Doctor">Doctors</option>
              </select>
            </div>
            <div>
              <select
                className="w-full p-2 bg-[#0F132A] border border-[#252A4A] rounded-md text-white"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Subscriptions</option>
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
                <option value="Professional">Professional</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-[#11162F] rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0F132A] text-left">
                  <th className="p-4 cursor-pointer" onClick={() => handleSort('name')}>
                    <div className="flex items-center">
                      Name
                      {sortBy === 'name' && (
                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th className="p-4 cursor-pointer" onClick={() => handleSort('email')}>
                    <div className="flex items-center">
                      Email
                      {sortBy === 'email' && (
                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th className="p-4 cursor-pointer" onClick={() => handleSort('subscriptionStatus')}>
                    <div className="flex items-center">
                      Subscription
                      {sortBy === 'subscriptionStatus' && (
                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th className="p-4 cursor-pointer" onClick={() => handleSort('country')}>
                    <div className="flex items-center">
                      Country
                      {sortBy === 'country' && (
                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th className="p-4 cursor-pointer" onClick={() => handleSort('lastActive')}>
                    <div className="flex items-center">
                      Last Active
                      {sortBy === 'lastActive' && (
                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-t border-[#252A4A] hover:bg-[#0F132A]">
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#0C8B01] flex items-center justify-center text-white font-semibold mr-2">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          {user.name}
                          {user.type === 'Doctor' && (
                            <span className="ml-2 px-2 py-1 bg-blue-900 text-blue-300 text-xs rounded-full">
                              Doctor
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.subscriptionStatus === 'Premium' 
                          ? 'bg-purple-900 text-purple-300' 
                          : user.subscriptionStatus === 'Professional' 
                            ? 'bg-[#0C8B01] text-green-300' 
                            : 'bg-gray-700 text-gray-300'
                      }`}>
                        {user.subscriptionStatus}
                      </span>
                    </td>
                    <td className="p-4">{user.country}</td>
                    <td className="p-4">{user.lastActive}</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-[#252A4A] rounded-md hover:bg-[#353D6A] transition-colors text-sm">
                          View
                        </button>
                        <button className="px-3 py-1 bg-[#0C8B01] rounded-md hover:bg-[#097001] transition-colors text-sm">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-between items-center p-4 border-t border-[#252A4A]">
            <div className="text-sm text-gray-400">
              Showing {filteredUsers.length} of {users.length} users
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-[#0F132A] rounded-md disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-[#0C8B01] rounded-md">1</button>
              <button className="px-3 py-1 bg-[#0F132A] rounded-md">2</button>
              <button className="px-3 py-1 bg-[#0F132A] rounded-md">3</button>
              <button className="px-3 py-1 bg-[#0F132A] rounded-md">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

// Quick Access Card Component
const QuickAccessCard = ({ title, icon, link, count }:any) => {
  return (
    <Link to={link} className="block">
      <div className="bg-[#11162F] p-4 rounded-lg shadow-lg hover:bg-[#161f45] transition-colors duration-200 h-full">
        <div className="flex items-center justify-between mb-2">
          <div className="bg-[#0c8b0120] p-2 rounded-full text-[#0C8B01]">
            {icon}
          </div>
          <div className="bg-[#252A4A] px-2 py-1 rounded-full text-xs">
            {count}
          </div>
        </div>
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
    </Link>
  );
};

export default UserManagement;