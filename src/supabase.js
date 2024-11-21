import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aqxqkoovvwltfllciaft.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxeHFrb292dndsdGZsbGNpYWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyMTM3NjQsImV4cCI6MjAyODc4OTc2NH0.TRuc9QmCLJjeR0sAJ9SjmuxL7RzPFA1jjuizQcUQ3Ys";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
