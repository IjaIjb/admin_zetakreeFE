import React, { useState, useEffect } from 'react';
import AdminDashboardLayout from '../../component/AdminDashboardLayout';
import { FaUsers, FaChartLine, FaRobot, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  // Sample data for demonstration
  const [period, setPeriod] = useState('month');
  
  const userEngagementData = [
    { date: '01/10', activeUsers: 7240, newSignups: 412 },
    { date: '02/10', activeUsers: 7320, newSignups: 385 },
    { date: '03/10', activeUsers: 7450, newSignups: 427 },
    { date: '04/10', activeUsers: 7380, newSignups: 371 },
    { date: '05/10', activeUsers: 7520, newSignups: 403 },
    { date: '06/10', activeUsers: 7620, newSignups: 432 },
    { date: '07/10', activeUsers: 7710, newSignups: 456 },
  ];

  const subscriptionData = [
    { month: 'Apr', growth: 8.2, churn: 3.1 },
    { month: 'May', growth: 9.1, churn: 2.8 },
    { month: 'Jun', growth: 8.7, churn: 3.3 },
    { month: 'Jul', growth: 10.2, churn: 2.6 },
    { month: 'Aug', growth: 11.5, churn: 2.4 },
    { month: 'Sep', growth: 12.8, churn: 2.7 },
    { month: 'Oct', growth: 13.2, churn: 2.3 },
  ];

  const payPerUseData = [
    { name: 'Skin Analysis', usage: 3420, fill: '#0C8B01' },
    { name: 'Vital Check', usage: 2780, fill: '#2CD025' },
    { name: 'Health Report', usage: 1950, fill: '#92E88E' },
    { name: 'Doctor Consult', usage: 1250, fill: '#0E5C0A' },
  ];

  const aiAccuracyData = [
    { month: 'Apr', skincare: 92.4, vitals: 94.2 },
    { month: 'May', skincare: 92.7, vitals: 94.5 },
    { month: 'Jun', skincare: 93.1, vitals: 94.8 },
    { month: 'Jul', skincare: 93.4, vitals: 95.0 },
    { month: 'Aug', skincare: 93.8, vitals: 95.2 },
    { month: 'Sep', skincare: 94.2, vitals: 95.5 },
    { month: 'Oct', skincare: 94.6, vitals: 95.8 },
  ];

  const revenueData = [
    { month: 'Apr', subscription: 42500, payPerUse: 15200, total: 57700 },
    { month: 'May', subscription: 46800, payPerUse: 16500, total: 63300 },
    { month: 'Jun', subscription: 45300, payPerUse: 17200, total: 62500 },
    { month: 'Jul', subscription: 51200, payPerUse: 18400, total: 69600 },
    { month: 'Aug', subscription: 58900, payPerUse: 20700, total: 79600 },
    { month: 'Sep', subscription: 63400, payPerUse: 22100, total: 85500 },
    { month: 'Oct', subscription: 68700, payPerUse: 24300, total: 93000 },
  ];

  // Stats summary
  const stats = {
    totalUsers: 8245,
    activeUsers: 7710,
    newUsers: 456,
    activeRate: '93.5%',
    monthlyRevenue: '$93,000',
    growthRate: '+13.2%',
    churnRate: '2.3%',
    aiAccuracy: '95.2%'
  };

  // In a real app, you would fetch this data from your API
  useEffect(() => {
    // Simulating API call to fetch statistics data
    // For now, we're using the initial state
  }, []);

  return (
    <AdminDashboardLayout>
      <div className="text-white">
        <div className="mb-6 flex flex-wrap justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Statistics & Analytics</h1>
            <p className="text-gray-400">Monitor your platform's performance and growth metrics</p>
          </div>
          <div className="flex mt-4 md:mt-0">
            <select
              className="bg-[#0F132A] border border-[#252A4A] rounded-md text-white p-2"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
              <option value="quarter">Last 90 Days</option>
              <option value="year">Last 12 Months</option>
            </select>
          </div>
        </div>

        {/* Key Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="Active Users" 
            value={stats.activeUsers.toLocaleString()} 
            change="+6.5% vs last period"
            icon={<FaUsers className="text-[#0C8B01]" size={20} />} 
          />
          <StatCard 
            title="Monthly Revenue" 
            value={stats.monthlyRevenue} 
            change="+8.8% vs last period"
            icon={<FaDollarSign className="text-[#0C8B01]" size={20} />} 
          />
          <StatCard 
            title="Subscription Growth" 
            value={stats.growthRate} 
            change="+2.4% vs last period"
            icon={<FaChartLine className="text-[#0C8B01]" size={20} />} 
          />
          <StatCard 
            title="AI Accuracy Rate" 
            value={stats.aiAccuracy} 
            change="+0.6% vs last period"
            icon={<FaRobot className="text-[#0C8B01]" size={20} />} 
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* User Engagement Chart */}
          <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">User Engagement</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userEngagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#11162F', border: '1px solid #444' }} 
                    labelStyle={{ color: 'white' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="activeUsers" name="Active Users" stroke="#0C8B01" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="newSignups" name="New Signups" stroke="#2CD025" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Subscription Growth & Churn */}
          <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Subscription Growth & Churn</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subscriptionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#11162F', border: '1px solid #444' }} 
                    labelStyle={{ color: 'white' }}
                  />
                  <Legend />
                  <Bar dataKey="growth" name="Growth Rate %" fill="#0C8B01" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="churn" name="Churn Rate %" fill="#FF5252" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Pay-Per-Use Service Distribution */}
          <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Pay-Per-Use Service Distribution</h2>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    dataKey="usage"
                    data={payPerUseData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#11162F', border: '1px solid #444' }} 
                    labelStyle={{ color: 'white' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* AI Scan Success & Accuracy */}
          <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">AI Scan Accuracy Rates</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={aiAccuracyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" domain={[90, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#11162F', border: '1px solid #444' }} 
                    labelStyle={{ color: 'white' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="skincare" name="Skin Care AI" stroke="#0C8B01" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="vitals" name="Vital Check AI" stroke="#2CD025" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Financial Revenue Chart */}
        <div className="bg-[#11162F] p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-lg font-semibold mb-4">Financial Revenue Breakdown</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#11162F', border: '1px solid #444' }} 
                  labelStyle={{ color: 'white' }}
                  formatter={(value) => `$${value.toLocaleString()}`}
                />
                <Legend />
                <Area type="monotone" dataKey="total" name="Total Revenue" stroke="#0C8B01" fill="#0C8B01" fillOpacity={0.2} />
                <Area type="monotone" dataKey="subscription" name="Subscription Revenue" stroke="#2CD025" fill="#2CD025" fillOpacity={0.2} />
                <Area type="monotone" dataKey="payPerUse" name="Pay-Per-Use Revenue" stroke="#92E88E" fill="#92E88E" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Teleconsultation & Health Report Usage */}
        <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Teleconsultation & Health Report Usage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0F132A] p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-md font-medium">Teleconsultations</h3>
                <span className="bg-[#0c8b0120] px-3 py-1 rounded-full text-[#0C8B01] text-sm">+8.3%</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold">523</span>
                <span className="text-gray-400 pb-1">sessions this week</span>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <div className="flex justify-between mb-1">
                  <span>Average duration</span>
                  <span>24 min</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Satisfaction rate</span>
                  <span>92%</span>
                </div>
                <div className="flex justify-between">
                  <span>Completed consults</span>
                  <span>97.3%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0F132A] p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-md font-medium">Health Reports</h3>
                <span className="bg-[#0c8b0120] px-3 py-1 rounded-full text-[#0C8B01] text-sm">+12.4%</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold">1,874</span>
                <span className="text-gray-400 pb-1">generated this week</span>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <div className="flex justify-between mb-1">
                  <span>Skin analysis reports</span>
                  <span>823</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Vital check reports</span>
                  <span>645</span>
                </div>
                <div className="flex justify-between">
                  <span>General health metrics</span>
                  <span>406</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

// Stat Card Component
const StatCard = ({ title, value, change, icon }:any) => {
  return (
    <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-gray-400 text-sm">{title}</h3>
        <div className="bg-[#0c8b0120] p-2 rounded-full">
          {icon}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">{value}</h2>
        <p className="text-[#0C8B01] text-sm mt-1">{change}</p>
      </div>
    </div>
  );
};

export default Statistics;