import { deleteStaffService as service } from "../../service/staff/delete-staff-srvc.js";

export const deleteStaffController = async (req, res) => {
  try {
    return await service(req, res);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
