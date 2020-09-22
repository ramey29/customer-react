export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  pageSize = pageSize * pageNumber;
  return items.slice(startIndex, pageSize);
}
