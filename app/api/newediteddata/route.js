import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY,
  { auth: { persistSession: false } }
);

export const PATCH = async (req, res) => {
  try {
    const { searchParams } = new URL(req.url);
    const param = searchParams.get("id");
    const body = await req.json();

    const { error } = await supabase
      .from("companyservices")
      .update(body)
      .eq("id", param);
    if (error) {
      console.log("changes not made");
    }
    return new Response(JSON.stringify(error), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }
};
