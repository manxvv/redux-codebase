import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  Check, 
  CheckCircle2, 
  ShieldCheck, 
  Database,
  Globe,
  Cpu,
  Activity,
  KeyRound,
  RefreshCcw,
  AlertCircle, // Added for "Not Ready" status
  XCircle      // Added for "Not Ready" status
} from 'lucide-react';

// --- Reusable Modern Filter Dropdown ---
const FilterDropdown = ({ label, options, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative min-w-[160px] flex-1 md:flex-none" ref={dropdownRef}>
      <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500 mb-1.5 ml-1">
        {label}
      </label>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-2 rounded-xl text-sm transition-all duration-200 border
          ${isOpen 
            ? 'bg-neutral-50 dark:bg-neutral-800 border-indigo-500/50 ring-2 ring-indigo-500/10' 
            : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm'}`}
      >
        <span className="font-bold truncate">{selected}</span>
        <ChevronDown size={14} className={`text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-500' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-xl shadow-xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-150">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => { setSelected(option); setIsOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
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

// --- Check Item Component (Enhanced Status Visuals) ---
const ReadinessCheck = ({ title, subtext, icon: Icon, isComplete }) => {
  return (
    <div className={`group flex flex-col p-5 bg-white dark:bg-neutral-900 border rounded-2xl shadow-sm transition-all duration-300
      ${isComplete 
        ? 'border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/30' 
        : 'border-rose-100 dark:border-rose-900/30 hover:border-rose-500/50 bg-rose-50/10'}`}>
      
      <div className="flex items-start justify-between mb-4">
        {/* Dynamic Icon Colors */}
        <div className={`p-2.5 rounded-xl transition-colors
          ${isComplete 
            ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
            : 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400'}`}>
          <Icon size={20} />
        </div>

        {/* Dynamic Status Icon */}
        {isComplete ? (
          <div className="bg-emerald-500 dark:bg-emerald-500/20 p-1 rounded-full text-white dark:text-emerald-400">
             <CheckCircle2 size={18} fill="currentColor" className="text-white dark:text-neutral-900" />
          </div>
        ) : (
          <div className="bg-rose-500 dark:bg-rose-500/20 p-1 rounded-full text-white dark:text-rose-400 animate-pulse">
             <AlertCircle size={18} fill="currentColor" className="text-white dark:text-neutral-900" />
          </div>
        )}
      </div>
      
      <div>
        <h4 className="font-bold text-neutral-800 dark:text-neutral-100 text-[15px] leading-snug">
          {title}
        </h4>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 font-medium italic">
          {subtext}
        </p>
      </div>

      {/* Dynamic Status Text Footer */}
      <div className={`mt-4 pt-4 border-t flex items-center justify-between
        ${isComplete ? 'border-neutral-50 dark:border-neutral-800' : 'border-rose-100/50 dark:border-rose-900/20'}`}>
         <span className={`text-[10px] font-black uppercase tracking-[0.1em] px-2 py-0.5 rounded
            ${isComplete 
              ? 'text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10' 
              : 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10'}`}>
            {isComplete ? 'System Ready' : 'Incomplete'}
         </span>
         
         <div className="flex gap-1">
            {[1,2,3].map(i => (
              <div key={i} className={`w-1 h-1 rounded-full 
                ${isComplete ? 'bg-emerald-500' : 'bg-rose-300 dark:bg-rose-900'}`}>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
const PreVal = () => {
  // UPDATED DATA: Some are complete, some are not
  const readinessList = [
    { title: "SeGW Reachability", subtext: "ICMP Ping & Routing Verification", icon: Globe, isComplete: true },
    { title: "Certificate Validity", subtext: "Trust Chain & Expiry Validation", icon: KeyRound, isComplete: true },
    { title: "IKEv2 Profile Match", subtext: "Config Profile Consistency", icon: ShieldCheck, isComplete: false },
    { title: "IPv6 Readiness", subtext: "Dual Stack Protocol Compatibility", icon: Cpu, isComplete: true },
    { title: "MTU/MSS Compliance", subtext: "Packet Fragmentation Check", icon: Database, isComplete: false },
    { title: "KPI Baseline Captured", subtext: "Statistical Performance Reference", icon: Activity, isComplete: true },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 px-4 py-8 md:px-10 lg:px-16 transition-colors duration-300">
      
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <header className="mb-12 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl shadow-lg">
                <ShieldCheck size={24} />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white">
                Pre-Validation
              </h1>
            </div>
            <p className="text-neutral-500 dark:text-neutral-500 font-medium text-sm">
              Live status for <span className="text-neutral-900 dark:text-neutral-100 font-bold underline decoration-indigo-500">Site Xxxxx_1A</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-neutral-900 p-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
             <FilterDropdown label="Market" options={['National', 'East', 'West']} defaultValue="National" />
             <div className="hidden md:block w-px h-10 bg-neutral-100 dark:bg-neutral-800 mx-1"></div>
             <FilterDropdown label="OEM" options={['All', 'Nokia', 'Ericsson']} defaultValue="All" />
             <div className="hidden md:block w-px h-10 bg-neutral-100 dark:bg-neutral-800 mx-1"></div>
             <FilterDropdown label="Site Search" options={['Xxxxx_1A', 'Xxxxx_1B']} defaultValue="Xxxxx_1A" />
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                Action Required (2 Blockers Detected)
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {readinessList.map((item, index) => (
              <ReadinessCheck 
                key={index} 
                title={item.title} 
                subtext={item.subtext} 
                icon={item.icon} 
                isComplete={item.isComplete} // Passing the dynamic status
              />
            ))}
          </div>

          {/* Dynamic Footer: Changes color if there are blockers */}
          <div className={`mt-12 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl transition-colors duration-500
            ${readinessList.some(i => !i.isComplete) 
              ? 'bg-neutral-800 dark:bg-neutral-900 shadow-neutral-500/10' 
              : 'bg-indigo-600 shadow-indigo-500/20'}`}>
             
             <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                <ShieldCheck size={300} strokeWidth={1} />
             </div>

             <div className="relative z-10 max-w-2xl">
                {readinessList.some(i => !i.isComplete) ? (
                  <>
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                       <AlertCircle className="text-rose-400" />
                       Pre-Validation Incomplete
                    </h3>
                    <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                      Multiple system readiness checks have failed or are still pending. Please review the <b>IKEv2 Profile Match</b> and <b>MTU Compliance</b> logs before proceeding to deployment.
                    </p>
                    <button className="bg-rose-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-rose-600 transition-colors">
                      Fix Connectivity Issues
                    </button>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-3">Site Fully Validated</h3>
                    <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                      All checks have passed. This site is cleared for post-implementation testing.
                    </p>
                    <button className="bg-white text-indigo-600 px-6 py-2.5 rounded-xl font-bold text-sm">
                      Next: Implementation
                    </button>
                  </>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreVal;