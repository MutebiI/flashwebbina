import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY,
  { auth: { persistSession: false } }
);

export const GET = async (req, res) => {
  try {
    const { searchParams } = new URL(req.url);
    const param = searchParams.get("id");

    let { data: companyservices, error } = await supabase
      .from("companyservices")
      .select("*")
      .eq("id", param);

    if (error) {
      console.log(error);
    }
    return new Response(JSON.stringify(companyservices), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }

  //   try {
  //     let { data, error } = await supabase.from("companyservices").select("*");

  //     if (error) {
  //       console.log(error);
  //     }

  //     console.log(data);

  //     return new Response(JSON.stringify(data), {
  //       status: 201,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
};
