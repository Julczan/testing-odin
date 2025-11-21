function capitalize(string) {
  if (typeof string !== "string") {
    return "Input is not a string";
  }
  return string.at(0).toUpperCase() + string.slice(1);
}

export default capitalize;
