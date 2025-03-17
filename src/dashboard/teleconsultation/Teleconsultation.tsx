import React, { useState, useEffect } from 'react';
import AdminDashboardLayout from '../../component/AdminDashboardLayout';
import { FaCalendarAlt, FaUserMd, FaNotesMedical, FaPrescriptionBottleAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';

const Teleconsultation = () => {
  // Sample appointments data
  const appointments = [
    {
      id: "apt_12345",
      patientId: "user_789",
      patientName: "John Doe",
      doctorId: "doc_123",
      doctorName: "Dr. Sarah Brown",
      specialization: "Dermatology",
      date: "2023-10-20",
      time: "10:00 AM",
      status: "Scheduled",
      duration: 30,
      notes: "Follow-up on skin condition"
    },
    {
      id: "apt_12346",
      patientId: "user_790",
      patientName: "Jane Smith",
      doctorId: "doc_124",
      doctorName: "Dr. Michael Clark",
      specialization: "General Medicine",
      date: "2023-10-19",
      time: "2:30 PM",
      status: "Completed",
      duration: 20,
      notes: "Regular checkup"
    },
    {
      id: "apt_12347",
      patientId: "user_791",
      patientName: "Michael Johnson",
      doctorId: "doc_125",
      doctorName: "Dr. Emily White",
      specialization: "Cardiology",
      date: "2023-10-21",
      time: "11:15 AM",
      status: "Scheduled",
      duration: 45,
      notes: "Heart rate monitoring follow-up"
    },
    {
      id: "apt_12348",
      patientId: "user_792",
      patientName: "Emily Williams",
      doctorId: "doc_123",
      doctorName: "Dr. Sarah Brown",
      specialization: "Dermatology",
      date: "2023-10-19",
      time: "9:00 AM",
      status: "Completed",
      duration: 30,
      notes: "Skin analysis review"
    },
    {
      id: "apt_12349",
      patientId: "user_793",
      patientName: "David Brown",
      doctorId: "doc_126",
      doctorName: "Dr. Robert Johnson",
      specialization: "General Medicine",
      date: "2023-10-22",
      time: "3:45 PM",
      status: "Scheduled",
      duration: 30,
      notes: "First consultation"
    }
  ];

  // Sample doctors data
  const doctors = [
    {
      id: "doc_123",
      name: "Dr. Sarah Brown",
      specialization: "Dermatology",
      availability: "Mon-Fri, 9 AM - 5 PM",
      rating: 4.8,
      totalConsultations: 245,
      status: "Available"
    },
    {
      id: "doc_124",
      name: "Dr. Michael Clark",
      specialization: "General Medicine",
      availability: "Mon-Wed, 10 AM - 6 PM",
      rating: 4.7,
      totalConsultations: 178,
      status: "Available"
    },
    {
      id: "doc_125",
      name: "Dr. Emily White",
      specialization: "Cardiology",
      availability: "Tue-Sat, 8 AM - 4 PM",
      rating: 4.9,
      totalConsultations: 312,
      status: "Busy"
    },
    {
      id: "doc_126",
      name: "Dr. Robert Johnson",
      specialization: "General Medicine",
      availability: "Mon-Fri, 11 AM - 7 PM",
      rating: 4.6,
      totalConsultations: 156,
      status: "Available"
    },
    {
      id: "doc_127",
      name: "Dr. Jessica Lee",
      specialization: "Dermatology",
      availability: "Wed-Sun, 9 AM - 5 PM",
      rating: 4.7,
      totalConsultations: 198,
      status: "Off-duty"
    }
  ];

  // Sample consultation notes data
  const consultationNotes = [
    {
      id: "note_7890",
      appointmentId: "apt_12346",
      patientName: "Jane Smith",
      doctorName: "Dr. Michael Clark",
      date: "2023-10-19",
      summary: "Regular checkup. Patient reports feeling well overall.",
      details: "Vital signs normal. No significant concerns. Advised to maintain current health regimen.",
      followUp: "3 months"
    },
    {
      id: "note_7891",
      appointmentId: "apt_12348",
      patientName: "Emily Williams",
      doctorName: "Dr. Sarah Brown",
      date: "2023-10-19",
      summary: "Skin analysis review. Improvement in skin condition noted.",
      details: "Reduced irritation and redness. Current treatment showing positive results.",
      followUp: "1 month"
    }
  ];

  // Filter states
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');

  // Charts data
  const appointmentsPerDayData = [
    { day: 'Mon', count: 32 },
    { day: 'Tue', count: 38 },
    { day: 'Wed', count: 45 },
    { day: 'Thu', count: 40 },
    { day: 'Fri', count: 37 },
    { day: 'Sat', count: 28 },
    { day: 'Sun', count: 15 },
  ];

  const specializationDistributionData = [
    { name: 'Dermatology', value: 215, fill: '#0C8B01' },
    { name: 'General Medicine', value: 178, fill: '#2CD025' },
    { name: 'Cardiology', value: 95, fill: '#92E88E' },
    { name: 'Other', value: 35, fill: '#0E5C0A' },
  ];

  const consultationDurationData = [
    { month: 'May', avgDuration: 23 },
    { month: 'Jun', avgDuration: 25 },
    { month: 'Jul', avgDuration: 24 },
    { month: 'Aug', avgDuration: 26 },
    { month: 'Sep', avgDuration: 28 },
    { month: 'Oct', avgDuration: 30 },
  ];

  // Summary metrics
  const metrics = {
    todayAppointments: 18,
    activeConsultations: 3,
    completedToday: 12,
    avgSatisfaction: '4.8/5'
  };

  // Filter appointments
  const filteredAppointments = appointments.filter(apt => {
    const matchesStatus = statusFilter === 'All' || apt.status === statusFilter;
    const matchesSearch = apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         apt.doctorName.toLowerCase().includes(searchTerm.toLowerCase());
    
    // For date filtering - this is simplified for demo purposes
    const isUpcoming = new Date(apt.date) >= new Date();
    const matchesDate = dateFilter === 'all' || 
                       (dateFilter === 'upcoming' && isUpcoming) ||
                       (dateFilter === 'past' && !isUpcoming);
    
    return matchesStatus && matchesSearch && matchesDate;
  });

  // In a real app, you would fetch this data from your API
  useEffect(() => {
    // Simulating API call to fetch teleconsultation data
    // For now, we're using the initial state
  }, []);

  return (
    <AdminDashboardLayout>
      <div className="text-white">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Teleconsultation & Medical Services</h1>
          <p className="text-gray-400">Manage appointments, doctors, and medical records</p>
        </div>

        {/* Key Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="Today's Appointments" 
            value={metrics.todayAppointments} 
            icon={<FaCalendarAlt size={20} />} 
          />
          <StatCard 
            title="Active Consultations" 
            value={metrics.activeConsultations} 
            icon={<FaUserMd size={20} />} 
          />
          <StatCard 
            title="Completed Today" 
            value={metrics.completedToday} 
            icon={<FaNotesMedical size={20} />} 
          />
          <StatCard 
            title="Avg. Satisfaction" 
            value={metrics.avgSatisfaction} 
            icon={<FaPrescriptionBottleAlt size={20} />} 
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button className="bg-[#11162F] p-4 rounded-lg shadow-lg hover:bg-[#161f45] transition-colors duration-200">
            <div className="flex items-center gap-3 text-[#0C8B01]">
              <FaUserMd size={20} />
              <span className="font-medium">Add New Doctor</span>
            </div>
          </button>
          <button className="bg-[#11162F] p-4 rounded-lg shadow-lg hover:bg-[#161f45] transition-colors duration-200">
            <div className="flex items-center gap-3 text-[#0C8B01]">
              <FaNotesMedical size={20} />
              <span className="font-medium">View Consultation Records</span>
            </div>
          </button>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Appointments Per Day */}
          <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Appointments Per Day</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={appointmentsPerDayData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="day" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#11162F', border: '1px solid #444' }} 
                    labelStyle={{ color: 'white' }}
                  />
                  <Legend />
                  <Bar dataKey="count" name="Appointments" fill="#0C8B01" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Specialization Distribution */}
          <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Consultation by Specialization</h2>
            <div className="h-72 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={specializationDistributionData}
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
        </div>

        {/* Average Consultation Duration */}
        <div className="bg-[#11162F] p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-lg font-semibold mb-4">Average Consultation Duration (minutes)</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={consultationDurationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" domain={[0, 40]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#11162F', border: '1px solid #444' }} 
                  labelStyle={{ color: 'white' }}
                />
                <Legend />
                <Line type="monotone" dataKey="avgDuration" name="Avg. Duration" stroke="#0C8B01" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="bg-[#11162F] p-4 rounded-lg shadow-lg mb-6">
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Appointment Management</h2>
            <div className="flex gap-3 mt-2 md:mt-0">
              <select
                className="p-2 bg-[#0F132A] border border-[#252A4A] rounded-md text-white text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <select
                className="p-2 bg-[#0F132A] border border-[#252A4A] rounded-md text-white text-sm"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
                <option value="all">All Dates</option>
              </select>
              <input
                type="text"
                placeholder="Search..."
                className="p-2 bg-[#0F132A] border border-[#252A4A] rounded-md text-white text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Appointments Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0F132A] text-left">
                  <th className="p-3">ID</th>
                  <th className="p-3">Patient</th>
                  <th className="p-3">Doctor</th>
                  <th className="p-3">Date & Time</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((apt) => (
                  <tr key={apt.id} className="border-t border-[#252A4A] hover:bg-[#0F132A]">
                    <td className="p-3 text-sm text-gray-400">{apt.id}</td>
                    <td className="p-3">{apt.patientName}</td>
                    <td className="p-3">
                      <div className="flex items-center">
                        <span>{apt.doctorName}</span>
                        <span className="ml-2 text-xs text-gray-400">({apt.specialization})</span>
                      </div>
                    </td>
                    <td className="p-3">{apt.date} at {apt.time}</td>
                    <td className="p-3">{apt.duration} min</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        apt.status === 'Scheduled' 
                          ? 'bg-blue-900 text-blue-300' 
                          : apt.status === 'Completed' 
                            ? 'bg-green-900 text-green-300' 
                            : 'bg-red-900 text-red-300'
                      }`}>
                        {apt.status}
                      </span>
                    </td>
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
        </div>

        {/* Doctors Section */}
        <div className="bg-[#11162F] p-4 rounded-lg shadow-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Available Doctors</h2>
            <button className="px-4 py-2 bg-[#0C8B01] rounded-md hover:bg-[#097001] transition-colors text-sm">
              + New Doctor
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctors.slice(0, 3).map((doctor) => (
              <div key={doctor.id} className="bg-[#0F132A] p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0C8B01] flex items-center justify-center text-white font-bold text-lg">
                    {doctor.name.charAt(3)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{doctor.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        doctor.status === 'Available' 
                          ? 'bg-green-900 text-green-300' 
                          : doctor.status === 'Busy' 
                            ? 'bg-yellow-900 text-yellow-300' 
                            : 'bg-gray-700 text-gray-300'
                      }`}>
                        {doctor.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{doctor.specialization}</p>
                    
                    <div className="mt-2 flex flex-col gap-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Availability:</span>
                        <span>{doctor.availability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rating:</span>
                        <span>{doctor.rating} ⭐</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Consultations:</span>
                        <span>{doctor.totalConsultations}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex justify-end">
                      <button className="px-3 py-1 bg-[#0C8B01] rounded-md hover:bg-[#097001] transition-colors text-xs">
                        View Schedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <Link to="/dashboard/teleconsultation/doctors" className="text-[#0C8B01] text-sm hover:underline">
              View All Doctors
            </Link>
          </div>
        </div>

        {/* Recent Consultation Notes */}
        <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Consultation Notes</h2>
            <Link to="/dashboard/teleconsultation/notes" className="text-[#0C8B01] text-sm hover:underline">
              View All Notes
            </Link>
          </div>

          <div className="space-y-4">
            {consultationNotes.map((note) => (
              <div key={note.id} className="bg-[#0F132A] p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{note.patientName}</h3>
                    <p className="text-sm text-gray-400">{note.doctorName} - {note.date}</p>
                  </div>
                  <span className="px-3 py-1 bg-[#252A4A] rounded-md text-xs">
                    Follow up: {note.followUp}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium">Summary: {note.summary}</p>
                  <p className="text-sm text-gray-400 mt-1">Details: {note.details}</p>
                </div>
                <div className="mt-3 flex justify-end">
                  <button className="px-3 py-1 bg-[#252A4A] rounded-md hover:bg-[#353D6A] transition-colors text-xs">
                    View Full Note
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon }:any) => {
  return (
    <div className="bg-[#11162F] p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-400 text-sm">{title}</h3>
        <div className="bg-[#0c8b0120] p-2 rounded-full text-[#0C8B01]">
          {icon}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>
    </div>
  );
};

export default Teleconsultation;