require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const planRoutes = require("./routes/admin/planRoutes")




mongoose
  .connect(
    process.env.MONGODB_URI 
  )
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));

  
const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
const ML_API = process.env.ML_API || "http://127.0.0.1:8501";



app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);





app.listen(PORT, () => {
  console.log("server is running at port 5000");
});