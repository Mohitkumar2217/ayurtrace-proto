import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
app.use(cors());
const upload = multer({ dest: "uploads/" });

// Mock AI + Token logic
app.post("/scan", upload.single("file"), (req, res) => {
  const score = Math.floor(Math.random() * 100); // random score
  const tokens = score > 60 ? 5 : 0;             // reward if good
  res.json({ score, tokens });
});

app.listen(3000, () => console.log("✅ Backend running on http://localhost:3000"));
