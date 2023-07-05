import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export const POST = async (req, res) => {
  try {
    const baby = await req.json();
    const { image, title, description, feature, amount } = baby;

    const { data: bender, error } = await supabase
      .from("companyservices")
      .insert({
        image,
        title,
        description,
        feature,
        amount,
      });

    if (error) {
      console.log(error);
    }
    console.log(baby);
    console.log(bender);

    console.log(amount);
    console.log(feature);

    return new Response(JSON.stringify("datamine"), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }
};

export const GET = async (req, res) => {
  try {
    let { data: companyservices, error } = await supabase
      .from("companyservices")
      .select("*");

    if (error) {
      console.log(error);
    }

    console.log(companyservices);

    return new Response(JSON.stringify(companyservices), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }
};

export const PATCH = async (req, res) => {
  try {
    const baby = await req.json();
    const { isModalOpen, image, title, description, feature, amount } = baby;

    const { error } = await supabase
      .from("companyservices")
      .update({ image, title, description, feature, amount })
      .eq("id", isModalOpen);
    return new Response(JSON.stringify(error), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }
};
