export default function replaceExp(number) {
  let correctNumberFormat = number.replace(/^\+?\d/, '+7').replace(/[- ()]/g, '');

  if (/^(\+)?([- ()]?\d[- ()]?){12,14}$/.test(number) === true) {
    correctNumberFormat = number.replace(/^\+?/, '+').replace(/[- ()]/g, '');
  }
  return correctNumberFormat;
}
