import { Search } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 w-full bg-black/95 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-xl"></div>
            <h1 className="text-2xl font-bold">Best Assured Realty</h1>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <Link href="/properties" className="hover:text-yellow-400">Properties</Link>
            <a href="#" className="hover:text-yellow-400">Short Let</a>
            <a href="#" className="hover:text-yellow-400">Blog</a>
            <a href="#" className="hover:text-yellow-400">Agents</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 border border-white/30 rounded-full hover:bg-white/10 transition text-sm">List Property</button>
            <button className="bg-yellow-400 text-black px-6 py-2.5 rounded-full font-medium hover:bg-yellow-300 transition">Sign In</button>
          </div>
        </div>
      </nav>

      <section className="hero-bg h-screen flex items-center justify-center text-center pt-16">
        <div className="max-w-4xl px-6">
          <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-6">Own Your <span className="gold-text">Legacy</span></h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Ultra-luxury homes • Smart investments • Premium living across Nigeria and beyond</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties" className="bg-white text-black px-10 py-4 rounded-full text-lg font-medium flex items-center gap-2 hover:bg-yellow-400 transition"><Search size={24} /> Browse Properties</Link>
            <button className="border border-white/60 px-10 py-4 rounded-full text-lg hover:bg-white/10 transition">Learn More</button>
          </div>
        </div>
      </section>

      <div className="py-16 bg-zinc-950 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6 text-center">
          <div><div className="text-5xl font-bold gold-text">$4.2B+</div><p className="text-gray-400 mt-2">Total Sales</p></div>
          <div><div className="text-5xl font-bold gold-text">15k+</div><p className="text-gray-400 mt-2">Properties</p></div>
          <div><div className="text-5xl font-bold gold-text">98%</div><p className="text-gray-400 mt-2">Client Satisfaction</p></div>
          <div><div className="text-5xl font-bold gold-text">32</div><p className="text-gray-400 mt-2">Countries</p></div>
        </div>
      </div>
    </main>
  );
}