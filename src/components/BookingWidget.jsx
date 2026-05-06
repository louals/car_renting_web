import React from 'react';
import { Calendar, MapPin, Clock, Search } from 'lucide-react';

const BookingWidget = () => {
  return (
    <div className="container mx-auto px-6 -mt-20 relative z-40">
      <div className="glass-dark p-2 rounded-3xl border border-white/10 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-2">
          {/* Pick Up */}
          <div className="flex-1 w-full p-4 md:p-6 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer group">
            <div className="flex items-center gap-3 mb-1">
              <MapPin size={16} className="text-white/40 group-hover:text-white transition-colors" />
              <span className="text-[10px] uppercase tracking-widest text-white/40">Location</span>
            </div>
            <div className="text-sm font-semibold">Select Pickup Point</div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/10" />

          {/* Date */}
          <div className="flex-1 w-full p-4 md:p-6 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer group">
            <div className="flex items-center gap-3 mb-1">
              <Calendar size={16} className="text-white/40 group-hover:text-white transition-colors" />
              <span className="text-[10px] uppercase tracking-widest text-white/40">Date Range</span>
            </div>
            <div className="text-sm font-semibold">Pick dates</div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/10" />

          {/* Time */}
          <div className="flex-1 w-full p-4 md:p-6 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer group">
            <div className="flex items-center gap-3 mb-1">
              <Clock size={16} className="text-white/40 group-hover:text-white transition-colors" />
              <span className="text-[10px] uppercase tracking-widest text-white/40">Vehicle Type</span>
            </div>
            <div className="text-sm font-semibold">Luxury Category</div>
          </div>

          {/* Search Button */}
          <button className="w-full md:w-auto h-16 md:h-20 px-8 md:px-12 bg-white text-black rounded-2xl md:rounded-3xl flex items-center justify-center gap-3 font-bold hover:bg-white/90 transition-all active:scale-95 m-1">
            <Search size={20} />
            <span className="md:hidden lg:inline">Find Available</span>
          </button>
        </div>
      </div>
      
      {/* Quick Filters */}
      <div className="flex justify-center gap-4 mt-6">
        {['Instant Booking', 'Airport Transfer', 'Chauffeur Driven'].map((filter) => (
          <button key={filter} className="text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border border-white/5 hover:border-white/20 transition-all text-white/40 hover:text-white">
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookingWidget;
