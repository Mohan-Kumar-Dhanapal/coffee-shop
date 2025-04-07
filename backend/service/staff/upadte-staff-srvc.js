import mongoose from "mongoose";
import { updateStaffRepository as repository } from "../../repository/staff/update-staff-repo.js";
import { INTERNAL_SERVER_ERROR } from "../../utils/constants.js";

export const updateStaffService = async (data, res) => {
  try {
    const { staffId, ...updatedStaffInfo } = data;

    if (!mongoose.Types.ObjectId.isValid(staffId)) {
      return res.status(422).json({ message: "Invalid staff id" });
    }

    return await repository(staffId, updatedStaffInfo, res);
  } catch (err) {
    res.send(INTERNAL_SERVER_ERROR);
  }
};
