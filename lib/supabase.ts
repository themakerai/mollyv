import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://cgcdiiksjmubatinthdr.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Lead type for the guide downloads
export interface Lead {
  id?: string
  email: string
  first_name: string
  lead_source: string
  created_at?: string
}
