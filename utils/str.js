// utils/str.js

function isEmpty(str) {
  return !str || str.trim() === "";
}

function isNumber(str) {
  return !isNaN(str);
}

export { isEmpty, isNumber };
