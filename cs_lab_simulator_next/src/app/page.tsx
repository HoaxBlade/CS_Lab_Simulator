//Main Landing page design 

"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mascotRef.current && !mascotRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      
      <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center pb-0 min-h-screen font-[family-name:var(--font-geist-sans)] bg-white">
        <nav className="w-full flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-8 row-start-1 gap-4 sm:gap-0 bg-[#C6F7A5] mb-0">
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
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
          <section className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 bg-gradient-to-b from-[#C6F7A5] to-white mt-0">
            {/* left: text content */}
            <div className="flex-1 flex flex-col items-start max-w-2xl ml-24 mt-34">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-black">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-lg md:text-lg mb-8 text-black font-medium">
                Lorem ipsum dolor sit amet consectetur. Leo gravida ornare tristique donec amet vitae sit massa. Nisi nascetur aliquam pulvinar pellentesque vel orci enim. Praesent mi commodo integer convallis mi lorem vitae donec. Vestibulum arcu dictum pellentesque bibendum nunc nunc aliquet ultricies.
              </p>
              <a href="/simulation" className="text-black bg-[#D4FF5B] rounded-sm shadow-lg font-bold px-6 py-3 hover:shadow-xl transition-shadow ">
                Try Now <span aria-hidden>→</span>
              </a>
            </div>
            {/* right: Illustration.svg */}
            <div className="flex-1 flex items-center justify-center ml-24">
              <Image src="/Illustration.svg" alt="Illustration of a developer and computer" width={400} height={300} className="w-full max-w-md"/>
            </div>
          </section>
          <section className="w-full mt-20 px-4">
            <div className="max-ww-6xl mx-auto ml-22 mr-22">
              {/* Title and description */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
                <h2 className="text-black text-3xl md:text-4xl font-extrabold bg-[#D4FF5B] inline-block px-3 py-1 rounded-sm mb-2 md:mb-0">
                  Services
                </h2>
                <p className="text-black text-lg font-medium md:ml-2 max-w-xl">
                  At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                </p>
              </div>
              {/* Service cards grid */}
              {/* first row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="rounded-[45px] border border-black border-b-6 p-8 bg-white shadow-md flex flex-row justify-between items-center min-h-[385px]">
                  <div className="flex flex-col justify-between h-full">
                    <h3 className="text-4xl font-extrabold text-black mb-4">
                      <span className="bg-[#D4FF5B] px-2 py-1 rounded-lg ">Search engine</span>
                      <br />
                      
                      <span className="bg-[#D4FF5B] px-2 py-1 mt-1 inline-block rounded-lg">optimization</span>
                    </h3>
                    <a href="#" className="flex items-center mt-8 text-black font-semibold text-xl hover:underline">
                      <span className="mr-2 rounded-full bg-black p-2 flex items-center justify-center ">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="rotate-315">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="#D4FF5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      Learn more
                    </a>
                  </div>
                  <Image src="/seo.svg" alt="SEO" width={250} height={198} className="w-50 h-70" />
                </div>
                <div className="rounded-[45px] border border-black border-b-6 p-8 bg-[#D4FF5B] shadow-md flex flex-row justify-between items-center min-h-[385px]">
                  <div className="flex flex-col justify-between h-full">
                    <h3 className="text-4xl font-extrabold text-black mb-4">
                      <span className="bg-white px-2 py-1 rounded-lg">Pay-per-click</span>
                      <br />
                      <span className="bg-white px-2 py-1 mt-1 inline-block rounded-lg">advertising</span>
                    </h3>
                    <a href="#" className="flex items-center mt-8 text-black font-semibold text-xl hover:underline">
                      <span className="mr-2 rounded-full bg-black p-2 flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="rotate-315">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="#D4FF5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      Learn more
                    </a>
                  </div>
                  <Image src="/ppc.svg" alt="PPC" width={96} height={96} className="w-50 h-70" />
                </div>
              </div>
              {/* second row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
                <div className="rounded-[45px] border border-black border-b-6 p-8 bg-black shadow-md flex flex-row justify-between items-center min-h-[385px]">
                  <div className="flex flex-col justify-between h-full">
                    <h3 className="text-4xl font-extrabold text-black mb-4">
                      <span className="bg-[#fff] px-2 py-1 rounded-lg ">Social media</span>
                      <br />
                      
                      <span className="bg-[#fff] px-2 py-1 mt-1 inline-block rounded-lg">Marketing</span>
                    </h3>
                    <a href="#" className="flex items-center mt-8 text-white font-semibold text-xl hover:underline">
                      <span className="mr-2 rounded-full bg-white p-2 flex items-center justify-center ">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="rotate-315">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      Learn more
                    </a>
                  </div>
                  <Image src="/sem.svg" alt="SEM" width={250} height={198} className="w-50 h-70" />
                </div>
                <div className="rounded-[45px] border border-black border-b-6 p-8 bg-[#fff] shadow-md flex flex-row justify-between items-center min-h-[385px]">
                  <div className="flex flex-col justify-between h-full">
                    <h3 className="text-4xl font-extrabold text-black mb-4">
                      <span className="bg-[#D4FF5B] px-2 py-1 rounded-lg">Email</span>
                      <br />
                      <span className="bg-[#D4FF5B] px-2 py-1 mt-1 inline-block rounded-lg">Marketing</span>
                    </h3>
                    <a href="#" className="flex items-center mt-8 text-black font-semibold text-xl hover:underline">
                      <span className="mr-2 rounded-full bg-black p-2 flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="rotate-315">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="#D4FF5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      Learn more
                    </a>
                  </div>
                  <Image src="/em.svg" alt="EM" width={96} height={96} className="w-50 h-70" />
                </div>
              </div>
              {/* third row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
                <div className="rounded-[45px] border border-black border-b-6 p-8 bg-[#D4FF5B] shadow-md flex flex-row justify-between items-center min-h-[385px]">
                  <div className="flex flex-col justify-between h-full">
                    <h3 className="text-4xl font-extrabold text-black mb-4">
                      <span className="bg-[#fff] px-2 py-1 rounded-lg ">Content</span>
                      <br />
                      
                      <span className="bg-[#fff] px-2 py-1 mt-1 inline-block rounded-lg">Creation</span>
                    </h3>
                    <a href="#" className="flex items-center mt-8 text-black font-semibold text-xl hover:underline">
                      <span className="mr-2 rounded-full bg-black p-2 flex items-center justify-center ">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="rotate-315">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="#D4FF5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      Learn more
                    </a>
                  </div>
                  <Image src="/cc.svg" alt="CC" width={250} height={198} className="w-50 h-70" />
                </div>
                <div className="rounded-[45px] border border-black border-b-6 p-8 bg-[#000] shadow-md flex flex-row justify-between items-center min-h-[385px]">
                  <div className="flex flex-col justify-between h-full">
                    <h3 className="text-4xl font-extrabold text-black mb-4">
                      <span className="bg-[#D4FF5B] px-2 py-1 rounded-sm">Analytics and </span>
                      <br />
                      <span className="bg-[#D4FF5B] px-2 py-1 mt-1 inline-block rounded-sm">Tracking</span>
                    </h3>
                    <a href="#" className="flex items-center mt-8 text-white font-semibold text-xl hover:underline">
                      <span className="mr-2 rounded-full bg-white p-2 flex items-center justify-center">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="rotate-315">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      Learn more
                    </a>
                  </div>
                  <Image src="/aat.svg" alt="AAT" width={96} height={96} className="w-50 h-70" />
                </div>
              </div>
            </div>
          </section>
          {/* Features Section */}
          <section className="w-full max-w-3xl mx-auto mt-40 ">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-[#D4FF5B] px-12 py-4 rounded border border-black text-2xl font-extrabold mb-4 text-center text-black">
                FEATURES
              </div>
              <div className="text-center text-xs mb-8 text-black">
                Step-by-Step Guide to Achieving<br />Your Business Goals
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {/* Card 1: Hover to expand */}
              <div className="group bg-white border border-black rounded-2xl border-b-4 shadow-md transition-all transition-colors duration-500 hover:bg-[#D4FF5B]">
                <div className="flex items-center justify-between px-6 py-4 cursor-pointer">
                  <span className="text-2xl font-extrabold text-black">01</span>
                  <span className="ml-4 font-semibold text-lg text-black">Consultation</span>
                  <span className="ml-auto text-2xl font-bold text-black">+</span>
                </div>
                <div className="px-6 pb-4 text-xs font-medium text-black max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                </div>
              </div>
              {/* Card 2: Hover to expand */}
              <div className="group bg-white border border-black rounded-2xl border-b-4 shadow-md transition-all transition-colors duration-500 hover:bg-[#D4FF5B]">
                <div className="flex items-center justify-between px-6 py-4 cursor-pointer">
                  <span className="text-2xl font-extrabold text-black">02</span>
                  <span className="ml-4 font-semibold text-lg text-black">Research and Strategy Development</span>
                  <span className="ml-auto text-2xl font-bold text-black">+</span>
                </div>
                <div className="px-6 pb-4 text-xs font-medium text-black max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  Research and strategy details go here. Our team will analyze your industry, competitors, and target market to develop a tailored strategy that maximizes your business potential. We use data-driven insights to ensure your marketing plan is both effective and efficient.
                </div>
              </div>
              {/* Card 3: Hover to expand */}
              <div className="group bg-white border border-black rounded-2xl border-b-4 shadow-md transition-all transition-colors duration-500 hover:bg-[#D4FF5B]">
                <div className="flex items-center justify-between px-6 py-4 cursor-pointer">
                  <span className="text-2xl font-extrabold text-black">03</span>
                  <span className="ml-4 font-semibold text-lg text-black">Implementation</span>
                  <span className="ml-auto text-2xl font-bold text-black">+</span>
                </div>
                <div className="px-6 pb-4 text-xs font-medium text-black max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  Implementation details go here. We execute the agreed-upon strategy, setting up campaigns, optimizing your website, and integrating the latest tools and technologies to drive measurable results for your business.
                </div>
              </div>
              {/* Card 4: Hover to expand */}
              <div className="group bg-white border border-black rounded-2xl border-b-4 shadow-md transition-all transition-colors duration-500 hover:bg-[#D4FF5B]">
                <div className="flex items-center justify-between px-6 py-4 cursor-pointer">
                  <span className="text-2xl font-extrabold text-black">04</span>
                  <span className="ml-4 font-semibold text-lg text-black">Monitoring and Optimization</span>
                  <span className="ml-auto text-2xl font-bold text-black">+</span>
                </div>
                <div className="px-6 pb-4 text-xs font-medium text-black max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  Monitoring and optimization details go here. We continuously track performance metrics, making adjustments as needed to improve outcomes and ensure your marketing efforts are always aligned with your goals.
                </div>
              </div>
              {/* Card 5: Hover to expand */}
              <div className="group bg-white border border-black rounded-2xl border-b-4 shadow-md transition-all transition-colors duration-500 hover:bg-[#D4FF5B]">
                <div className="flex items-center justify-between px-6 py-4 cursor-pointer">
                  <span className="text-2xl font-extrabold text-black">05</span>
                  <span className="ml-4 font-semibold text-lg text-black">Reporting and Communication</span>
                  <span className="ml-auto text-2xl font-bold text-black">+</span>
                </div>
                <div className="px-6 pb-4 text-xs font-medium text-black max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  Reporting and communication details go here. You&apos;ll receive regular updates and detailed reports, keeping you informed about progress and results. We maintain open communication to address any questions or concerns.
                </div>
              </div>
              {/* Card 6: Hover to expand */}
              <div className="group bg-white border border-black rounded-2xl border-b-4 shadow-md transition-all transition-colors duration-500 hover:bg-[#D4FF5B]">
                <div className="flex items-center justify-between px-6 py-4 cursor-pointer">
                  <span className="text-2xl font-extrabold text-black">06</span>
                  <span className="ml-4 font-semibold text-lg text-black">Continual Improvement</span>
                  <span className="ml-auto text-2xl font-bold text-black">+</span>
                </div>
                <div className="px-6 pb-4 text-xs font-medium text-black max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  Continual improvement details go here. We believe in ongoing growth, so we regularly review and refine your strategy to adapt to changing market conditions and new opportunities, ensuring long-term success.
                </div>
              </div>
            </div>
          </section>
           <section className="w-full max-w-5xl mx-auto mt-32 flex flex-col items-center">
            {/* FAQ Title */}
            <div className="relative mb-4">
              <div className="absolute left-2 top-2 w-full h-full bg-[#D4FF5B] rounded"></div>
              <div className="relative bg-white border border-black rounded px-12 py-4 text-3xl text-black font-extrabold text-center z-10">
                FAQs
              </div>
            </div>
            {/* FAQ Subtitle */}
            <div className="text-center text-xs mb-10 text-black">
              We care what you ask,<br />
              We answer what you want to ask.
            </div>
            {/* FAQ Cards */}
            <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
              {/* Card 1 */}
              <div className="flex-1 min-w-[220px] max-w-xs bg-[#D4FF5B] border border-black rounded-2xl p-8 flex flex-col items-center shadow-md">
                <span className="font-bold text-lg mb-2 text-black">What services do you offer?</span>
                <span className="text-sm text-black text-center">We offer SEO, PPC, Social Media Marketing, Email Marketing, Content Creation, and Analytics.</span>
              </div>
              {/* Card 2 */}
              <div className="flex-1 min-w-[220px] max-w-xs bg-[#D4FF5B] border border-black rounded-2xl p-8 flex flex-col items-center shadow-md">
                <span className="font-bold text-lg mb-2 text-black">How do I get started?</span>
                <span className="text-sm text-black text-center">Contact us through our website or sign up to schedule your first consultation.</span>
              </div>
              {/* Card 3 */}
              <div className="flex-1 min-w-[220px] max-w-xs bg-[#D4FF5B] border border-black rounded-2xl p-8 flex flex-col items-center shadow-md">
                <span className="font-bold text-lg mb-2 text-black">Can I customize my plan?</span>
                <span className="text-sm text-black text-center">Absolutely! We tailor our services to fit your business needs and goals.</span>
              </div>
            </div>
          </section>
          <div className="mt-24 w-full px-2 flex justify-center">
            <div className="flex flex-col md:flex-row item-center justify-between bg-white rounded-2xl shadow-2xl px-8 py-8 md:py-12 md:px-12 w-full max-w-4xl relative z-10">
              {/* Email */}
              <div className="flex items-center gap-4 flex-1">
                <span className="bg-[#D4FF5B] rounded-full p-4 flex item-center justify-center">
                  {/* Email icon */}
                  <Image src="/mail-fill.svg" alt="Mail" width={28} height={28} />
                </span>
                <span className="text-sm font-medium text-black">ankitamohanty725@gmail.com</span>
              </div>
              {/* Divider */}
              <div className="md-block w-[3px] h-16 bg-[#6C6C72] mx-8"></div>
              {/* phone */}
              <div className="flex items-center gap-4 flex-1 mt-6 md:mt-0">
                <span className="bg-[#D4FF5B] rounded-full p-4 flex item-center justify-center">
                  {/* phone icon */}
                  <Image src="/phone-fill.svg" alt="Phone" width={28} height={28} />
                </span>
                <span className="text-sm font-medium text-black">+91 7735177591</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full bg-gradient-to-b from-white to-[#D4FF5B] pt-40 pb-8 mt-[-60px] relative z-0">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Logo/Description/Socials */}
              <div>
                <div className="font-extrabold text-2xl mb-2 text-black">LOGO</div>
                <p className="text-sm text-black mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                </p>
                <div className="flex gap-6 text-2xl">
                  {/* Replace with your own icons/links */}
                  <a href="#"><i className="fab fa-github"></i></a>
                  <a href="#"><i className="far fa-envelope"></i></a>
                  <a href="#"><i className="fab fa-x-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
              {/* Quick Links */}
              <div>
                <div className="font-extrabold text-lg mb-2 text-black">QUICK LINK</div>
                <ul className="space-y-2 text-black">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Screenshot</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
              {/* Newsletter */}
              <div>
                <div className="font-extrabold text-lg mb-2 text-black">NEWS LETTER</div>
                <p className="text-sm text-black mb-4">Subscribe our newsletter to get our latest update & news</p>
                <form className="flex">
                  <input type="email" placeholder="Your email address" className="flex-1 px-4 py-2 rounded-l border border-black focus:outline-none text-black"/>
                  <button type="submit" className="bg-black text-[#D4FF5B] px-4 py-2 rounded-r border border-black flex items-center">
                    {/* Arrow icon */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#D4FF5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </form>
              </div>
            </div>
            {/* Divider and copyright */}
            <div className="max-w-6xl mx-auto mt-12 border-t border-black pt-4 flex flex-col items-center justify-center text-sm text-black text-center">
              <span>&copy; Copyright 2025 All Right Reserved.</span>
            </div>

            {/* Ester egg*/}
            <div className="absolute bottom-4 right-4 z-10" ref={mascotRef}>
              <div className="relative flex flex-col items-end">
                <Image
                  src="/mascot.svg"
                  alt="Mascot"
                  width={17.82}
                  height={20}
                  className="cursor-pointer"
                  onClick={() => setMenuOpen((open) => !open)}
                />
                <div className={`absolute bottom-full mb-2 right-0 flex flex-col items-end transition-all duration-200 z-50 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-2 px-6 min-w-[160px]">
                    <a href="https://github.com/ankita-090" target="_blank" className="block px-4 py-2 text-black text-sm font-regular hover:bg-gray-100 rounded">ankita-090</a>
                    <div className="border-t my-1"></div>
                    <a href="https://github.com/HoaxBlade" target="_blank" className="block px-4 py-2 text-black text-sm font-regular hover:bg-gray-100 rounded">HoaxBlade</a>
                  </div>
                  {/* Dropup little box */}
                  <div className="w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45 -mb-2 mr-8"></div>
                </div>
              </div>
            </div>
          </footer>
        </main>    
      </div>
    </>
  );
}