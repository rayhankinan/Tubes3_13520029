const inputSanitation = (input) => {
  const sanitizedInput = new RegExp(/([^ACGT]+|[a-z]+|\s+)/, "g");
  return !sanitizedInput.test(input);
};

console.log(inputSanitation("ACGTAAAAAAAAACACACACACACACGT"));

export { inputSanitation };
