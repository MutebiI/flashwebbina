import { createClient } from "@supabase/supabase-js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });




// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_KEY,
//   { auth: { persistSession: false } }
// );

// export const POST = async (req, res) => {
//   try {
//     const baby = await req.json();
//       const { fileName } = baby;
//       const { error } = await supabase.storage
//         .from("collection")
//         .remove([fileName]);
//       // console.log(fileName)

//       if (error) {
//         console.log(error);
//       }


//     return new Response(JSON.stringify(error), {
//       status: 201,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const config = {
//   api: {
//     bodyParser: false, // Disable built-in bodyParser to parse FormData
//   },
// };

export const POST = async (req, res) => {
  
  try {
    
     
    await upload.single('file')(req, res, (err) => {
      if (err) {
        console.log(err);
       
      }
      // const { file, fileName } = baby;
      console.log("number---1")
      console.log(req.files)
      console.log("number---2")
    })
    // const { error } = await supabase.storage
    //   .from("collection")
    //   .remove([fileName]);
    // console.log(file)
    // console.log(fileName)

    // if (error) {
    //   console.log(error);
    // }
    // return res.json("success")

    return new Response(JSON.stringify("success"), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }
};


