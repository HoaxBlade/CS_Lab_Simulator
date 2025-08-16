"use client";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try{
      const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if(error){
        setError(error.message);
      }
      else{
        console.log("✅ Sign in successful:", data.user?.email);
        router.push("/dashboard"); // Redirect to dashboard instead of home
      }
    }
    catch(err){
      setError("An unexpected error occurred");
      console.error("Sign in error:", err);
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#C6F7A5]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-black border-b-4">
        <h2 className="text-2xl font-semibold mb-6 text-black">Sign In</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-black rounded-lg placeholder-black focus:outline-none focus:ring-2 focus:ring-[#D4FF5B] text-black w-full"
              required
              disabled={loading}
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-black rounded-lg placeholder-black focus:outline-none focus:ring-2 focus:ring-[#D4FF5B] text-black w-full"
              required
              disabled={loading}
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-[#D4FF5B] text-black font-semibold py-2 rounded-lg border border-black border-b-4 shadow-md hover:bg-[#C6F7A5] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-black mb-2">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-[#3B82F6] hover:underline font-semibold">Sign Up</Link>
          </p>
          <p className="text-sm text-gray-600">
            <Link href="/forgot-password" className="text-[#3B82F6] hover:underline">
              Forgot your password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}