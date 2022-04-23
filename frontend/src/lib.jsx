const dnaMatching = (input) => {
  const sanitizedInput = new RegExp(/([^ACGT]+|[a-z]+|\s+)/, "g");
  return !sanitizedInput.test(input);
};

const inputMatching = (input) => {
  // all date ?
  const allRegex = new RegExp(
    /^([12][0-9]|3[01]|0?[1-9])([-/\s])(1[0-2]|(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)|0?[1-9])(\2\d{4})(\s([A-Za-z]+[-]?)+[0-9]{0,2})$/,
    "i"
  );
  const allDate = new RegExp(
    /^([12][0-9]|3[01]|0?[1-9])([-/\s])(1[0-2]|(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)|0?[1-9])\2\d{4}$/,
    "i"
  );
  const penyakit = new RegExp(/^([A-Za-z]+[-]?)+[0-9]{0,2}$/, "i");
  let temp = input.split(" ");
  let date, disease;
  if (allRegex.test(input)) {
    if (temp.length === 2) {
      date = parsingDate([temp[0]]);
      disease = temp[1];
    } else {
      date = parsingDate(temp.slice(0, 3));
      disease = temp[3];
    }
    return { date: date, disease: disease };
  } else if (allDate.test(input)) {
    date = parsingDate(temp);
    return { date: date };
  } else if (penyakit.test(input)) {
    return { input: input };
  } else {
    return "-1";
  }
};

const parsingDate = (dateInput) => {
  const MONTH = {
    januari: 1,
    februari: 2,
    maret: 3,
    april: 4,
    mei: 5,
    juni: 6,
    juli: 7,
    agustus: 8,
    september: 9,
    oktober: 10,
    november: 11,
    desember: 12,
  };
  //parsing lagi
  let tempArr = dateInput;
  let date;
  if (dateInput.length == 1) {
    if (tempArr[0].includes("-")) {
      tempArr = dateInput[0].split("-");
    } else {
      tempArr = dateInput[0].split("/");
    }
  }
  //klo udah 3 convert 2 nya
  let month = tempArr[1];
  if (isNaN(month)) {
    month = MONTH[month.toLowerCase()];
  }

  date = `${tempArr[2]}-${month}-${tempArr[0]}`;
  return date;
};


export { dnaMatching, inputMatching, parsingDate };
