import Staff from "../../models/Staffs.js";
import { INTERNAL_SERVER_ERROR } from "../../utils/constants.js";

export const updateStaffRepository = async (staffId, updatedStaffInfo, res) => {
  try {
    const updateRespose = await Staff.findOneAndUpdate(
      { _id: staffId, active: 1 },
      { $set: updatedStaffInfo }
    );

    if (updateRespose) {
      return res.status(200).json({
        message: "Staff details updated successfully",
      });
    } else {
      return res
        .status(404)
        .json({ message: "Staff details not found. Please check Staff Id" });
    }
  } catch (err) {
    return res.send(INTERNAL_SERVER_ERROR);
  }
};
