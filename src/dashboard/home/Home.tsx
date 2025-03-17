import React, { useState, useEffect } from 'react';
import AdminDashboardLayout from '../../component/AdminDashboardLayout';
import { FaUsers, FaUserTie, FaUserMd, FaCalendarCheck, FaChartLine, FaRobot, FaRegCreditCard } from 'react-icons/fa';
import { PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Home = () => {
  // Sample data for demonstration
  const [stats, setStats] = useState({
    totalUsers: 8245,
    premiumUsers: 3492,
    doctors: 142,
    consultationsPerWeek: 523,
    aiScansPerWeek: 1874,
    activeSubscriptions: 3286,
    revenueGrowth: '+12.5%'
  });

  // Sample data for charts
  const userGrowthData = [
    { name: 'Jan', users: 5400 },
    { name: 'Feb', users: 5900 },
    { name: 'Mar', users: 6300 },
    { name: 'Apr', users: 6800 },
    { name: 'May', users: 7200 },
    { name: 'Jun', users: 7600 },
    { name: 'Jul', users: 8000 },
    { name: 'Aug', users: 8245 },
  ];

  const subscriptionData = [
    { name: 'Basic', value: 2154, fill: '#0C8B01' },
    { name: 'Premium', value: 962, fill: '#2CD025' },
    { name: 'Professional', value: 376, fill: '#92E88E' },
  ];

  const aiUsageData = [
    { name: 'Skin Care', scans: 823, reports: 742 },
    { name: 'Vital Check', scans: 645, reports: 520 },
    { name: 'Health Metrics', scans: 406, reports: 352 },
  ];

  const consultationData = [
    { day: 'Mon', count: 68 },
    { day: 'Tue', count: 75 },
    { day: 'Wed', count: 92 },
    { day: 'Thu', count: 87 },
    { day: 'Fri', count: 104 },
    { day: 'Sat', count: 56 },
    { day: 'Sun', count: 41 },
  ];

  // In a real app, you would fetch this data from your API
  useEffect(() => {
    // Simulating API call to fetch dashboard data
    const fetchDashboardData = () => {
      // Replace with actual API call
      // For now, we're using the initial state
    };

    fetchDashboardData();
  }, []);

  return (
    <AdminDashboardLayout>
      <div className="text-white">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-400">Welcome to Zetakree Admin Panel. Here's an overview of your platform.</p>
        </div>

        {/* Key Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="Total Users" 
            value={stats.totalUsers.toLocaleString()} 
            icon={<FaUsers className="text-[#0C8B01]" />} 
          />
          <StatCard 
            title="Premium Users" 
            value={stats.premiumUsers.toLocaleString()} 
            icon={<FaUserTie className="text-[#0C8B01]" />} 
          />
          <StatCard 
            title="Doctors" 
            value={stats.doctors.toLocaleString()} 
            icon={<FaUserMd className="text-[#0C8B01]" />} 
          />
          <StatCard 
            title="Consultations/Week" 
            value={stats.consultationsPerWeek.toLocaleString()} 
            icon={<FaCalendarCheck className="text-[#0C8B01]" />} 
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* User Growth Chart */}
          <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">User Growth</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#11162F', border: '1px solid #444' }} 
                    labelStyle={{ color: 'white' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#0C8B01" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Subscription Distribution */}
          <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Subscription Distribution</h2>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={subscriptionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label={({ name, percent }:any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#11162F', border: '1px solid #444' }} 
                    labelStyle={{ color: 'white' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* AI Service Usage */}
          <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">AI Service Usage</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={aiUsageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#11162F', border: '1px solid #444' }} 
                    labelStyle={{ color: 'white' }}
                  />
                  <Legend />
                  <Bar dataKey="scans" name="AI Scans" fill="#0C8B01" />
                  <Bar dataKey="reports" name="Health Reports" fill="#2CD025" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Weekly Consultations */}
          <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Weekly Consultations</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={consultationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="day" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#11162F', border: '1px solid #444' }} 
                    labelStyle={{ color: 'white' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="count" name="Consultations" stroke="#2CD025" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <QuickAccessCard 
            title="AI Health Data" 
            description="Monitor AI-generated health scans and reports" 
            icon={<FaRobot size={24} />}
            link="/dashboard/ai-health"
          />
          <QuickAccessCard 
            title="User Management" 
            description="Manage users, roles and permissions" 
            icon={<FaUsers size={24} />}
            link="/dashboard/user-management"
          />
          <QuickAccessCard 
            title="Subscription Plans" 
            description="View and update subscription plans" 
            icon={<FaRegCreditCard size={24} />}
            link="/dashboard/subscription"
          />
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon }:any) => {
  return (
    <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="bg-[#0c8b0120] p-3 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
};

// Quick Access Card Component
const QuickAccessCard = ({ title, description, icon, link }:any) => {
  return (
    <a href={link} className="block">
      <div className="bg-[#11162F] p-5 rounded-lg shadow-lg hover:bg-[#161f45] transition-colors duration-200">
        <div className="flex items-center mb-3">
          <div className="bg-[#0c8b0120] p-2 rounded-full mr-3 text-[#0C8B01]">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </a>
  );
};

export default Home;