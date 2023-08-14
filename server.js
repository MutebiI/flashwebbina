// server.js
require("dotenv").config();
const express = require("express");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const cors = require("cors"); // Import the cors package
const { createClient } = require("@supabase/supabase-js");
const app = express();
// const path = require("path");
// const fs = require("fs");

// Use the cors middleware to allow all origins
app.use(cors());
app.use(express.json());
// const uploadDir = path.join(__dirname, "uploaded_files");
// app.use("/uploaded", express.static(uploadDir));
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY,
  { auth: { persistSession: false } }
);

app.patch("/api/handleimageedit", upload.single("file"), async (req, res) => {
  try {
    const { file } = req; // Access the uploaded file data
    const newFileName = req.body.newFileName;

    if (!file) {
      return res.status(400).json({ error: "No file data provided." });
    }

    const { data, error } = await supabase.storage
      .from("collection") // Replace with your collection name
      .upload(newFileName, file.buffer);

    if (error) {
      console.error("Error uploading file:", error.message);
      return res.status(500).json({ error: "File upload to Supabase failed." });
    }

    const imageUrl = supabase.storage
      .from("collection")
      .getPublicUrl(`${data.path}`).data.publicUrl;

    res.json({ message: "File uploaded successfully.", imageUrl });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

// app.patch("/api/handleimageedit", upload.single("file"), async (req, res) => {

//   try {
//     const { file } = req; // Access the uploaded file data
//     const newFileName = req.body.newFileName;

//     if (!file) {
//       return res.status(400).json({ error: "No file data provided." });
//     }

//     // Save the file to the upload directory
//     const filePath = path.join(uploadDir, newFileName);
//     fs.writeFileSync(filePath, file.buffer);

//     // Construct the public URL to serve the file
//     const publicUrl = `/uploaded/${newFileName}`;
//       const { data, error } = await supabase.storage
//         .from("collection") // Replace with your collection name
//         .upload(newFileName, fs.createReadStream(filePath));

//     if (error) {
//       console.error("Error uploading file:", error.message);
//       return res
//         .status(500)
//         .json({ error: "File upload to Supabase failed." });
//     }

//           const url = supabase.storage
//             .from("collection")
//             .getPublicUrl(`${data.path}`);
//           console.log(url.data.publicUrl);

//     res.json({ message: "File uploaded successfully.", imageUrl: publicUrl });
//   } catch (error) {
//     console.error("Error:", error);
//     return res
//       .status(500)
//       .json({ error: "An error occurred while processing the request." });
//   }

//   // const form = new formidable.IncomingForm();

//   // form.parse(req, async (err, fields, files) => {
//   //   if (err) {
//   //     return res.status(400).json({ error: "File upload failed." });
//   //   }

//   //   const file = files.file; // Use "file" as the field name
//   //   const newFileName = fields.newFileName;

//     // try {
//     //   // const { data, error } = await supabase.storage
//       //   .from("collection") // Replace with your collection name
//       //   .upload(newFileName[0], file[0]);

//       // if (error) {
//       //   console.error("Error uploading file:", error.message);
//       //   return res
//       //     .status(500)
//       //     .json({ error: "File upload to Supabase failed." });
//       // }

//       //       const url = supabase.storage
//       //         .from("collection")
//       //         .getPublicUrl(`${data.path}`);
//       //       console.log(url.data.publicUrl);


//       // res.json({
//       //   message: "File uploaded to Supabase successfully.",
//       //   image: url.data.publicUrl,
//       // });
//     // } catch (error) {
//     //   console.error("Supabase upload error:", error);
//     //   return res
//     //     .status(500)
//     //     .json({ error: "An error occurred while uploading to Supabase." });
//     // }
//   });


// app.patch("/api/handleimageedit", (req, res) => {
//  const form = new formidable.IncomingForm();

//   form.parse(req, (err, fields, files) => {
//     if (err) {
//       return res.status(400).json({ error: "File upload failed." });
//     }

//     // Access files using files object
//     // e.g., files.file.path
//     // Handle file upload logic here
//      const file = files.file;
//     const newFileName = fields.newFileName;
//     console.log(newFileName)
//     console.log(file)

//     res.json({ message: "File uploaded successfully." });
//   });
// });

// Custom route for handling file uploads
// app.patch("/api/handleimageedit", upload.single("file"), async (req, res) => {
//   try {
//     console.log(req.body.newFileName);
    
//     if (req.file) {
//       const { data, error } = await supabase.storage
//         .from("collection")
//         .upload(req.body.newFileName, req.file);

//       if (error) {
//         console.error("Error uploading file:", error.message);
//         return;
//       }

//       console.log("File uploaded successfully:", data);
//       const url = supabase.storage
//         .from("collection")
//         .getPublicUrl(`${data.path}`);
//       console.log(url.data.publicUrl);

//       console.log("Uploaded File Data:");
//       console.log(req.file);

//       console.log("Uploaded File Data:");
//       console.log("Uploaded File Data:***********please");
//       return res.status(201).json({ url: url.data.publicUrl });
//     }

//     // Perform other actions with the uploaded file data here if needed
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "An error occurred" });
//   }
// });

const port = 3001;
app.listen(port, () => {
  console.log(`Custom Express server is running on http://localhost:${port}`);
});
