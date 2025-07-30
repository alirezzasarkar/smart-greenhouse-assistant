export default function formatNumberWithCommas(numberString) {
  const numericOnly = numberString.replace(/\D/g, "");

  return parseInt(numericOnly, 10).toLocaleString("en-US");
}
