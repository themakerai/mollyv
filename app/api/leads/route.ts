import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://cgcdiiksjmubatinthdr.supabase.co'
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, first_name, lead_source } = body

    // Validate required fields
    if (!email || !first_name) {
      return NextResponse.json(
        { error: 'Email and first name are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // If no Supabase key, just return success (for development)
    if (!supabaseServiceKey) {
      console.log('Lead captured (no Supabase key):', { email, first_name, lead_source })
      return NextResponse.json({ 
        success: true, 
        message: 'Lead captured successfully',
        data: { email, first_name, lead_source }
      })
    }

    // Create Supabase client with service role key for server-side operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Insert lead into database
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          email: email.toLowerCase().trim(),
          first_name: first_name.trim(),
          lead_source: lead_source || 'decision-clarity-guide',
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505') {
        return NextResponse.json({ 
          success: true, 
          message: 'Thanks! Check your email for the download link.',
          duplicate: true
        })
      }
      
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured successfully',
      data
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Get all leads (protected route - would need auth in production)
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  
  // Simple auth check - in production, use proper authentication
  if (authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!supabaseServiceKey) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 })
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data })
}
