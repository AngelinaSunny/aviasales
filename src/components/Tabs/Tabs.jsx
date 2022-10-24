import { useSelector, useDispatch } from 'react-redux';

import { tabCheap, tabFast, tabOptima } from '../../redux/actions/actionTabs';

import classes from './Tabs.module.scss';

const Tabs = () => {
  const dispatch = useDispatch();
  const { cheap, fast, optima } = useSelector((state) => state.tabs);

  return (
    <div className={classes.tabs}>
      <button
        type="button"
        className={cheap ? `${classes.tab} ${classes.tab_active}` : `${classes.tab}`}
        onClick={() => {
          dispatch(tabCheap(true));
          dispatch(tabFast(false));
          dispatch(tabOptima(false));
        }}
      >
        самый дешевый
      </button>
      <button
        type="button"
        className={fast ? `${classes.tab} ${classes.tab_active}` : `${classes.tab}`}
        onClick={() => {
          dispatch(tabCheap(false));
          dispatch(tabFast(true));
          dispatch(tabOptima(false));
        }}
      >
        самый быстрый
      </button>
      <button
        type="button"
        className={optima ? `${classes.tab} ${classes.tab_active}` : `${classes.tab}`}
        onClick={() => {
          dispatch(tabCheap(false));
          dispatch(tabFast(false));
          dispatch(tabOptima(true));
        }}
      >
        оптимальный
      </button>
    </div>
  );
};

export default Tabs;
