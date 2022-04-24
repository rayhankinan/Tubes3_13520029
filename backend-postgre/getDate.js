const getDate = () => {
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
  let currentDate = new Date();
  return `${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`;
}

module.exports = getDate;
