import { createClient } from '@supabase/supabase-js'

console.log('🔧 Supabase configuration file loaded')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('📋 Environment variables check:')
console.log('  - NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✅ Found' : '❌ Missing')
console.log('  - NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Found' : '❌ Missing')

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('🚨 Missing Supabase environment variables!')
  console.error('   Please check your .env.local file')
}

console.log('🚀 Creating Supabase client...')

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!)

console.log('✅ Supabase client created successfully!')
console.log('   URL:', supabaseUrl)
console.log('   Client ready for use')

// Test connection
supabase.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error('❌ Supabase connection test failed:', error.message)
  } else {
    console.log('🔗 Supabase connection test successful!')
    console.log('   Session data:', data.session ? 'Active session' : 'No active session')
  }
})