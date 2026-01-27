'use client'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-600">
            <span className="font-semibold">@Sovaka Health™</span> Patent Pending. All rights reserved
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a 
              href="/contact" 
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              Contact Us
            </a>
            <a 
              href="/cookie-preferences" 
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              Cookie Preferences
            </a>
            <a 
              href="/privacy" 
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              Do Not Sell My Personal Data
            </a>
            <a 
              href="/terms" 
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              Terms and Policies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}