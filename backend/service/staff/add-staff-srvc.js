import { addStaffRepository as repository } from "../../repository/staff/add-staff-repo.js";

export const addStaffService = async (data, res) => {
  try {
    data = { ...data, active: 1 };
    return await repository(data, res);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
