"use client"
import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-[#F9F9F9] rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-black">Sign Up</h1>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="px-4 py-2 rounded border border-gray-300 focus:outline-none placeholder-black" />
          <input type="email" placeholder="Email" className="px-4 py-2 rounded border border-gray-300 focus:outline-none placeholder-black" />
          <input type="password" placeholder="Password" className="px-4 py-2 rounded border border-gray-300 focus:outline-none placeholder-black" />
          <button type="submit" className="bg-black text-[#D4FF5B] font-bold py-2 rounded mt-2">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account?{' '}
          <Link href="/signin" className="text-black font-semibold underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
} 