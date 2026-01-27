"use client";

import React, { useState } from "react";
import {
  MapPin,
  CalendarDays,
  Clock,
  Share2,
  MessageCircle,
  Mail,
  Link2,
  Star,
  CheckCircle2,
  CalendarPlus,
  X,
} from "lucide-react";

export default function EventsPage() {
  const [open, setOpen] = useState<boolean>(false);
  
  // New states for the form
  const [startDateTime, setStartDateTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [requireApproval, setRequireApproval] = useState(false);


  // Helper to format the date string
  const formatStartDate = (value: string): string => {
    if (!value) return "Select start date & time";
    const date = new Date(value);
    
    // Check for invalid date
    if (isNaN(date.getTime())) return "Invalid Date";

    return date.toLocaleString("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would collect startDateTime and endTime
    console.log("Form Submitted:", { startDateTime, endTime });
    setOpen(false);
  };

  return (
    <>
      {/* ================= MAIN PAGE ================= */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2 space-y-8">
            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-600">
                Featured
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">
                Hybrid
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
                FREE
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Cancer Awareness in Elderly
            </h1>

            {/* Speaker */}
            <div className="flex gap-4 p-5 border rounded-xl bg-white shadow-sm">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold shrink-0">
                DS
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Dr. Somasundar Ponnandai
                </h3>
                <p className="text-sm text-teal-600">
                  MD, MPH, FACS – Chairman of Surgery
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Distinguished Surgical Oncologist specializing in geriatric
                  oncology.
                </p>
              </div>
            </div>

            {/* About */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                About the Event
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Join Dr. Somasundar Ponnandai for a comprehensive cancer
                awareness camp focused on early detection, prevention
                strategies, and treatment options for elderly patients.
              </p>
            </section>

            {/* Why Attend */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                ✨ Why Attend?
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                  Learn from experts in culturally tailored health education
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                  Network with peers and professionals
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                  Take the first step toward a healthier future
                </li>
              </ul>
            </section>

            {/* Ratings */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                Ratings & Reviews
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="p-6 bg-gray-50 rounded-xl text-center w-full sm:w-40">
                  <p className="text-3xl font-bold">—</p>
                  <p className="text-sm text-gray-500 mt-1">0 reviews</p>
                </div>
                <div className="flex-1 space-y-2 w-full">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-3">
                      <span className="text-sm w-8 flex items-center gap-1">
                        {star}
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      </span>
                      <div className="h-2 flex-1 bg-gray-200 rounded-full" />
                      <span className="text-sm text-gray-500">0</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 border rounded-xl p-6 bg-white shadow-sm space-y-6">
              <h3 className="font-semibold">Event Details</h3>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal-600 shrink-0" />
                  Shirdi, Maharashtra
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-teal-600 shrink-0" />
                  February 14, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-teal-600 shrink-0" />
                  8:30 PM • 60 min
                </div>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="w-full py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
              >
                Register Now
              </button>

              {/* Share */}
              <div className="space-y-2">
                <p className="text-sm text-gray-500 text-center flex justify-center gap-2 items-center">
                  <Share2 className="h-4 w-4" />
                  Share with family & friends
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <button className="border rounded-lg py-2 text-sm hover:bg-gray-50 transition-colors">
                    <MessageCircle className="inline h-4 w-4 mr-1 text-green-600" />
                    WhatsApp
                  </button>
                  <button className="border rounded-lg py-2 text-sm hover:bg-gray-50 transition-colors">
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email
                  </button>
                  <button className="border rounded-lg py-2 text-sm hover:bg-gray-50 transition-colors">
                    <Link2 className="inline h-4 w-4 mr-1" />
                    Copy Link
                  </button>
                  <button className="border rounded-lg py-2 text-sm hover:bg-gray-50 transition-colors">
                    <MessageCircle className="inline h-4 w-4 mr-1" />
                    SMS
                  </button>
                </div>
              </div>

              <button className="w-full py-3 rounded-lg bg-teal-700 text-white font-semibold flex items-center justify-center gap-2 hover:bg-teal-800 transition-colors">
                <CalendarPlus className="h-4 w-4" />
                Add to Calendar
              </button>

              <div className="pt-4 border-t text-center">
                <p className="text-xs text-gray-500 mb-2">Proudly supported by</p>
                <div className="bg-orange-500 text-white text-sm font-semibold py-2 rounded-lg">
                  Shree Saibaba Sansthan Trust, Shirdi
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">
              <h2 className="font-semibold text-lg text-gray-900">
                Create Registration
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Event Name
                </label>
                <input
                  type="text"
                  placeholder="Event Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              {/* NEW DYNAMIC DATE SECTION */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* START */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Start</label>
                  <input
                    type="datetime-local"
                    value={startDateTime}
                    onChange={(e) => setStartDateTime(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
                    required
                  />
                  <p className="text-xs text-gray-500 min-h-[1.25rem]">
                    {formatStartDate(startDateTime)}
                  </p>
                </div>

                {/* END */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">End (Time only)</label>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Choose Location"
                  className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  placeholder="Add Description"
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none resize-none"
                />
              </div>

              <div className="flex justify-between items-center border rounded-lg px-4 py-3">
  <span className="text-sm font-medium text-gray-700">
    Require Approval
  </span>

  <button
    type="button"
    role="switch"
    aria-checked={requireApproval}
    onClick={() => setRequireApproval(!requireApproval)}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 
      ${requireApproval ? "bg-teal-600" : "bg-gray-300"}`}
  >
    <span
      className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300
        ${requireApproval ? "translate-x-5" : "translate-x-1"}`}
    />
  </button>
</div>


              <div className="grid grid-cols-2 gap-3">
                <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none bg-white">
                  <option>Free</option>
                  <option>Paid</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none bg-white">
                  <option>Public</option>
                  <option>Private</option>
                </select>
              </div>

              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none bg-white">
                <option>Unlimited Capacity</option>
                <option>50</option>
                <option>100</option>
                <option>200</option>
              </select>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-1/2 border border-gray-300 rounded-lg py-3 font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-teal-600 text-white rounded-lg py-3 font-semibold hover:bg-teal-700 transition-colors shadow-md"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}