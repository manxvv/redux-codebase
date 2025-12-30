import React, { useState, useRef, useEffect } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
} from 'recharts';
import { 
  ShieldCheck, AlertTriangle, Activity, Database, 
  ChevronDown, LayoutDashboard, Radio, Check, Moon, Sun
} from 'lucide-react';

// --- Reusable Functional Dropdown Component ---
const FilterDropdown = ({ label, options, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all duration-200 border shadow-sm
          ${isOpen 
            ? 'bg-indigo-50 dark:bg-neutral-800 border-indigo-200 dark:border-indigo-500/50 ring-2 ring-indigo-100 dark:ring-indigo-900/30' 
            : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 active:scale-95'}`}
      >
        <span className="text-neutral-400 dark:text-neutral-500 font-medium">{label}:</span>
        <span className="font-bold">{selected}</span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-500' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-2xl z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2 text-[10px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest border-b border-neutral-50 dark:border-neutral-800 mb-1">
            Select {label}
          </div>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => { setSelected(option); setIsOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-indigo-50 dark:hover:bg-neutral-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {option}
              {selected === option && <Check size={14} className="text-indigo-500" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Main Dashboard Component ---
const Dashboard = () => {
  const [isDark, setIsDark] = useState(false);

  // Toggle dark class on parent container or body
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`${isDark ? 'dark' : ''} transition-colors duration-300`}>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 p-4 md:p-8 text-neutral-900 dark:text-neutral-100 font-sans">
        
        {/* Header Area */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-xl shadow-indigo-500/20">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight dark:text-white">IPSEC Executive</h1>
              <p className="text-neutral-500 dark:text-neutral-500 text-sm font-medium">Network Security Operations</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <FilterDropdown label="Market" defaultValue="National" options={['National', 'North', 'South']} />
            <FilterDropdown label="OEM" defaultValue="All Vendors" options={['All Vendors', 'Nokia', 'Ericsson']} />
            
            {/* Theme Toggle */}
           
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard title="Total Planned" value="1,400" sub="Sites" color="indigo" />
          <StatCard title="Completed" value="1,050" sub="75% Target" color="emerald" />
          <StatCard title="In Progress" value="330" sub="Active" color="amber" />
          <StatCard title="Blocked" value="20" sub="Urgent" color="rose" />
        </div>

        {/* Main Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Trend Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-neutral-900 p-6 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <div className="flex items-center justify-between mb-8 px-2">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Activity size={20} className="text-indigo-500" />
                Deployment Trend
              </h3>
              <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-neutral-400">
                <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-indigo-500" /> Planned</span>
                <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Completed</span>
              </div>
            </div>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="colorPlanned" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#262626" : "#f5f5f5"} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#737373', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#737373', fontSize: 12}} />
                  <Tooltip 
                     contentStyle={{ 
                        backgroundColor: isDark ? '#171717' : '#fff',
                        borderColor: isDark ? '#262626' : '#e5e7eb',
                        borderRadius: '16px',
                        color: isDark ? '#fff' : '#000'
                     }}
                  />
                  <Area type="monotone" dataKey="planned" stroke="#6366f1" strokeWidth={4} fillOpacity={1} fill="url(#colorPlanned)" />
                  <Area type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={4} fillOpacity={0} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Readiness Blockers */}
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <h3 className="font-bold text-lg text-rose-500 mb-6 flex items-center gap-2">
              <Database size={20} />
              Readiness Gap
            </h3>
            <div className="space-y-6">
               <div className="p-6 bg-rose-50 dark:bg-rose-500/10 rounded-2xl border border-rose-100 dark:border-rose-500/20">
                  <p className="text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-widest mb-1">Blocked Sites</p>
                  <p className="text-4xl font-black text-rose-800 dark:text-rose-500">20</p>
               </div>
               <div className="space-y-5 px-1">
                  <ProgressBar label="Certificate Issue" value={45} color="bg-indigo-500" count="9" />
                  <ProgressBar label="Routing Config" value={30} color="bg-amber-500" count="6" />
                  <ProgressBar label="Hardware Fault" value={25} color="bg-rose-500" count="5" />
               </div>
            </div>
          </div>
        </div>

        {/* Footer Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-900 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-neutral-50 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/30">
              <h3 className="font-bold flex items-center gap-2"><LayoutDashboard size={18} className="text-indigo-500" /> Validation KPIs</h3>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="text-neutral-400 dark:text-neutral-500 text-[10px] uppercase font-bold tracking-widest border-b border-neutral-50 dark:border-neutral-800">
                  <th className="px-6 py-4">Metric</th>
                  <th className="px-6 py-4 text-right">Pre</th>
                  <th className="px-6 py-4 text-right">Post</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-neutral-50 dark:divide-neutral-800">
                {[['Accessibility', '98.2%', '99.1%'], ['Retainability', '0.5%', '0.2%'], ['Throughput', '45M', '62M']].map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-neutral-600 dark:text-neutral-400">{row[0]}</td>
                    <td className="px-6 py-4 text-right font-medium text-neutral-400">{row[1]}</td>
                    <td className="px-6 py-4 text-right font-black text-emerald-500">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-neutral-50 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/30 flex justify-between">
              <h3 className="font-bold flex items-center gap-2"><Radio size={18} className="text-rose-500 animate-pulse" /> Active Alarms</h3>
              <span className="text-[10px] font-black bg-rose-500 text-white px-2 py-0.5 rounded">LIVE</span>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
               {['IPsec Tunnel Down', 'IKEv2 Auth Fail', 'Cert Expiring', 'SeGW Offline'].map((alarm, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-rose-200 dark:hover:border-rose-900/50 transition-all group">
                   <div className="bg-rose-50 dark:bg-rose-900/20 text-rose-500 p-2.5 rounded-xl group-hover:bg-rose-500 group-hover:text-white transition-all">
                     <AlertTriangle size={18} />
                   </div>
                   <div>
                     <p className="text-xs font-bold text-neutral-700 dark:text-neutral-300">{alarm}</p>
                     <p className="text-[10px] text-neutral-400 dark:text-neutral-500">3 Sites Impacted</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Components ---
const StatCard = ({ title, value, sub, color }) => {
  const styles = {
    indigo: 'border-indigo-100 dark:border-indigo-900/30 hover:shadow-indigo-500/10',
    emerald: 'border-emerald-100 dark:border-emerald-900/30 hover:shadow-emerald-500/10',
    rose: 'border-rose-100 dark:border-rose-900/30 hover:shadow-rose-500/10',
    amber: 'border-amber-100 dark:border-amber-900/30 hover:shadow-amber-500/10',
  };
  return (
    <div className={`bg-white dark:bg-neutral-900 p-6 rounded-[2rem] border shadow-sm transition-all duration-300 hover:scale-[1.03] ${styles[color]}`}>
      <p className="text-neutral-400 dark:text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{title}</p>
      <h2 className="text-3xl font-black tracking-tight text-neutral-800 dark:text-neutral-100">{value}</h2>
      <p className="text-neutral-400 dark:text-neutral-600 text-[11px] mt-1 font-medium">{sub}</p>
    </div>
  );
};

const ProgressBar = ({ label, value, color, count }) => (
  <div className="group">
    <div className="flex justify-between text-[11px] font-bold text-neutral-500 mb-2">
      <span className="flex items-center gap-2 dark:text-neutral-400"><div className={`w-1.5 h-1.5 rounded-full ${color}`}></div> {label}</span>
      <span className="text-neutral-400 dark:text-neutral-600 italic">{count} sites</span>
    </div>
    <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full transition-all duration-1000 group-hover:brightness-110`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

const trendData = [
  { name: 'W1', planned: 200, completed: 150 },
  { name: 'W2', planned: 450, completed: 320 },
  { name: 'W3', planned: 800, completed: 580 },
  { name: 'W4', planned: 1100, completed: 890 },
  { name: 'W5', planned: 1400, completed: 1050 },
];

export default Dashboard;