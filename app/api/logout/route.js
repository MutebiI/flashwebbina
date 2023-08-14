import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://pquqecfuohkgeipmcgkt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdXFlY2Z1b2hrZ2VpcG1jZ2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5NTA2MDIsImV4cCI6MjAwMTUyNjYwMn0.aJWq2-mK9HvwRoE9b07XN7GqaNb1f66ICQH0Wv7iT-c",
  { auth: { persistSession: false } }
);

export const POST = async (req, res) => {
  try {
    
    let { error } = await supabase.auth.signOut();
    

    return new Response(JSON.stringify(error), {
      status: 201,
    });
  } catch (error) {
      console.log("there was an error signing out")
  }
};
