export const defaultState = {
  filters: {
    All: false,
    withoutTransfer: true,
    oneTransfer: true,
    twoTransfers: false,
    threeTransfers: false,
  },
  tabs: {
    cheap: true,
    fast: false,
    optima: false,
  },
  getServices: {
    isLoading: false,
    tickets: [],
    stop: false,
    searchId: null,
    error: false,
  },
};
