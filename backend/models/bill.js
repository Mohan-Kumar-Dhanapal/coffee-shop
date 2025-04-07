import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose);

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const billSchema = new mongoose.Schema(
  {
    billNo: { type: Number, unique: true },
    items: { type: [itemSchema], required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

billSchema.plugin(AutoIncrement, { inc_field: "billNo" });

const BillModel = mongoose.model("Orders", billSchema);

export default BillModel;
