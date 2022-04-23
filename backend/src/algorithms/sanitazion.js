const dnaMatching = (input) => {
  const sanitizedInput = new RegExp(/([^ACGT]+|[a-z]+|\s+)/, "g");
  return !sanitizedInput.test(input);
};

console.log(dnaMatching("ACGTAAAAAAAAACACACACACACACGT"));

const dateMatching = (input) => {
  // all date ?
  const allDate = new RegExp(
    /([12][0-9]|3[01]|0?[1-9])([-\\/\s])(1[0-2]|0?[1-9]|(januari|februari|maret|april|mei|juni|july|agustus|september|oktober|november|desember))\2(\d{4})/,
    "gi"
  );

  const day = new RegExp(/[12][0-9]|3[0-1]|0?[0-9]/, "g");
  const month = new Reg();
};

export { inputSanitation };
