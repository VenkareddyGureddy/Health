// import { Button } from '@/components/ui/button'
// import { Share2 } from 'lucide-react'

// const events = [
//   {
//     id: 1,
//     type: 'Hybrid',
//     typeColor: 'bg-purple-500',
//     title: 'Cancer Awareness in Elderly',
//     date: '14',
//     month: 'Feb',
//     time: '8:30 PM',
//     speaker: 'Dr. Sumsudar Ponna',
//     speakerTitle: 'MD, MPH, FACS - Chairman',
//     location: 'Shirdi, Maharashtra',
//     locationType: 'Virtual Globally',
//     featured: true,
//     free: true,
//   },
//   {
//     id: 2,
//     type: 'Virtual',
//     typeColor: 'bg-green-500',
//     title: 'Understanding and Preventing Osteoporosis',
//     date: '18',
//     month: 'Jan',
//     time: '10:00 AM',
//     speaker: 'David',
//     speakerTitle: 'Sathya Sai International...',
//     location: 'Global (Online)',
//     featured: true,
//     free: true,
//   },
//   {
//     id: 3,
//     type: 'Virtual',
//     typeColor: 'bg-green-500',
//     title: 'Heart Attack',
//     date: '19',
//     month: 'Jan',
//     time: '10:00 AM',
//     dateLabel: 'TOMORROW',
//     speaker: 'Dr. Cesar Molina',
//     speakerTitle: 'MD, FACC - Cardiologist',
//     location: 'Global (Online)',
//     featured: true,
//     free: true,
//   },
// ]

// export default function UpcomingEvents() {
//   return (
//     <div className="bg-gray-50 py-12 px-12">
//       {/* Events Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//         {events.map((event) => (
//           <div
//   key={event.id}
//   className="bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-shadow"
// >
//   <div className="flex">
//     {/* DATE — left (anchored, not centered) */}
//     <div className="w-28 flex justify-center pt-6">
//       <div className="bg-[#F2F8F7] rounded-xl px-4 py-5 flex flex-col items-center">
//         <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
//           Friday
//         </p>
//         <p className="text-4xl font-bold text-teal-700 leading-none">
//           {event.date}
//         </p>
//         <p className="text-sm text-gray-500">{event.month}</p>
//         <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
//           ⏱ {event.time}
//         </div>
//       </div>
//     </div>

//     {/* CONTENT — middle (constrained width) */}
//     <div className="flex-1 pt-6 pb-6 pr-4">
//       <div className="max-w-md">
//         {/* Hybrid badge */}
//         <span
//           className={`${event.typeColor} text-white text-xs font-semibold px-4 py-1 rounded-full inline-flex items-center gap-1 mb-3`}
//         >
//           ⊕ {event.type}
//         </span>

//         {/* Title */}
//         <h3 className="text-xl font-serif font-semibold text-gray-900 leading-snug mb-3">
//           {event.title}
//         </h3>

//         {/* Speaker */}
//         <div className="flex items-start gap-2 mb-2">
//           <span className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 text-sm">
//             🎙
//           </span>
//           <div>
//             <p className="text-sm font-semibold text-gray-700">
//               {event.speaker}
//             </p>
//             <p className="text-sm text-gray-500">
//               {event.speakerTitle}
//             </p>
//           </div>
//         </div>

//         {/* Location */}
//         <div className="flex items-start gap-2 mb-3">
//           <span className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 text-sm">
//             📍
//           </span>
//           <div className="text-sm">
//             <p className="text-gray-700">{event.location}</p>
//             {event.locationType && (
//               <p className="text-green-600 font-medium">
//                 + {event.locationType}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Featured + Free */}
//         <div className="flex items-center gap-4 mb-4">
//           {event.featured && (
//             <span className="text-orange-500 text-sm font-semibold flex items-center gap-1">
//               ⭐ Featured
//             </span>
//           )}
//           {event.free && (
//             <span className="bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
//               FREE
//             </span>
//           )}
//         </div>

//         {/* CTA ROW (centered Register) */}
//         <div className="flex items-center justify-between">
//           <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-2 rounded-xl">
//             Register
//           </Button>

//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-xl"
//           >
//             <Share2 className="w-4 h-4" />
//           </Button>
//         </div>
//       </div>
//     </div>

//     {/* IMAGE — right (more breathing space) */}
//     <div className="w-36 flex items-start justify-center pt-8">
//       <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
//         🖼
//       </div>
//     </div>
//   </div>
// </div>



//         ))}
//       </div>

//       {/* Feedback CTA */}
//       <div className="bg-white rounded-lg p-8 mb-8 border border-orange-200">
//         <div className="flex items-center justify-center gap-3">
//           <span className="text-4xl">📋</span>
//           <p className="text-lg text-orange-600 font-semibold italic">
//             Share Your MVP Feedback Win a $50 Gift Card
//           </p>
//         </div>
//       </div>

//       {/* Partner CTA */}
//       <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 border border-orange-200">
//         <div className="flex items-start gap-4">
//           <span className="text-5xl">💎</span>
//           <div>
//             <h3 className="text-xl font-semibold text-teal-700 mb-2">
//               Interested in becoming a Sponsor/Partner with us to make a difference globally?
//             </h3>
//             <p className="text-teal-600">
//               Support our mission and reach global audience through expert-led health education
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
'use client'
import EventCard from "./event-card"
import EventCard1 from "./event-card1"
import EventCard2 from "./event-card2"

const events = [
  {
    id: 1,
    type: 'Hybrid',
    title: 'Cancer Awareness in Elderly',
    date: '14',
    dayName: 'Friday',
    month: 'Feb',
    time: '8:30 PM',
    speaker: 'Dr. Sumsudar Ponna',
    speakerCredentials: 'MD, MPH, FACS – Chairman',
    location: 'Shirdi, Maharashtra',
    locationType: 'Virtual Globally',
    featured: true,
    free: true,
  },
  {
    id: 2,
    type: 'Virtual',
    title: 'Understanding and Preventing Osteoporosis',
    date: '18',
    dayName: 'Friday',
    month: 'Jan',
    time: '10:00 AM',
    speaker: 'David',
    speakerCredentials: 'Sathya Sai International',
    location: 'Global (Online)',
    featured: true,
    free: true,
  },
  {
    id: 3,
    type: 'Virtual',
    title: 'Heart Attack',
    date: '19',
    dayName: 'Friday',
    month: 'Jan',
    time: '10:00 AM',
    speaker: 'Dr. Cesar Molina',
    speakerCredentials: 'MD, FACC – Cardiologist',
    location: 'Global (Online)',
    featured: true,
    free: true,
  },
]

export default function UpcomingEvents() {
  const handleRegister = (id) => console.log('Register', id)
  const handleShare = (id) => console.log('Share', id)

  return (
    <section className="bg-gray-50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => {
            // Select a component based on the index (0, 1, 2)
            let CardComponent;
            
            if (index === 0) CardComponent = EventCard;
            else if (index === 1) CardComponent = EventCard1;
            else CardComponent = EventCard2;

            return (
              <CardComponent
                key={event.id}
                {...event}
                onRegister={() => handleRegister(event.id)}
                onShare={() => handleShare(event.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  )
}