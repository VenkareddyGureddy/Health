import FeedbackBanner from '../components/FeedbackBanner'
import HeroSection from '../components/hero-section'
import PartnersScrollbar from '../components/partners-scrollbar'
import UpcomingEvents from '../components/upcoming-events'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main content with hero and sidebar */}
      <div className="flex">
        {/* Left - Hero Section */}
        <div className="flex-1">
          <HeroSection />
        </div>

        {/* Right - Partners Sidebar */}
        <div className="w-32  border-l border-gray-200">
          <PartnersScrollbar />
        </div>
      </div>

      {/* Bottom - Upcoming Events and CTA Sections */}
      <UpcomingEvents />
      <FeedbackBanner />
    </div>
  )
}
