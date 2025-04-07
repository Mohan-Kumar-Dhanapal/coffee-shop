const updateProductSchema = {
  type: "object",
  properties: {
    _id: { type: "string" },
    name: {
      type: "string",
      minLength: 1,
    },
    price: {
      type: "string",
      pattern: "^\\d+(\\.\\d+)?$",
    },
    dealer: {
      type: "string",
      minLength: 1,
    },
    category: {
      type: "string",
      minLength: 1,
    },
  },
  required: ["_id", "name", "price"],
  additionalProperties: false,
};

export default updateProductSchema;
