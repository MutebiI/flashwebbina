import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export const POST = async (req, res) => {
  try {
    const baby = await req.json();
    console.log(baby);
    const { newFileName, file, formData, pimpina } = baby;
    console.log(file);
    console.log(newFileName); 
    const filem = new File([newFileName], newFileName);

    const { data, error } = await supabase.storage
      .from("collection")
      .upload(newFileName, file);

    if (error) {
      console.error("Error uploading file:", error.message);
      return;
    }

    console.log("File uploaded successfully:", data);
    const { data: urlData, error: urlError } = await supabase.storage
      .from("collection")
      .getPublicUrl(data.path);

    if (urlError) {
      console.error("Error getting public URL:", urlError.message);
      return;
    }

    const publicUrl = urlData.publicUrl;
    console.log(publicUrl);
    console.log(file);
    console.log(formData);
      console.log(pimpina);
      console.log(filem)
    // setImage(publicUrl);
    // console.log(image);

    return new Response(JSON.stringify(publicUrl), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }
};

// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_KEY
// );

// export const POST = async (req, res) => {
//   try {
//     const baby = await req.json();
//     const { newFileName, file } = baby;

//     const { data, error } = await supabase.storage
//       .from("collection")
//       .upload(newFileName, file);

//     if (error) {
//       console.error("Error uploading file:", error.message);
//       return;
//     }

//     console.log("File uploaded successfully:", data);
//     const url = supabase.storage
//       .from("collection")
//       .getPublicUrl(data.path);
//     console.log(url.data.publicUrl);
//     // setImage(url.data.publicUrl);
//     // console.log(image);

//     return new Response(JSON.stringify(url.data.publicUrl), {
//       status: 201,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
