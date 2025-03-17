const addProductSchema = {
  type: "object",
  properties: {
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
  required: ["name", "price"],
  additionalProperties: false,
};

export default addProductSchema;
