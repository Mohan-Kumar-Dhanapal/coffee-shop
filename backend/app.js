import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./utils/database.js";

import shopRoutes from "./routes/shop-routes.js";
import adminRoutes from "./routes/admin-routes.js";

/**  End of Imports **/

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(shopRoutes);
app.use("/admin", adminRoutes);

connectDB(() => {
  const PORT = process.env.PORT || 5050;
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
