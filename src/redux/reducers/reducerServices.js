import defaultState from '../defaultState';

const reducerServices = (state = defaultState.getServices, action) => {
  switch (action.type) {
    case 'STATUS_NOT_OK':
      return {
        ...state,
        notOk: state.notOk + 1,
      };
    case 'FETCH_IS_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_IS_STOP':
      return {
        ...state,
        stop: action.response.stop,
      };
    case 'FETCH_TICKETS_SUCCESS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.response.tickets],
      };
    case 'FETCH_ID_SUCCESS':
      return {
        ...state,
        searchId: action.response.searchId,
      };
    default:
      return state;
  }
};
export default reducerServices;
