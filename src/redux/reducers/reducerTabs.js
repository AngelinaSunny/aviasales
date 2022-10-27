import { defaultState } from '../defaultState';

export const reducerTabs = (state = defaultState.tabs, action) => {
  switch (action.type) {
    case 'TAB_CHEAP':
      return {
        ...state,
        cheap: action.payload,
      };
    case 'TAB_FAST':
      return {
        ...state,
        fast: action.payload,
      };
    case 'TAB_OPTIMA':
      return {
        ...state,
        optima: action.payload,
      };
    default:
      return state;
  }
};
