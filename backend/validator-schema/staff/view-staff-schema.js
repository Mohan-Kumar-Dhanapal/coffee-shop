export const VIEW_STAFF_SCHEMA = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 1,
    },
    contact: {
      type: "string",
      pattern: "^\\d{10}$",
    },
    dob: {
      type: "string",
      minLength: 1,
    },
    address: {
      type: "string",
      minLength: 1,
    },
    salary: {
      type: "string",
      pattern: "^-?\\d+$",
    },
    advance: {
      type: "string",
      pattern: "^-?\\d+$",
    },
  },
  required: [],
  additionalProperties: false,
};
