import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import { FiUsers, FiBox, FiDollarSign, FiBarChart2 } from 'react-icons/fi';
import ProjectionsChart from '../components/dashboard/ProjectionsChart';
import RevenueChart from '../components/dashboard/RevenueChart';
import LocationMap from '../components/dashboard/LocationMap';
import TopProducts from '../components/dashboard/TopProducts';
import TotalSales from '../components/dashboard/TotalSales';

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-foreground">eCommerce</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
          <StatCard title="Customers" value="3,781" change="+11.01%" isPositive={true} icon={<FiUsers />} />
          <StatCard title="Orders" value="1,219" change="-0.03%" isPositive={false} icon={<FiBox />} />
          <StatCard title="Revenue" value="$695" change="+15.03%" isPositive={true} icon={<FiDollarSign />} />
          <StatCard title="Growth" value="30.1%" change="+6.08%" isPositive={true} icon={<FiBarChart2 />} />
        </div>
        <div className="w-full lg:w-1/2">
          <ProjectionsChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RevenueChart />
          <TopProducts />
        </div>
        <div className="lg:col-span-1 space-y-6">
          {/* Swapped these two components */}
          <LocationMap />
          <TotalSales />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;