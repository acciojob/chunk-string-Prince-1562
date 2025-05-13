function chunkString(str, chunkLength) {
  // Return empty array if input is null or not a string
  if (str == null) return [];

  const result = [];
  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.slice(i, i + chunkLength));
  }
  return result;
}
