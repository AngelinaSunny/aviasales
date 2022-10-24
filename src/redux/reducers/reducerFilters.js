import defaultState from '../defaultState';

const reducerFilters = (state = defaultState.filters, action) => {
  let newState = state;
  if (action.type === 'All') {
    newState = {
      ...state,
      All: !state.All,
      withoutTransfer: !state.All,
      oneTransfer: !state.All,
      twoTransfers: !state.All,
      threeTransfers: !state.All,
    };
  } else if (action.type !== 'All') {
    if (state[action.type] && state.All === true) {
      newState = {
        ...state,
        All: false,
        [action.type]: false,
      };
    } else {
      newState = {
        ...state,
        [action.type]: !state[action.type],
      };
    }
  }

  if (newState.withoutTransfer && newState.oneTransfer && newState.twoTransfers && newState.threeTransfers) {
    newState = {
      ...state,
      All: true,
      withoutTransfer: true,
      oneTransfer: true,
      twoTransfers: true,
      threeTransfers: true,
    };
  }

  return newState;
};

export default reducerFilters;
