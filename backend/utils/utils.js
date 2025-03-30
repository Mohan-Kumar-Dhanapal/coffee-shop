const isNotEmptyString = (value) => {
  return value && value.trim() !== "";
};

const trimStrings = (input) => {
  try {
    if (typeof input !== "object" || input === null) return input;

    // Deep copy the object
    const trimmedObject = Array.isArray(input) ? [] : {};

    for (let key in input) {
      if (typeof input[key] === "string") {
        trimmedObject[key] = input[key].trim();
      } else if (typeof input[key] === "object") {
        // Recursively trim nested objects or arrays
        trimmedObject[key] = trimStrings(input[key]);
      } else {
        trimmedObject[key] = input[key];
      }
    }

    return trimmedObject;
  } catch (error) {
    console.error("Error in trimStrings Fn", error);
    return input;
  }
};

export { isNotEmptyString, trimStrings };
