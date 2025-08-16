"use client";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  // Password validation
  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return false;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return false;
    } else if (!/(?=.*\d)/.test(password)) {
      setPasswordError("Password must contain at least one number");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  // Handle email change with validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value) validateEmail(value);
  };

  // Handle password change with validation
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value) validatePassword(value);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate all fields before submission
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isNameValid = name.trim().length > 0;

    if (!isNameValid) {
      setError("Full name is required");
      return;
    }

    if (!isEmailValid || !isPasswordValid) {
      setError("Please fix the validation errors above");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Create the user account in Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) {
        setError(error.message);
      } else {
        console.log("✅ Sign up successful:", data.user?.email);
        
        // Step 2: The profiles table is automatically created by the database trigger
        // But we can also manually update it if needed
        if (data.user) {
          const { error: profileError } = await supabase
            .from('profiles')
            .update({ 
              full_name: name 
            })
            .eq('id', data.user.id);

          if (profileError) {
            console.log("Profile update error (this is normal):", profileError.message);
          } else {
            console.log("✅ Profile updated successfully");
          }
        }

        setSuccess("Account created successfully! Please check your email to verify your account.");
        
        // Auto-redirect after 3 seconds
        setTimeout(() => {
          router.push("/dashboard"); // Redirect to dashboard instead of signin
        }, 3000);
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Sign up error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#C6F7A5]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-black border-b-4">
        <h2 className="text-2xl font-semibold mb-6 text-black">Sign Up</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {success}
          </div>
        )}

        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border border-black rounded-lg placeholder-black focus:outline-none focus:ring-2 focus:ring-[#D4FF5B] text-black w-full"
              required
              disabled={loading}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => validateEmail(email)}
              className={`p-3 border rounded-lg placeholder-black focus:outline-none focus:ring-2 focus:ring-[#D4FF5B] text-black w-full ${
                emailError ? 'border-red-500' : 'border-black'
              }`}
              required
              disabled={loading}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={() => validatePassword(password)}
              className={`p-3 border rounded-lg placeholder-black focus:outline-none focus:ring-2 focus:ring-[#D4FF5B] text-black w-full ${
                passwordError ? 'border-red-500' : 'border-black'
              }`}
              required
              disabled={loading}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
            <div className="mt-2 text-xs text-gray-600">
              <p>Password must contain:</p>
              <ul className="list-disc list-inside ml-2">
                <li>At least 8 characters</li>
                <li>One lowercase letter</li>
                <li>One uppercase letter</li>
                <li>One number</li>
              </ul>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-[#D4FF5B] text-black font-semibold py-2 rounded-lg border border-black border-b-4 shadow-md hover:bg-[#C6F7A5] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-black">
            Already have an account?{' '}
            <Link href="/signin" className="text-[#3B82F6] hover:underline font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 