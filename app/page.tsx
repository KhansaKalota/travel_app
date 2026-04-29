import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* CAMP */}
      <section id="camp">
        <Camp />
      </section>

      {/* GUIDE */}
      <section id="guide">
        <Guide />
      </section>

      {/* FEATURES */}
      <section id="features">
        <Features />
      </section>

      {/* GET APP */}
      <section id="getapp">
        <GetApp />
      </section>

      {/* SERVICES */}
      <section id="services" className="padding-container py-24 bg-white">
        <div className="max-container">

          <h2 className="bold-52 text-green-700 text-center">
            Our Services
          </h2>

          <p className="regular-16 text-gray-600 text-center mt-3 max-w-[600px] mx-auto">
            Premium travel experiences with safety, guidance, and adventure planning.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="p-8 rounded-3xl border shadow-md hover:shadow-xl transition">
              <h3 className="bold-20 text-green-700">Camping Tours</h3>
              <p className="text-gray-600 mt-2">
                Explore nature safely with expert guided tours.
              </p>
            </div>

            <div className="p-8 rounded-3xl border shadow-md hover:shadow-xl transition">
              <h3 className="bold-20 text-green-700">Offline Maps</h3>
              <p className="text-gray-600 mt-2">
                Navigate anywhere without internet connection.
              </p>
            </div>

            <div className="p-8 rounded-3xl border shadow-md hover:shadow-xl transition">
              <h3 className="bold-20 text-green-700">Trip Planning</h3>
              <p className="text-gray-600 mt-2">
                Custom adventure plans for solo and group trips.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="padding-container py-24 bg-gray-50">
        <div className="max-container text-center">

          <h2 className="bold-52 text-green-700">
            Pricing Plans
          </h2>

          {/* 🔥 FIXED TEXT (BRIGHT + BOLD) */}
          <p className="regular-16 font-semibold text-green-900 tracking-wide mt-3">
            Choose the perfect plan for your adventure
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-12">

            {/* BASIC */}
            <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition">
              <h3 className="bold-20 text-green-700">Basic</h3>
              <p className="text-4xl font-bold mt-4">$9</p>
              <p className="text-gray-500">per month</p>

              <ul className="mt-6 text-gray-600 space-y-2">
                <li>✔ Offline Maps</li>
                <li>✔ Basic Support</li>
              </ul>

              <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-full hover:bg-green-800">
                Choose Plan
              </button>
            </div>

            {/* PRO */}
            <div className="bg-green-700 text-white p-10 rounded-3xl shadow-xl scale-105">
              <h3 className="bold-20">Pro</h3>
              <p className="text-4xl font-bold mt-4">$19</p>
              <p className="text-white/80">per month</p>

              <ul className="mt-6 space-y-2">
                <li>✔ Guided Tours</li>
                <li>✔ Unlimited Trips</li>
              </ul>

              <button className="mt-6 w-full bg-white text-green-700 py-3 rounded-full font-bold">
                Most Popular
              </button>
            </div>

            {/* ELITE */}
            <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition">
              <h3 className="bold-20 text-green-700">Elite</h3>
              <p className="text-4xl font-bold mt-4">$29</p>
              <p className="text-gray-500">per month</p>

              <ul className="mt-6 text-gray-600 space-y-2">
                <li>✔ VIP Support</li>
                <li>✔ Luxury Trips</li>
              </ul>

              <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-full hover:bg-green-800">
                Choose Plan
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="padding-container py-16 bg-green-900 text-white">

        <div className="max-container flex flex-col items-center">

          <h2 className="bold-40">
            Contact Us
          </h2>

          <p className="regular-16 text-white/80 mt-2 text-center max-w-[400px]">
            Send us a message and we will respond quickly.
          </p>

          <form className="mt-6 w-full max-w-[420px] flex flex-col gap-3">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg text-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg text-black"
            />

            <textarea
              placeholder="Message"
              className="p-3 rounded-lg h-[100px] text-black"
            />

            <button
              type="submit"
              className="bg-white text-green-900 font-bold py-3 rounded-full hover:bg-gray-200"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}