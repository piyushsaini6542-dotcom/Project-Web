// backend/server.js
// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Frontend URL
  methods: ["GET", "POST"],
}));

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// ✅ Define Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  requirement: { type: String, required: true },
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

// ✅ Routes
app.get("/", (req, res) => {
  res.send("🌐 Server is running successfully...");
});

app.post("/api/contact", async (req, res) => {
  try {
    console.log("📩 Incoming contact data:", req.body); // Debug log

    const { name, phone, requirement } = req.body;

    // Basic validation
    if (!name || !phone || !requirement) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, phone, requirement });
    await newContact.save();

    console.log("✅ Contact saved successfully");
    res.status(201).json({ message: "Contact saved successfully!" });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
