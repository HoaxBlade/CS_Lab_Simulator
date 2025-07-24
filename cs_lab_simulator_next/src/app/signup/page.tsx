"use client";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#C6F7A5]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-black border-b-4">
        <h2 className="text-2xl font-semibold mb-6 text-black">Sign Up</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-black rounded-lg placeholder-black focus:outline-none focus:ring-2 focus:ring-[#D4FF5B]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-black rounded-lg placeholder-black focus:outline-none focus:ring-2 focus:ring-[#D4FF5B]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-black rounded-lg placeholder-black focus:outline-none focus:ring-2 focus:ring-[#D4FF5B]"
            required
          />
          <button
            type="submit"
            className="mt-2 bg-[#D4FF5B] text-black font-semibold py-2 rounded-lg border border-black border-b-4 shadow-md hover:bg-[#C6F7A5] transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-black">
          Already have an account?{' '}
          <Link href="/signin" className="text-[#3B82F6] hover:underline font-semibold">Sign In</Link>
        </p>
      </div>
    </div>
  );
} 