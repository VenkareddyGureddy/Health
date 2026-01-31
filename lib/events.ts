export type Event = {
  id: number
  type: string
  title: string
  date: string
  dayName: string
  month: string
  time: string
  speaker: string
  speakerCredentials?: string
  speakerDescription?: string
  location: string
  locationType?: string
  featured?: boolean
  free?: boolean
  description?: string       
  aboutEvent?: string         
}

export const events: Event[] = [
  {
    id: 1,
    type: "Hybrid",
    title: "Cancer Awareness in Elderly",
    date: "14",
    dayName: "Friday",
    month: "Feb",
    time: "8:30 PM",
    speaker: "Dr. Sumsudar Ponna",
    speakerCredentials: "MD, MPH, FACS – Chairman",
    speakerDescription:
      "Dr. Somasundar Ponnandai is a globally respected oncologist with decades of experience in cancer prevention, early diagnosis, and public health education.",

    location: "Shirdi, Maharashtra",
    locationType: "Virtual Globally",
    featured: true,
    free: true,
    description:
      "A cancer awareness session focused on early detection and prevention.",
    aboutEvent:
      "This event is designed to educate elderly individuals and caregivers about the early warning signs of cancer, prevention strategies, and the importance of regular screenings. The session includes expert insights, real-life case discussions, and a live Q&A with the speaker.",
  },

  {
    id: 2,
    type: "Virtual",
    title: "Understanding and Preventing Osteoporosis",
    date: "18",
    dayName: "Friday",
    month: "Jan",
    time: "10:00 AM",
    speaker: "David",
    speakerCredentials: "Sathya Sai International",
    speakerDescription:
      "David is a senior wellness educator specializing in bone health, aging, and preventive lifestyle practices.",
    location: "Global (Online)",
    featured: true,
    free: true,
    description:
      "Learn how to prevent osteoporosis and maintain strong bones.",
    aboutEvent:
      "This virtual session focuses on osteoporosis prevention through proper nutrition, regular exercise, and lifestyle changes. Attendees will gain practical knowledge to maintain bone strength and reduce fracture risk, especially in older age.",
  },

  {
    id: 3,
    type: "Virtual",
    title: "Heart Attack",
    date: "19",
    dayName: "Saturday",
    month: "Jan",
    time: "11:00 AM",
    speaker: "Dr. Cesar Molina",
    speakerCredentials: "MD, FACC – Cardiologist",
    speakerDescription:
      "Dr. Cesar Molina is a board-certified cardiologist known for his work in heart disease prevention, patient education, and clinical research.",
    location: "Global (Online)",
    featured: false,
    free: true,
    description:
      "Understand heart attack symptoms and prevention strategies.",
    aboutEvent:
      "This session provides critical information on recognizing early symptoms of heart attacks, understanding risk factors, and adopting heart-healthy habits. The event includes actionable advice and a live interaction with the cardiologist.",
  },
]
