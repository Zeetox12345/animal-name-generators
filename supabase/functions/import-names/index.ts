
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface AnimalNames {
  animal: string;
  names: {
    male: string[];
    female: string[];
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { animal, names }: AnimalNames = await req.json()

    console.log(`Importing names for animal: ${animal}`)
    console.log(`Male names count: ${names.male.length}`)
    console.log(`Female names count: ${names.female.length}`)

    // First, ensure the animal category exists
    const { data: categoryData, error: categoryError } = await supabase
      .from('animal_categories')
      .insert({ name: animal.toLowerCase() })
      .select('id')
      .single()

    if (categoryError && categoryError.code !== '23505') { // Ignore unique violation
      throw categoryError
    }

    // Get the category ID (whether it was just inserted or already existed)
    const { data: existingCategory } = await supabase
      .from('animal_categories')
      .select('id')
      .eq('name', animal.toLowerCase())
      .single()

    if (!existingCategory) {
      throw new Error('Failed to get or create animal category')
    }

    const categoryId = existingCategory.id

    // Prepare all names for insertion
    const namesToInsert = [
      ...names.male.map(name => ({
        name,
        gender: 'male',
        animal_category_id: categoryId
      })),
      ...names.female.map(name => ({
        name,
        gender: 'female',
        animal_category_id: categoryId
      }))
    ]

    // Insert all names
    const { error: namesError } = await supabase
      .from('animal_names')
      .insert(namesToInsert)

    if (namesError) {
      throw namesError
    }

    return new Response(
      JSON.stringify({ 
        message: 'Names imported successfully',
        counts: {
          male: names.male.length,
          female: names.female.length
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error importing names:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
