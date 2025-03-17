import React, { useState, useEffect } from 'react';
import AdminDashboardLayout from '../../component/AdminDashboardLayout';
import { FaRegCreditCard, FaHistory, FaTag, FaUndo, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Subscription = () => {
  // Sample subscription data for demonstration
  const subscriptions = [
    {
      id: "sub_12345",
      userId: "user_789",
      userName: "John Doe",
      plan: "Premium",
      status: "Active",
      startDate: "2023-08-15",
      nextBillingDate: "2023-11-15",
      amount: 49.99,
      paymentMethod: "Credit Card",
      autoRenew: true
    },
    {
      id: "sub_12346",
      userId: "user_790",
      userName: "Jane Smith",
      plan: "Basic",
      status: "Active",
      startDate: "2023-09-02",
      nextBillingDate: "2023-10-02",
      amount: 19.99,
      paymentMethod: "PayPal",
      autoRenew: true
    },
    {
      id: "sub_12347",
      userId: "user_791",
      userName: "Michael Johnson",
      plan: "Professional",
      status: "Active",
      startDate: "2023-07-10",
      nextBillingDate: "2023-10-10",
      amount: 79.99,
      paymentMethod: "Credit Card",
      autoRenew: true
    },
    {
      id: "sub_12348",
      userId: "user_792",
      userName: "Emily Williams",
      plan: "Premium",
      status: "Expiring",
      startDate: "2023-06-22",
      nextBillingDate: "2023-10-22",
      amount: 49.99,
      paymentMethod: "Credit Card",
      autoRenew: false
    },
    {
      id: "sub_12349",
      userId: "user_793",
      userName: "David Brown",
      plan: "Basic",
      status: "Expired",
      startDate: "2023-05-15",
      nextBillingDate: "2023-09-15",
      amount: 19.99,
      paymentMethod: "PayPal",
      autoRenew: false
    }
  ];

  // Sample payment data
  const payments = [
    {
      id: "pay_56789",
      userId: "user_789",
      userName: "John Doe",
      date: "2023-10-15",
      amount: 49.99,
      method: "Credit Card",
      status: "Completed",
      description: "Premium Plan - Monthly"
    },
    {
      id: "pay_56790",
      userId: "user_790",
      userName: "Jane Smith",
      date: "2023-10-02",
      amount: 19.99,
      method: "PayPal",
      status: "Completed",
      description: "Basic Plan - Monthly"
    },
    {
      id: "pay_56791",
      userId: "user_791",
      userName: "Michael Johnson",
      date: "2023-10-10",
      amount: 79.99,
      method: "Credit Card",
      status: "Completed",
      description: "Professional Plan - Monthly"
    },
    {
      id: "pay_56792",
      userId: "user_794",
      userName: "Sarah Davis",
      date: "2023-10-08",
      amount: 9.99,
      method: "Credit Card",
      status: "Completed",
      description: "Pay-Per-Use: Skin Analysis"
    },
    {
      id: "pay_56793",
      userId: "user_795",
      userName: "Robert Wilson",
      date: "2023-10-05",
      amount: 14.99,
      method: "PayPal",
      status: "Completed",
      description: "Pay-Per-Use: Teleconsultation"
    }
  ];

  // Sample promo codes
  const promoCodes = [
    {
      code: "WELCOME25",
      discount: "25%",
      type: "Percentage",
      validUntil: "2023-12-31",
      usageLimit: 1000,
      usedCount: 423,
      status: "Active"
    },
    {
      code: "SUMMER10",
      discount: "10%",
      type: "Percentage",
      validUntil: "2023-10-31",
      usageLimit: 500,
      usedCount: 287,
      status: "Active"
    },
    {
      code: "HEALTH20",
      discount: "20%",
      type: "Percentage",
      validUntil: "2023-11-30",
      usageLimit: 300,
      usedCount: 189,
      status: "Active"
    }
  ];

  // Filter states
  const [planFilter, setPlanFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Charts data
  const subscriptionDistributionData = [
    { name: 'Basic', value: 2154, fill: '#92E88E' },
    { name: 'Premium', value: 962, fill: '#2CD025' },
    { name: 'Professional', value: 376, fill: '#0C8B01' },
  ];

  const revenueByTypeData = [
    { name: 'Jan', subscription: 42000, payPerUse: 12000 },
    { name: 'Feb', subscription: 44000, payPerUse: 14000 },
    { name: 'Mar', subscription: 47000, payPerUse: 15000 },
    { name: 'Apr', subscription: 49000, payPerUse: 16000 },
    { name: 'May', subscription: 52000, payPerUse: 17000 },
    { name: 'Jun', subscription: 54000, payPerUse: 18000 },
    { name: 'Jul', subscription: 58000, payPerUse: 20000 },
    { name: 'Aug', subscription: 62000, payPerUse: 22000 },
    { name: 'Sep', subscription: 67000, payPerUse: 23000 },
    { name: 'Oct', subscription: 72000, payPerUse: 25000 },
  ];

  // Summary metrics
  const metrics = {
    activeSubscriptions: 3286,
    revenueThisMonth: '$97,000',
    averageValue: '$42.50',
    renewalRate: '88%'
  };

  // Filter subscriptions
  const filteredSubscriptions = subscriptions.filter(sub => {
    const matchesPlan = planFilter === 'All' || sub.plan === planFilter;
    const matchesStatus = statusFilter === 'All' || sub.status === statusFilter;
    const matchesSearch = sub.userName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         sub.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesPlan && matchesStatus && matchesSearch;
  });

  // In a real app, you would fetch this data from your API
  useEffect(() => {
    // Simulating API call to fetch subscription data
    // For now, we're using the initial state
  }, []);

  return (
    <AdminDashboardLayout>
      <div className="text-white">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Subscription & Payments</h1>
          <p className="text-gray-400">Manage subscriptions, payments, and promotional offers</p>
        </div>

        {/* Quick Access Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <QuickAccessCard 
            title="Active Subscriptions" 
            icon={<FaRegCreditCard size={20} />}
            link="/dashboard/subscription/active"
            count={metrics.activeSubscriptions}
          />
          <QuickAccessCard 
            title="Payment History" 
            icon={<FaHistory size={20} />}
            link="/dashboard/subscription/transactions"
            count={payments.length}
          />
          <QuickAccessCard 
            title="Promo Codes" 
            icon={<FaTag size={20} />}
            link="/dashboard/subscription/promo-codes"
            count={promoCodes.length}
          />
          <QuickAccessCard 
            title="Refunds & Disputes" 
            icon={<FaUndo size={20} />}
            link="/dashboard/subscription/refunds"
            count="12"
          />
          <QuickAccessCard 
            title="Pay-Per-Use" 
            icon={<FaShoppingCart size={20} />}
            link="/dashboard/subscription/pay-per-use"
            count="428"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Subscription Distribution */}
          <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Subscription Distribution</h2>
            <div className="h-72 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={subscriptionDistributionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
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
          
          {/* Revenue by Type */}
          <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Revenue by Type</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueByTypeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#11162F', border: '1px solid #444' }} 
                    labelStyle={{ color: 'white' }}
                    formatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Legend />
                  <Bar dataKey="subscription" name="Subscription Revenue" stackId="a" fill="#0C8B01" />
                  <Bar dataKey="payPerUse" name="Pay-Per-Use Revenue" stackId="a" fill="#2CD025" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Subscription Management Section */}
        <div className="bg-[#11162F] p-4 rounded-lg shadow-lg mb-6">
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Subscription Management</h2>
            <button className="px-4 py-2 bg-[#0C8B01] rounded-md hover:bg-[#097001] transition-colors text-sm">
              + New Subscription
            </button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <input
                type="text"
                placeholder="Search by name or ID..."
                className="w-full p-2 bg-[#0F132A] border border-[#252A4A] rounded-md text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                className="w-full p-2 bg-[#0F132A] border border-[#252A4A] rounded-md text-white"
                value={planFilter}
                onChange={(e) => setPlanFilter(e.target.value)}
              >
                <option value="All">All Plans</option>
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
                <option value="Professional">Professional</option>
              </select>
            </div>
            <div>
              <select
                className="w-full p-2 bg-[#0F132A] border border-[#252A4A] rounded-md text-white"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Expiring">Expiring</option>
                <option value="Expired">Expired</option>
              </select>
            </div>
          </div>

          {/* Subscriptions Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0F132A] text-left">
                  <th className="p-3">Customer</th>
                  <th className="p-3">Plan</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Start Date</th>
                  <th className="p-3">Next Billing</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscriptions.map((sub) => (
                  <tr key={sub.id} className="border-t border-[#252A4A] hover:bg-[#0F132A]">
                    <td className="p-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#0C8B01] flex items-center justify-center text-white font-semibold mr-2">
                          {sub.userName.charAt(0)}
                        </div>
                        <div>{sub.userName}</div>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        sub.plan === 'Premium' 
                          ? 'bg-purple-900 text-purple-300' 
                          : sub.plan === 'Professional' 
                            ? 'bg-[#0C8B01] text-green-300' 
                            : 'bg-gray-700 text-gray-300'
                      }`}>
                        {sub.plan}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        sub.status === 'Active' 
                          ? 'bg-green-900 text-green-300' 
                          : sub.status === 'Expiring' 
                            ? 'bg-yellow-900 text-yellow-300' 
                            : 'bg-red-900 text-red-300'
                      }`}>
                        {sub.status}
                      </span>
                    </td>
                    <td className="p-3">{sub.startDate}</td>
                    <td className="p-3">{sub.nextBillingDate}</td>
                    <td className="p-3">${sub.amount}</td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <button className="px-2 py-1 bg-[#252A4A] rounded hover:bg-[#353D6A] transition-colors text-xs">
                          View
                        </button>
                        <button className="px-2 py-1 bg-[#0C8B01] rounded hover:bg-[#097001] transition-colors text-xs">
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
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-400">
              Showing {filteredSubscriptions.length} of {subscriptions.length} subscriptions
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-[#0F132A] rounded-md disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-[#0C8B01] rounded-md">1</button>
              <button className="px-3 py-1 bg-[#0F132A] rounded-md">2</button>
              <button className="px-3 py-1 bg-[#0F132A] rounded-md">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Recent Payments Section */}
        <div className="bg-[#11162F] p-4 rounded-lg shadow-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Payments</h2>
            <Link to="/dashboard/subscription/transactions" className="text-[#0C8B01] text-sm hover:underline">
              View All Payments
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0F132A] text-left">
                  <th className="p-3">ID</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Method</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Description</th>
                </tr>
              </thead>
              <tbody>
                {payments.slice(0, 5).map((payment) => (
                  <tr key={payment.id} className="border-t border-[#252A4A] hover:bg-[#0F132A]">
                    <td className="p-3 text-sm text-gray-400">{payment.id}</td>
                    <td className="p-3">{payment.userName}</td>
                    <td className="p-3">{payment.date}</td>
                    <td className="p-3">${payment.amount}</td>
                    <td className="p-3">{payment.method}</td>
                    <td className="p-3">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-900 text-green-300">
                        {payment.status}
                      </span>
                    </td>
                    <td className="p-3">{payment.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Promo Codes Section */}
        <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Active Promo Codes</h2>
            <button className="px-4 py-2 bg-[#0C8B01] rounded-md hover:bg-[#097001] transition-colors text-sm">
              + New Promo Code
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0F132A] text-left">
                  <th className="p-3">Code</th>
                  <th className="p-3">Discount</th>
                  <th className="p-3">Valid Until</th>
                  <th className="p-3">Usage</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {promoCodes.map((code) => (
                  <tr key={code.code} className="border-t border-[#252A4A] hover:bg-[#0F132A]">
                    <td className="p-3 font-medium">{code.code}</td>
                    <td className="p-3">{code.discount}</td>
                    <td className="p-3">{code.validUntil}</td>
                    <td className="p-3">
                      <div className="flex items-center">
                        <div className="w-full bg-[#252A4A] rounded-full h-2.5 mr-2">
                          <div 
                            className="bg-[#0C8B01] h-2.5 rounded-full" 
                            style={{ width: `${(code.usedCount / code.usageLimit) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-400">{code.usedCount}/{code.usageLimit}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-900 text-green-300">
                        {code.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <button className="px-2 py-1 bg-[#252A4A] rounded hover:bg-[#353D6A] transition-colors text-xs">
                          Edit
                        </button>
                        <button className="px-2 py-1 bg-red-900 rounded hover:bg-red-800 transition-colors text-xs">
                          Disable
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default Subscription;