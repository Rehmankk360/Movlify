export default function shortDecimal(num) {
  const string = num.toString();
  let short = "";
  let numsAfterDecimal = 2;
  let currentAfterDecimal = -1;
  let switcher = false;
  for (let i = 0; i < string.length; i++) {
    short = short + string[i];
    if (string[i] == ".") switcher = true;
    if (switcher) currentAfterDecimal++;
    if (currentAfterDecimal >= numsAfterDecimal) return short;
  }
  return short;
}
