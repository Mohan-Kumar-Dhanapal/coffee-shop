import mongoose from "mongoose";

import { deleteStaffRepository as repository } from "../../repository/staff/delete-staff-repo.js";
import { INTERNAL_SERVER_ERROR } from "../../utils/constants.js";

export const deleteStaffService = async (req, res) => {
  try {
    const { staffId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(staffId)) {
      return res.status(400).json({ message: "Invalid staff ID" });
    }

    return await repository(staffId, res);
  } catch (err) {
    res.send(INTERNAL_SERVER_ERROR);
  }
};
