import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (loadServer) => {
  try {
    await mongoose.connect(process.env.DB_URL);
    loadServer();
  } catch (err) {
    console.error("MongoDB Connection Error ❌:", err.message);
    process.exit(1);
  }
};

// Mongoose connection event listeners
mongoose.connection.on("connected", () => console.log("🟢 Mongoose Connected"));

mongoose.connection.on("error", (err) =>
  console.log("🔴 Mongoose Error:", err)
);

mongoose.connection.on("disconnected", () =>
  console.log("🟡 Mongoose Disconnected")
);

// Graceful shutdown on app termination
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("⚠️ MongoDB Disconnected due to app termination");
  process.exit(0);
});

export default connectDB;
