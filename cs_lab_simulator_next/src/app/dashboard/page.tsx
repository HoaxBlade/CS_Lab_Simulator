"use client";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface User {
  id: string;
  full_name: string;
  email: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [labProgress, setLabProgress] = useState({
    completed: 0,
    inProgress: 0,
    notStarted: 0
  });
  const router = useRouter();
  const pathname = usePathname();

  const checkUser = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/signin');
        return;
      }

      // Fetch user profile from profiles table
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profile) {
        setUser({
          id: user.id,
          full_name: profile.full_name || 'User',
          email: user.email || ''
        });
      }
    } catch (error) {
      console.error('Error checking user:', error);
      router.push('/signin');
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    checkUser();
    fetchLabProgress();
  }, [checkUser]);

  const fetchLabProgress = async () => {
    try {
      // This would fetch from your lab_sessions table
      // For now, using mock data
      setLabProgress({
        completed: 3,
        inProgress: 2,
        notStarted: 8
      });
    } catch (error) {
      console.error('Error fetching lab progress:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#C6F7A5] to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-black text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#C6F7A5] to-white">
      {/* Header */}
      <nav className="w-full flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-8 row-start-1 gap-4 sm:gap-0 bg-[#C6F7A5] mb-0">
        <Link href="/" className={`text-lg sm:text-xl font-extrabold transition-colors mb-2 sm:mb-0 text-center sm:text-left ${pathname === '/' ? 'text-black' : 'text-gray-700 hover:text-gray-700'}`}>CS Lab Simulator</Link>
        <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4 md:space-x-20 w-full sm:w-auto">
          <a href="/services" className={`transition-colors text-sm sm:text-base ${pathname === '/services' ? 'text-black font-bold' : 'text-gray-600 hover:text-black transform:text duration-300 font-semibold'}`}>Services</a>
          <a href="/features" className={`transition-colors text-sm sm:text-base ${pathname === '/features' ? 'text-black font-bold' : 'text-gray-600 hover:text-black transform:text duration-300 font-semibold'}`}>Features</a>
          <a href="/pricing" className={`transition-colors text-sm sm:text-base ${pathname === '/pricing' ? 'text-black font-bold' : 'text-gray-600 hover:text-black transform:text duration-300 font-semibold'}`}>Pricing</a>
          <a href="/faq" className={`transition-colors text-sm sm:text-base ${pathname === '/faq' ? 'text-black font-bold' : 'text-gray-600 hover:text-black transform:text duration-300 font-semibold'}`}>FAQ</a>
          <Link href="/dashboard/labs" className={`transition-colors text-sm sm:text-base ${pathname === '/dashboard/labs' ? 'text-black font-bold' : 'text-gray-600 hover:text-black transform:text duration-300 font-semibold'}`}>Simulation</Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 sm:space-x-6 mt-2 sm:mt-0">
          {!loading && (
            <>
              {user ? (
                <Link href="/dashboard" className="bg-[#D4FF5B] text-black font-semibold px-4 sm:px-6 py-2 rounded-lg border border-black border-b-4 shadow-md hover:bg-[#C6F7A5] transition-all duration-300 w-full sm:w-auto text-center text-sm sm:text-base">
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/signup" className={`transition-colors text-sm sm:text-base text-center ${pathname === '/signup' ? 'text-black font-bold' : 'text-gray-600 hover:text-black font-bold'}`}>Sign Up</Link>
                  <Link href="/signin" className={`transition-colors transition-shadow duration-300 font-semibold shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.25),0_4px_6px_-4px_rgba(0,0,0,0.25)] w-full sm:w-auto text-center`} style={{ backgroundColor: '#D4FF5B', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', borderRadius: '0.5rem', fontWeight: 'bold', color: pathname === '/signin' ? 'black' : '#222' }}>Sign In</Link>
                </>
              )}
            </>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-black border-b-4 p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4 text-center sm:text-left">
                Welcome back, {user.full_name}! 👋
              </h2>
              <p className="text-gray-600 text-base sm:text-lg text-center sm:text-left">
                Ready to continue your CS learning journey? Pick up where you left off or start something new.
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm sm:text-base w-full sm:w-auto mt-4 sm:mt-0"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-black border-b-4 p-4 sm:p-6">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-green-100 rounded-full">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600">Completed Labs</p>
                <p className="text-xl sm:text-2xl font-bold text-black">{labProgress.completed}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-black border-b-4 p-4 sm:p-6">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-full">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-xl sm:text-2xl font-bold text-black">{labProgress.inProgress}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-black border-b-4 p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-gray-100 rounded-full">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.523 18.246 19 16.5 19c-1.746 0-3.332-.477-4.5-1.253" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600">Available Labs</p>
                <p className="text-xl sm:text-2xl font-bold text-black">{labProgress.notStarted}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl shadow-lg border border-black border-b-4 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Continue Learning</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Pick up where you left off and continue your current lab session.
            </p>
            <button className="bg-[#D4FF5B] text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-black border-b-4 shadow-md hover:bg-[#C6F7A5] transition-all duration-300 w-full text-sm sm:text-base">
              Continue Lab
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-black border-b-4 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Start New Lab</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Explore new topics and challenges with our curated lab collection.
            </p>
            <button className="bg-[#D4FF5B] text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-black border-b-4 shadow-md hover:bg-[#C6F7A5] transition-all duration-300 w-full text-sm sm:text-base">
              Browse Labs
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Link href="/dashboard/profile" className="text-[#3B82F6] hover:underline font-semibold text-sm sm:text-base">
              Profile Settings
            </Link>
            <span className="hidden sm:inline text-gray-400">•</span>
            <Link href="/dashboard/labs" className="text-[#3B82F6] hover:underline font-semibold text-sm sm:text-base">
              All Labs
            </Link>
            <span className="hidden sm:inline text-gray-400">•</span>
            <Link href="/dashboard/settings" className="text-[#3B82F6] hover:underline font-semibold text-sm sm:text-base">
              Account Settings
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
