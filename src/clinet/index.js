export const client = {
  get(endPoint) {
    if (endPoint === "todos") {
      return Promise.resolve(["study", "assignment"]);
    }
  },
};
