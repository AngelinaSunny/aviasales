import { combineReducers } from 'redux';

import reducerServices from './reducerServices';
import reducerFilters from './reducerFilters';
import reducerTabs from './reducerTabs';

export const rootReducer = combineReducers({
  filters: reducerFilters,
  services: reducerServices,
  tabs: reducerTabs,
});

export default rootReducer;
