"use client";

import { Plus } from "lucide-react";

export default function Banner() {
  return (
    <section className="bg-[#FBFAFc]" >
      <div className="max-w-7xl w-full mx-auto   border-b border-gray-200 py-20 px-4">
  
      <div className="text-center max-w-1120 mx-auto">
       
   <h1 className="text-4xl font-bold  mb-5">
        Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mb-10">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the<br/>
relationships that matter most.
        </p>

        <button className="flex items-center gap-2 mx-auto bg-[#244D3f] text-white px-5 py-2  rounded hover:opacity-80 transition">
          <Plus size={18} />
          Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-5xl mx-auto">
        
        <div className="bg-white p-5  rounded shadow text-center">
      <h2 className="text-2xl font-bold text-[#244D3F] ">12</h2>
          <p className="text-[#64748B]">Total Friends</p>
        </div>

        <div className="bg-white p-5 rounded shadow text-center">
          <h2 className="text-2xl font-bold text-[#244D3F]">3</h2>
          <p className="text-[#64748B]">New Requests</p>
              </div>
   
        <div className="bg-white p-5 rounded shadow text-center">
          <h2 className="text-2xl font-bold text-[#244D3f]">6</h2>
        <p className="text-[#64748B]">Online Now</p>
          </div>

        <div className="bg-white p-5 rounded shadow text-center">
      <h2 className="text-2xl font-bold text-[#244D3f]">12</h2>
           <p className="text-[#64748B]">Groups</p>
        </div>

      </div>
</div>
    </section>
  );
}