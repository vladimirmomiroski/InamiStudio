export default function HeroBanner() {
  return (
    <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-green/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-125 h-125 bg-orange/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-yellow/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 py-32 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-green/10 text-green font-montserrat text-small font-semibold px-5 py-2 rounded-full uppercase tracking-wide">
                Creative Marketing Studio
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-anton text-black text-[4rem] lg:text-[5.5rem] leading-none">
              We Turn Ideas
              <br />
              Into <span className="text-green">Iconic</span>
              <br />
              Brands
            </h1>

            {/* Description */}
            <p className="font-montserrat text-black/70 text-medium leading-relaxed max-w-xl">
              A brother-sister studio where creativity meets strategy. We design stunning visuals
              and build powerful digital experiences that make your brand unforgettable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="bg-green text-white font-montserrat font-bold text-default px-10 py-5 rounded-xl hover:shadow-xl hover:shadow-green/30 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Let&apos;s Collaborate
              </a>
              <a
                href="#about"
                className="bg-white border-2 border-black/10 text-black font-montserrat font-semibold text-default px-10 py-5 rounded-xl hover:border-green hover:bg-green/5 transition-all duration-300 text-center"
              >
                Meet the Team
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8">
              <div>
                <div className="font-anton text-green text-large leading-none mb-1">50+</div>
                <div className="font-montserrat text-black/60 text-small">Happy Clients</div>
              </div>
              <div>
                <div className="font-anton text-orange text-large leading-none mb-1">2+</div>
                <div className="font-montserrat text-black/60 text-small">Years Creating</div>
              </div>
              <div>
                <div className="font-anton text-yellow text-large leading-none mb-1">100%</div>
                <div className="font-montserrat text-black/60 text-small">Passion Driven</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Outer ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-dashed border-green/20 animate-spin" style={{ animationDuration: '20s' }}></div>
            {/* Inner ring */}
            <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-dashed border-orange/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

            {/* Center Card */}
            <div className="relative z-10 bg-white shadow-2xl rounded-3xl p-10 flex flex-col items-center gap-4 w-56">
              <div className="w-16 h-16 bg-green rounded-2xl flex items-center justify-center shadow-lg shadow-green/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <p className="font-montserrat text-black font-bold text-default">We Design</p>
              <p className="font-montserrat text-black/50 text-small text-center">Brands that people remember</p>
            </div>

            {/* Floating Card - Top Left */}
            <div className="absolute top-8 left-4 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3 z-10">
              <div className="w-10 h-10 bg-orange/20 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                </svg>
              </div>
              <div>
                <p className="font-montserrat font-bold text-black text-small">Strategy</p>
                <p className="font-montserrat text-black/40 text-[0.7rem]">Data driven</p>
              </div>
            </div>

            {/* Floating Card - Bottom Right */}
            <div className="absolute bottom-8 right-4 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3 z-10">
              <div className="w-10 h-10 bg-yellow/20 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-montserrat font-bold text-black text-small">Results</p>
                <p className="font-montserrat text-black/40 text-[0.7rem]">That convert</p>
              </div>
            </div>

            {/* Floating Card - Bottom Left */}
            <div className="absolute bottom-16 left-2 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3 z-10">
              <div className="w-10 h-10 bg-green/20 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="font-montserrat font-bold text-black text-small">Passion</p>
                <p className="font-montserrat text-black/40 text-[0.7rem]">In every pixel</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:flex">
        <div className="flex flex-col items-center gap-2">
          <span className="font-montserrat text-black/40 text-[0.75rem] uppercase tracking-widest">Explore</span>
          <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-green rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}