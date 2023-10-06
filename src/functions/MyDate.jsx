import { minTwoNumbers, truncateString } from "./UsefulFunc";


function getMyDay(params) {
  let res = "";
  switch (params) {
    case 0: res = "dimanche"; break;
    case 1: res = "lundi"; break;
    case 2: res = "mardi"; break;
    case 3: res = "mercredi"; break;
    case 4: res = "jeudi"; break;
    case 5: res = "vendredi"; break;
    case 6: res = "samedi"; break;
    default: break;
  }
  return res;
};

function getMyMonth(params) {
  let res = "";
  switch (params) {
    case 0: res = "janvier"; break;
    case 1: res = "fevrier"; break;
    case 2: res = "mars"; break;
    case 3: res = "avril"; break;
    case 4: res = "mai"; break;
    case 5: res = "juin"; break;
    case 6: res = "juillet"; break;
    case 7: res = "aout"; break;
    case 8: res = "septembre"; break;
    case 9: res = "octobre"; break;
    case 10: res = "novembre"; break;
    case 11: res = "decembre"; break;
    default: break;
  }
  return res;
};

function getTodayDateTruncated() {
  const dateBrute = new Date();

  const day = dateBrute.getDay()
  const date = dateBrute.getDate()
  const month = dateBrute.getMonth()
  const year = dateBrute.getFullYear()
  let formattedDate = '';
  formattedDate = `${truncateString(getMyDay(day))} ${minTwoNumbers(date)} ${truncateString(getMyMonth(month))} ${year}`

  return formattedDate
}

function getTodayDate() {
  const dateBrute = new Date();

  const day = dateBrute.getDay()
  const date = dateBrute.getDate()
  const month = dateBrute.getMonth()
  const year = dateBrute.getFullYear()
  let formattedDate = '';
  formattedDate = `${getMyDay(day)} ${minTwoNumbers(date)} ${getMyMonth(month)} ${year} `

  return formattedDate
}

export {
  getMyDay,
  getMyMonth,
  getTodayDate,
  getTodayDateTruncated,
}