import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rpratdqfqgkcghxzbqyc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwcmF0ZHFmcWdrY2doeHpicXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NTIyMTUsImV4cCI6MjA3MzUyODIxNX0.kusIrbXpZER9Akog0mIn0P4Sh6Q0FM7aYN6ZK2p8CCM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
