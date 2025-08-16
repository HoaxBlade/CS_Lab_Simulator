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

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
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
        setFullName(profile.full_name || '');
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
  }, [checkUser]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ full_name: fullName })
        .eq('id', user?.id);

      if (error) {
        setMessage("Error updating profile: " + error.message);
      } else {
        setMessage("Profile updated successfully!");
        if (user) {
          setUser({ ...user, full_name: fullName });
        }
      }
    } catch (err) {
      setMessage("An unexpected error occurred");
      console.error("Profile update error:", err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#C6F7A5] to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-black text-lg">Loading profile...</p>
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-black border-b-4 p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 text-center sm:text-left">Profile Settings</h1>

          {message && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.includes('Error') 
                ? 'bg-red-100 border border-red-400 text-red-700' 
                : 'bg-green-100 border border-green-400 text-green-700'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleUpdateProfile} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4FF5B] text-black text-sm sm:text-base"
                required
                disabled={saving}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={user.email}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 text-sm sm:text-base"
                disabled
              />
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Email cannot be changed. Contact support if needed.
              </p>
            </div>

            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                disabled={saving}
                className="w-full bg-[#D4FF5B] text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-black border-b-4 shadow-md hover:bg-[#C6F7A5] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
