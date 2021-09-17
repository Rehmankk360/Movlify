const randomItem = (arr: any) => {
  const copy = arr.slice();
  const randomIndex: number = Math.floor(Math.random() * arr.length);
  const random: any = copy[randomIndex];
  return random;
};
export default randomItem;
