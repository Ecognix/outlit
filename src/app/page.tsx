import { Calendar, Users, MapPin, Palette, Music } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">OUTLIT<span className="text-rose-500">.</span></div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
            <a href="#events" className="hover:text-neutral-900 transition-colors">Events</a>
            <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
            <a href="#booking" className="hover:text-neutral-900 transition-colors">Book Now</a>
          </div>
          <a href="#booking" className="bg-neutral-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors">
            Join the Club
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-rose-50 text-rose-500 rounded-full text-sm font-medium tracking-wide">
          Based in Guwahati
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Curated social experiences for the modern crowd.
        </h1>
        <p className="text-xl text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          From intimate canvas evenings to high-energy singles mixers. OutLit Social brings together 
          Guwahati&apos;s most vibrant community of professionals and creatives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#events" className="bg-neutral-900 text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors text-lg">
            Explore Events
          </a>
          <a href="#about" className="bg-white text-neutral-900 px-8 py-4 rounded-full font-medium border border-neutral-200 hover:border-neutral-300 transition-colors text-lg">
            How it works
          </a>
        </div>
      </header>

      {/* Stats Banner */}
      <div className="border-y border-neutral-200 bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-1">50+</div>
            <div className="text-sm text-neutral-500">Events Hosted</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">2000+</div>
            <div className="text-sm text-neutral-500">Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">Guwahati</div>
            <div className="text-sm text-neutral-500">Primary Location</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">4.9/5</div>
            <div className="text-sm text-neutral-500">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <section id="events" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Experiences by OutLit</h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">Discover our signature events crafted to spark genuine connections.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-white border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center mb-6 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                {event.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{event.title}</h3>
              <p className="text-neutral-500 leading-relaxed mb-6">{event.description}</p>
              <a href="#booking" className="text-sm font-medium text-neutral-900 inline-flex items-center hover:text-rose-500 transition-colors">
                Book a spot &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-neutral-50 rounded-[2.5rem] p-8 md:p-14 border border-neutral-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Join the Guestlist</h2>
            <p className="text-neutral-500">Reserve your spot for our upcoming exclusive events.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700 block">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-all bg-white" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700 block">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-all bg-white" placeholder="Doe" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700 block">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-all bg-white" placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700 block">Interested In</label>
              <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-all bg-white appearance-none cursor-pointer">
                <option value="">Select an event...</option>
                <option value="singles-mixer">Singles Mixer</option>
                <option value="speed-dating">Speed Dating</option>
                <option value="canvas-evening">Canvas Evening</option>
                <option value="musical-night">Musical Night</option>
                <option value="couple-meetup">Couple Meetup</option>
              </select>
            </div>

            <button type="button" className="w-full bg-neutral-900 text-white font-medium px-8 py-4 rounded-xl hover:bg-neutral-800 transition-colors mt-8">
              Submit Request
            </button>
            <p className="text-xs text-center text-neutral-400 mt-4">
              By submitting, you agree to our terms of service and privacy policy.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-white tracking-tighter">OUTLIT<span className="text-rose-500">.</span></div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} OutLit Social. Guwahati, India.
          </div>
        </div>
      </footer>
    </div>
  );
}

const events = [
  {
    title: "Singles Mixer",
    description: "Curated environments designed to take the pressure off dating. Meet like-minded professionals in a relaxed setting.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Speed Dating",
    description: "Structured, fun, and efficient. Meet multiple interesting people in one evening through carefully timed interactions.",
    icon: <Calendar className="w-6 h-6" />
  },
  {
    title: "Canvas Evening",
    description: "Let your creativity flow. Guided painting sessions paired with curated music and great company.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "Musical Nights",
    description: "Intimate acoustic sessions featuring local and traveling artists in cozy, perfectly lit venues around the city.",
    icon: <Music className="w-6 h-6" />
  },
  {
    title: "Couples Meetup",
    description: "Double dating reimagined. Join other couples for game nights, dinners, and group activities.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Secret Locations",
    description: "Exclusive pop-up events at undisclosed locations revealed to ticket holders just 24 hours before.",
    icon: <MapPin className="w-6 h-6" />
  }
];
