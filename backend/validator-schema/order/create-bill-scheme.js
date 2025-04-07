export const createBillSchema = {
  type: "object",
  properties: {
    order: {
      type: "array",
      minItems: 1,
      items: {
        type: "object",
        properties: {
          name: { type: "string", minLength: 1 },
          quantity: { type: "number", minimum: 1 },
          price: { type: "number", minimum: 1 },
        },
        required: ["name", "quantity", "price"],
        additionalProperties: false,
      },
    },
  },
  required: ["order"],
  additionalProperties: false,
};
