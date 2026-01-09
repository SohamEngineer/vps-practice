import express from "express";
import cors from "cors";

const app = express();

/* ---------- Middlewares ---------- */
app.use(cors(
    {
        origin:[
            "http://localhost:5173",
            "http://localhost:5174",
        ],
        methods:["GET","POST","PUT" ,"DELETE"],
        credentials:true
    }
)); 
app.use(express.json());

/* ---------- Routes ---------- */
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "Server is running",
  });
});

/* ---------- Server ---------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
