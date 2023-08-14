import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY,
  { auth: { persistSession: false } }
);

export const POST = async (req, res) => {
  try {
    const baby = await req.json();
      const { fileName } = baby;
      const { error } = await supabase.storage
        .from("collection")
        .remove([fileName]);
      // console.log(fileName)

      if (error) {
        console.log(error);
      }


    return new Response(JSON.stringify(error), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }
};
