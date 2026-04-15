import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://evjyeahlahfknnjvvdcm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2anllYWhsYWhma25uanZ2ZGNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NzM2MTksImV4cCI6MjA4OTM0OTYxOX0.QLdTRFGsyhv1w8_xu3hBEA07Xy5_ExoB0te54w3OpLc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
