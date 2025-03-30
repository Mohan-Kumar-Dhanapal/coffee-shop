import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    contact: {
      type: String,
      required: [true, "Contact is required"],
    },
    dob: {
      type: String,
      required: [true, "Date of Birth is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    salary: {
      type: String,
      required: [true, "Salary is required"],
    },
    active: {
      type: Number,
      required: [true, "Active status is required"],
    },
    advance: String,
  },
  { timestamps: true }
);

const Staff = mongoose.model("staff", staffSchema);

export default Staff;
