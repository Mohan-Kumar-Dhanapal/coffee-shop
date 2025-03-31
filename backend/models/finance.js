import mongoose from "mongoose";

const FinanceSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
      required: true,
      unique: true,
    },
    boxCash: {
      type: Number,
      required: true,
      min: 0,
      default: 3000,
    },
    sales: {
      type: Number,
      required: true,
      min: 0,
    },
    expense: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

export const Finance = mongoose.model("finance", FinanceSchema);
