import Staff from "../../models/Staffs.js";

export const addStaffRepository = async (data, res) => {
  try {
    const product = new Staff(data);

    await product
      .save()
      .then(() => {
        return res.status(200).send({ message: "Staff added successfully" });
      })
      .catch((err) => {
        return res.status(500).send({ message: "Error in DB insertion" });
      });
  } catch (err) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
