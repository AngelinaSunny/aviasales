export const sorting = (arr, property) => {
  switch (property) {
    case 'price':
      return arr.sort((a, b) => (a[property] > b[property] ? 1 : -1));
    case 'duration':
      return arr.sort((a, b) => (a.segments[0][property] > b.segments[0][property] ? 1 : -1));
    default:
      return arr;
  }
};
