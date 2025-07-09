"use client"
import Link from 'next/link';

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-[#D4FF5B] rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-black">Sign In</h1>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="px-4 py-2 rounded border border-black focus:outline-none placeholder-black" />
          <input type="password" placeholder="Password" className="px-4 py-2 rounded border border-black focus:outline-none placeholder-black" />
          <button type="submit" className="bg-black text-[#fff] font-bold py-2 rounded mt-2">Sign In</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-700">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-black font-semibold underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
} 