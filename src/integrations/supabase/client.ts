// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gwxyplsztzcjtlukekuu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3eHlwbHN6dHpjanRsdWtla3V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNDk4NTQsImV4cCI6MjA1NTgyNTg1NH0.23dVaRYcm_OMhbFZaX6m-kyJSRO5aVVQivxSQu3kct0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);