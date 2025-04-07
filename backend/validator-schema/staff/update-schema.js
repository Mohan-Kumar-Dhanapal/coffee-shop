export const UPDATE_SCHEMA = {
  type: "object",
  properties: {
    staffId: {
      type: "string",
      minLength: 1,
    },
    name: {
      type: "string",
      minLength: 3,
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
  required: ["staffId"],
  additionalProperties: false,
};
