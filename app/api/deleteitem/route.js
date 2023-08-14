import { createClient } from "@supabase/supabase-js";

export const DELETE = async (req, res) => {
  try {
    const { searchParams } = new URL(req.url);
    const param = searchParams.get("id");
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_KEY,
      { auth: { persistSession: false } }
    );

    const { error } = await supabase
      .from("companyservices")
      .delete()
      .eq("id", param);
    if (error) {
    //   return new Response(JSON.stringify(error), {
    //     status: 201,
    //   });
        console.log('error')
        console.log(error)
    }
  } catch (error) {
      console.log(error)
    // return new Response(JSON.stringify(error), {
    //   status: 201,
    // });
  }
};
