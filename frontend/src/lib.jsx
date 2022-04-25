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
    return { PredictionDate: formatDateUTC(date), Disease: disease };
  } else if (allDate.test(input)) {
    date = parsingDate(temp);
    return { PredictionDate: formatDateUTC(date) };
  } else if (penyakit.test(input)) {
    return { Disease: input };
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

const formatDate = (date) => {
  let formattedDate = new Date(date);
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return `${formattedDate.getDate()} ${
    months[formattedDate.getMonth()]
  } ${formattedDate.getFullYear()}`;
};

const formatDateUTC = (date) => {
  let formattedDate = new Date(date);
  return `${formattedDate.getUTCFullYear()}-${
    formattedDate.getUTCMonth() + 1
  }-${formattedDate.getUTCDate()}`;
};

const formatSimilarty = (nums) => {
  // nums = nums.parseInt(nums);
  return `${100 * parseFloat(nums)}%`;
};

const geneticDisorderMatching = (input) => {
  const penyakit = new RegExp(/^([A-Za-z]+[-]?)+[0-9]{0,2}$/, "i");
  return penyakit.test(input);
};

export {
  dnaMatching,
  inputMatching,
  parsingDate,
  formatDate,
  formatSimilarty,
  geneticDisorderMatching,
  formatDateUTC,
};
