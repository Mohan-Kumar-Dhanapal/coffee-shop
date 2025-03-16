const viewProductSchema = {
  type: "object",
  properties: {
    filterQuery: {
      type: "string",
      minLength: 1,
    },
    price: {
      type: "string",
      pattern: "^\\d+(\\.\\d+)?$",
    },
    category: {
      type: "string",
      minLength: 1,
    },
    dealer: {
      type: "string",
      minLength: 1,
    },
    sortField: {
      type: "string",
      enum: ["name", "price"],
    },
    sortOrder: {
      type: "string",
      enum: ["asc", "desc"],
    },
    page: {
      type: "string",
      pattern: "^\\d+(\\.\\d+)?$",
    },
  },
  required: [],
  additionalProperties: false,
};

export default viewProductSchema;
