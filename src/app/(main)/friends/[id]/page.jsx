import QuickActions from "@/components/QuickActions";
import { Archive, BellRing, MessageSquareMore, PhoneCall, Trash2, Video } from "lucide-react";

export default async function FriendDetails({ params }) {

  const { id } = await params;

  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  const friends = await res.json();

  if (!Array.isArray(friends)) {
  return <h1>Invalid data</h1>;
}

  const friend = friends.find(
    (f) => String(f.id) === String(id)
  );

  if (!friend) {
    return <h1 className="p-10">Friend Not Found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto bg-[#FBFAFC] p-6">

      <div className="bg-white rounded-xl shadow p-6 grid md:grid-cols-3 gap-6">

       
        <div className="text-center border-r pr-4">

          <img
            src={friend.picture}
            className="w-20 h-20 rounded-full mx-auto"
          />

          <h2 className="mt-3 font-semibold">{friend.name}</h2>

          <span className={`text-xs px-3 py-1 rounded-full ${
            friend.status === "overdue"
              ? "bg-red-100 text-red-600"
              : friend.status === "almost due"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-600 text-white"
          }`}>
            {friend.status}
          </span>

          <p className="text-sm text-gray-500 mt-3">
            {friend.bio}
          </p>

          <p className="text-xs text-gray-400 mt-2">
            {friend.email}
          </p>

         
          <div className="mt-4 space-y-2">
            <button className="w-full flex justify-center items-center gap-2 border border-gray-50 py-2 rounded shadow bg-white">
              <BellRing size={18} />  Snooze 2 Weeks
            </button>

            <button className="w-full flex justify-center items-center gap-2 border border-gray-50 py-2 rounded shadow bg-white">
               <Archive size={18}/> Archive
            </button>

            <button className="w-full flex items-center justify-center border border-gray-50 py-2 rounded gap-2 text-red-500 shadow bg-white">
            <Trash2 size={18}/>  Delete
            </button>
          </div>

        </div>

      
        <div className="col-span-2 space-y-6">

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">

            <div className="bg-gray-100 p-4 rounded text-center">
              <h3 className="font-bold">
                {friend.days_since_contact}
              </h3>
              <p className="text-sm text-gray-500">
                Days Since Contact
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded text-center">
              <h3 className="font-bold">
                {friend.goal}
              </h3>
              <p className="text-sm text-gray-500">
                Goal (Days)
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded text-center">
              <h3 className="font-bold">
                {friend.next_due_date}
              </h3>
              <p className="text-sm text-gray-500">
                Next Due
              </p>
            </div>

          </div>

    
       <div className="border border-gray-100 p-4 shadow rounded">
        <div className="flex justify-between items-center">
            <h3 className="font-semibold mb-3">Relationship Goal</h3>
            <button className="border border-1 py-1 px-3 border-gray-200 bg-[#F8FAFC] rounded">Edit</button>
          
            </div>

             <p><span className="text-[#64748B] text-[16px]">Connect every</span> <span className="font-bold">{friend.goal} days</span></p>

</div>
 
        
          <div className="border border-gray-100 p-4 rounded">
            <h4 className="font-semibold mb-3">Quick Check-In</h4>

           <QuickActions friend={friend} />
          </div>

        </div>

      </div>

    </div>
  );
}



