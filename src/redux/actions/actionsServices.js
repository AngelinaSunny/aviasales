export const fetchTicketsSuccess = (result) => ({ type: 'FETCH_TICKETS_SUCCESS', response: result });
export const fetchIdSuccess = (result) => ({ type: 'FETCH_ID_SUCCESS', response: result });
export const fetchIsLoading = () => ({ type: 'FETCH_IS_LOADING' });
export const fetchIsStop = (result) => ({ type: 'FETCH_IS_STOP', response: result });
export const fetchError = () => ({ type: 'FETCH_ERROR' });
