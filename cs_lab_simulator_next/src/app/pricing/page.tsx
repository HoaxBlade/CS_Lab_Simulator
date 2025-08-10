"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Pricing() {
  const pathname = usePathname();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#C6F7A5] to-white">
      {/* Navbar */}
      <nav className="w-full flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-8 gap-4 sm:gap-0 bg-[#C6F7A5] mb-0">
        <Link href="/" className={`text-xl font-extrabold transition-colors mb-2 sm:mb-0 ${pathname === '/' ? 'text-black' : 'text-gray-700 hover:text-gray-700'}`}>CS Lab Simulator</Link>
        <div className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-20 w-full sm:w-auto">
          <a href="/services" className={`transition-colors ${pathname === '/services' ? 'text-black font-bold' : 'text-gray-600 hover:text-black transform:text duration-300 font-semibold'}`}>Services</a>
          <a href="/features" className={`transition-colors ${pathname === '/features' ? 'text-black font-bold' : 'text-gray-600 hover:text-black transform:text duration-300 font-semibold'}`}>Features</a>
          <a href="/pricing" className={`transition-colors ${pathname === '/pricing' ? 'text-black font-bold' : 'text-gray-600 hover:text-black transform:text duration-300 font-semibold'}`}>Pricing</a>
          <a href="/faq" className={`transition-colors ${pathname === '/faq' ? 'text-black font-bold' : 'text-gray-600 hover:text-black transform:text duration-300 font-semibold'}`}>FAQ</a>
          <a href="/simulation" className={`transition-colors ${pathname === '/simulation' ? 'text-black font-bold' : 'text-gray-600 hover:text-black transform:text duration-300 font-semibold'}`}>Simulation</a>
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
          <Link href="/signup" className={`transition-colors ${pathname === '/signup' ? 'text-black font-bold' : 'text-gray-600 hover:text-black font-bold'}`}>Sign Up</Link>
          <Link href="/signin" className={`transition-colors transition-shadow duration-300 font-semibold shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.25),0_4px_6px_-4px_rgba(0,0,0,0.25)]`} style={{ backgroundColor: '#D4FF5B', paddingLeft: '2.25rem', paddingRight: '2.25rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', borderRadius: '0.5rem', fontWeight: 'bold', color: pathname === '/signin' ? 'black' : '#222' }}>Sign In</Link>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center pt-20 pb-16">
        <h1 className="text-4xl font-extrabold text-black mb-6 md:text-6xl">
          Choose your plan
        </h1>
        <p className="text-lg text-black max-w-2xl mx-auto">
          Select the perfect plan that fits your business needs and budget.
        </p>
      </div>
      {/* Pricing cards */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic plan */}
          <div className="bg-white border border-black border-b-4 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <h3 className="text-2xl font-bold text-black mb-4"> Basic </h3>
            <div className="text-4xl font-bold text-black mb-2"> $29 </div>
            <div className="text-gray-600 mb-8"> per month </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="mr-3"></span>
                Feature-1
              </li>
              <li className="flex items-center">
                <span className="mr-3"></span>
                Feature-2
              </li>
              <li className="flex items-center">
                <span className="mr-3"></span>
                Feature-3
              </li>
              <li className="flex items-center">
                <span className="mr-3"></span>
                Feature-4
              </li>
            </ul>
            
            <button className="w-full bg-[#D4FF5B] text-black font-bold py-3 rounded-lg border border-black hover:bg-[#C6F7A5] transition-colors">
              Get Started
            </button>
          </div>
          {/* Pro plan */}
          <div className="bg-[#D4FF5B] border-2 border-black rounded-2xl p-8 shadow-xl relative hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="absolute -top-4 left-1/2 transform -transform-x-1/2 bg-black text-[#D4FF5B] px-4 py-1 rounded-full text-sm font-bold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-black mb-4"> Pro </h3>
            <div className="text-4xl font-bold text-black mb-2"> $79 </div>
            <div className="text-gray-600 mb-8"> per month </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-black">
                <span className="mr-3">✓</span>
                Everything in Basic
              </li>
              <li className="flex items-center text-black">
                <span className="mr-3">✓</span>
                Feature 4
              </li>
              <li className="flex items-center text-black">
                <span className="mr-3">✓</span>
                Feature 5
              </li>
              <li className="flex items-center text-black">
                <span className="mr-3">✓</span>
                Feature 6
              </li>
            </ul>

            <button className="w-full bg-black text-[#D4FF5B] font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border border-black rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <h3 className="text-2xl font-bold text-black mb-4">Enterprise</h3>
            <div className="text-4xl font-bold text-black mb-2">$199</div>
            <div className="text-gray-600 mb-8">per month</div>
            
            <ul className="space-y-4 mb-8">
            <li className="flex items-center text-black">
              <span className="mr-3">✓</span>
              Everything in Pro
            </li>
            <li className="flex items-center text-black">
              <span className="mr-3">✓</span>
              Feature 7
            </li>
            <li className="flex items-center text-black">
              <span className="mr-3">✓</span>
              Feature 8
            </li>
            <li className="flex items-center text-black">
              <span className="mr-3">✓</span>
              Feature 9
            </li>
            </ul>
            
            <button className="w-full bg-[#D4FF5B] text-black font-bold py-3 rounded-lg border border-black hover:bg-[#C6F7A5] transition-colors">
            Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
