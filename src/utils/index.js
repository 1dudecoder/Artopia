export function truncateText(text = "", startLength = 0, endLength = 0) {
  if (text.length <= startLength + endLength) return text;
  const start = text.substring(0, startLength);
  const end = text.substring(text.length - endLength);
  return start + "..." + end;
}
