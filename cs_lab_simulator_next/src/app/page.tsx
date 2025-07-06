"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  return (
    <>
      
      <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)] bg-white">
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
            <a href="/signup" className={`transition-colors ${pathname === '/signup' ? 'text-black font-bold' : 'text-gray-600 hover:text-black transform:text duration-300 font-bold'}`}>Sign Up</a>
            <a href="/signin" className={`transition-colors transition-shadow duration-300 font-semibold shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.25),0_4px_6px_-4px_rgba(0,0,0,0.25)]`} style={{ backgroundColor: '#D4FF5B', paddingLeft: '2.25rem', paddingRight: '2.25rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', borderRadius: '0.5rem', fontWeight: 'bold', color: pathname === '/signin' ? 'black' : '#222' }}>Sign In</a>
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
          <section className="w-full max-w-2xl mx-auto mt-40">
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
              <div className="group bg-white border border-black rounded-2xl shadow-md transition-all transition-colors duration-500 hover:bg-[#D4FF5B]">
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
              <div className="group bg-white border border-black rounded-2xl shadow-md transition-all transition-colors duration-500 hover:bg-[#D4FF5B]">
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
              <div className="group bg-white border border-black rounded-2xl shadow-md transition-all transition-colors duration-500 hover:bg-[#D4FF5B]">
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
              <div className="group bg-white border border-black rounded-2xl shadow-md transition-all transition-colors duration-500 hover:bg-[#D4FF5B]">
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
              <div className="group bg-white border border-black rounded-2xl shadow-md transition-all transition-colors duration-500 hover:bg-[#D4FF5B]">
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
              <div className="group bg-white border border-black rounded-2xl shadow-md transition-all transition-colors duration-500 hover:bg-[#D4FF5B]">
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
          <section className="mt-20 w-full px-4">
            <div className=""></div>
          </section>
      </main>    
    </div>
    </>
  );
}
