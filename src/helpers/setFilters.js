export const setFilters = (filters, tickets) => {
  let result = [];

  const keys = Object.keys(filters);

  keys.forEach((key) => {
    if (filters[key] === true) {
      if (key === 'withoutTransfer') {
        const arr = tickets.filter((el) => el.segments[0].stops.length === 0 || el.segments[1].stops.length === 0);
        result = [...result, ...arr];
      }
      if (key === 'oneTransfer') {
        const arr = tickets.filter((el) => el.segments[0].stops.length === 1 || el.segments[1].stops.length === 1);
        result = [...result, ...arr];
      }
      if (key === 'twoTransfers') {
        const arr = tickets.filter((el) => el.segments[0].stops.length === 2 || el.segments[1].stops.length === 2);
        result = [...result, ...arr];
      }
      if (key === 'threeTransfers') {
        const arr = tickets.filter((el) => el.segments[0].stops.length === 3 || el.segments[1].stops.length === 3);
        result = [...result, ...arr];
      }
      if (key === 'All') {
        return filters;
      }
    }
  });
  return result;
};
