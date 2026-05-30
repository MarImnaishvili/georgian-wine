import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Mildiani Georgian Wine USA",
  description:
    "Contact Mildiani Wine USA for wholesale inquiries, distribution partnerships, or information about Georgian wines available in the United States.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="text-[#c5a028] text-sm uppercase tracking-widest font-semibold mb-3">
          Get in Touch
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
          Contact Us
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Interested in carrying Mildiani wines? Have a question? We&apos;d
          love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact info */}
        <div className="flex flex-col gap-6">
          {[
            {
              icon: "📦",
              title: "Wholesale Inquiries",
              desc: "Restaurants, wine shops, and distributors interested in carrying Mildiani wines — reach out to discuss partnership opportunities.",
            },
            {
              icon: "🍷",
              title: "Wine Questions",
              desc: "Want to learn more about a specific wine, grape variety, or the Georgian winemaking tradition? We love talking wine.",
            },
            {
              icon: "🌍",
              title: "Where to Buy",
              desc: "Looking for a retailer near you that carries our wines? Contact us and we'll point you in the right direction.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-serif text-lg font-bold text-[#1a1a1a] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}

          <div className="bg-[#722f37] text-white rounded-2xl p-6">
            <div className="font-serif text-xl font-bold mb-2">
              Mildiani Wine USA
            </div>
            <div className="text-red-200 text-sm space-y-1">
              <p>Wholesale Importer & Distributor</p>
              <p>United States</p>
              <p className="mt-3">
                <a
                  href="mailto:info@mildianiwine.com"
                  className="text-[#e8c547] hover:underline"
                >
                  info@mildianiwine.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-6">
            Send Us a Message
          </h2>
          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#722f37]"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#722f37]"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                Subject
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#722f37] bg-white">
                <option>Wholesale Inquiry</option>
                <option>Where to Buy</option>
                <option>Wine Question</option>
                <option>Press / Media</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your inquiry..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#722f37] resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#722f37] hover:bg-[#4a1b21] text-white font-bold py-4 rounded-xl transition-colors text-sm uppercase tracking-wider"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
