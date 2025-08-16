"use client";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface User {
  id: string;
  full_name: string;
  email: string;
}

interface Lab {
  id: string;
  title: string;
  description: string;
  difficulty_level: string;
  estimated_duration: number;
  category: string;
}

export default function Labs() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [labs, setLabs] = useState<Lab[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const checkUser = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/signin');
        return;
      }

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
    fetchLabs();
  }, [checkUser]);

  const fetchLabs = async () => {
    try {
      // This would fetch from your labs table
      // For now, using mock data
      setLabs([
        {
          id: '1',
          title: 'Introduction to Python',
          description: 'Learn basic Python syntax and concepts',
          difficulty_level: 'beginner',
          estimated_duration: 30,
          category: 'Programming'
        },
        {
          id: '2',
          title: 'Data Structures Basics',
          description: 'Understanding arrays, linked lists, and stacks',
          difficulty_level: 'intermediate',
          estimated_duration: 45,
          category: 'Data Structures'
        },
        {
          id: '3',
          title: 'Algorithm Analysis',
          description: 'Big O notation and algorithm efficiency',
          difficulty_level: 'advanced',
          estimated_duration: 60,
          category: 'Algorithms'
        }
      ]);
    } catch (error) {
      console.error('Error fetching labs:', error);
    }
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#C6F7A5] to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-black text-lg">Loading labs...</p>
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
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4 text-center sm:text-left">Available Labs</h1>
          <p className="text-gray-600 text-base sm:text-lg text-center sm:text-left">
            Choose from our collection of computer science labs and start learning!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {labs.map((lab) => (
            <div key={lab.id} className="bg-white rounded-2xl shadow-lg border border-black border-b-4 p-4 sm:p-6 hover:shadow-xl transition-shadow">
              <div className="mb-3 sm:mb-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(lab.difficulty_level)}`}>
                    {lab.difficulty_level.charAt(0).toUpperCase() + lab.difficulty_level.slice(1)}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">{lab.category}</span>
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{lab.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{lab.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs sm:text-sm text-gray-500">
                  ⏱️ {lab.estimated_duration} min
                </span>
              </div>
              
              <button className="w-full bg-[#D4FF5B] text-black font-semibold py-2 sm:py-3 rounded-lg border border-black border-b-4 shadow-md hover:bg-[#C6F7A5] transition-all duration-300 text-sm sm:text-base">
                Start Lab
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
