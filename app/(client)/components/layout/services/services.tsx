import { plans } from "@/services-plans";

export default function Services() {

  return (
    <section id="services" className="bg-black py-20 px-4 sm:px-6 lg:px-8 scroll-mt-27.5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-anton text-white text-extra-large mb-4 leading-tight">
            What We Offer
          </h2>
          <p className="font-montserrat text-white text-medium max-w-2xl mx-auto opacity-80">
            Choose the perfect plan to elevate your brand and dominate your market
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.highlight ? "ring-4 ring-orange shadow-2xl" : "shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange text-black font-montserrat font-bold text-small px-6 py-2 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <div className="inline-block px-4 py-1 rounded-full mb-4">
                  <span className="font-anton text-black text-medium uppercase">
                    {plan.name}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-montserrat text-black text-default">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full text-black font-montserrat font-bold text-default py-4 rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg uppercase tracking-wide`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-montserrat text-white text-medium mb-6">
            Not sure which plan is right for you?
          </p>
          <a href="#contact" className="bg-white text-black font-montserrat font-bold text-default px-8 py-4 rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-xl uppercase tracking-wide">
            Contact Us for Custom Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
