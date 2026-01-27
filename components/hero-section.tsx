import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="flex items-center gap-8 px-12 py-16">
      {/* Left Content */}
      <div className="flex-1">
        <div className=" p-8">
          <h1 className="text-5xl font-bold text-orange-500 mb-6">
            Expert Health Guidance!<br />
            Anytime, Anywhere for Everyone!
          </h1>

          <p className="text-xl text-teal-600 italic mb-6 leading-relaxed">
            We solve the global gap in reliable care by making expert-led education accessible and easy to understand.
          </p>

          <p className="text-lg text-teal-600 leading-relaxed">
            Educate, empower & elevate your health & wellbeing
          </p>
        </div>
      </div>

      {/* Right - Illustration with Badge */}
      <div className="flex-1 relative">
        <div className="bg-blue-100 rounded-lg overflow-hidden">
          <Image
            src="/heroimage.png"
            alt="Global healthcare professionals"
            width={500}
            height={350}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Top Badge */}
        {/* <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          ✓ Various Health Conditions
        </div> */}

        {/* Bottom Badge */}
        {/* <div className="absolute bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          ⊕ One Stop Global Platform for Health
        </div> */}
      </div>
    </section>
  )
}
