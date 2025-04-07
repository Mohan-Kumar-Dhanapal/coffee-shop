import mongoose from "mongoose";
import Staff from "../../models/Staffs.js";

import { INTERNAL_SERVER_ERROR } from "../../utils/constants.js";

export const deleteStaffRepository = async (staffId, res) => {
  try {
    const softDeleteResponse = await Staff.findOneAndUpdate(
      { _id: staffId }, // Condition
      { active: 0 } // Update
    );
    if (softDeleteResponse) {
      return res.status(200).json({ message: softDeleteResponse });
    } else {
      return res
        .status(400)
        .json({ message: "Staff not found please check the ID" });
    }
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
};
