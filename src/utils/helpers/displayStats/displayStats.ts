import { shortDecimal, kiloToMega } from "..";

export default function displayStats(num: any) {
  return shortDecimal(kiloToMega(num / 1024));
}
