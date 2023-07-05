import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://pquqecfuohkgeipmcgkt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdXFlY2Z1b2hrZ2VpcG1jZ2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5NTA2MDIsImV4cCI6MjAwMTUyNjYwMn0.aJWq2-mK9HvwRoE9b07XN7GqaNb1f66ICQH0Wv7iT-c"
);
//  const supabase = createClient(
//    process.env.SUPABASE_URL,
//    process.env.SUPABASE_KEY
//  );
//after return
export const POST = async (req, res) => {
  try {
    const baby = await req.json();
    console.log(baby);

    let { data, error } = await supabase.auth.signInWithPassword({
      email: baby.email,
      password: baby.password,
    });
    console.log(data);
    // console.log(process.env.NEXT_PUBLIC_SUPABASE_KEY);
    // if (!data.session) {
    //   //send false here
    //   return new Response(JSON.stringify({"Error":"Check your Email/Paasword"}), {
    //     status: 400,
    //   });
    // }

    if (error) {
      console.log("--------------1");
      console.log(error.message);
      console.log("----------------2");
    }

    return new Response(JSON.stringify(data), {
      status: 201,
    });
  } catch (error) {}
 
};
