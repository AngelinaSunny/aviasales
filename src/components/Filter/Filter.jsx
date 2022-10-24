import { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/actionsFilter';

import classes from './Filter.module.scss';

const Filter = ({
  filter,
  filterAll,
  filterWithoutTransfer,
  filterOneTransfer,
  filterTwoTransfers,
  filterThreeTransfers,
}) => {
  const [classesList, setClassesList] = useState([classes.filters, classes['filter-hidden']]);

  const changeClasses = () => {
    if (classesList[1] === classes['filter-hidden']) {
      setClassesList([classes.filters]);
    } else {
      setClassesList([classes.filters, classes['filter-hidden']]);
    }
    return classesList;
  };

  return (
    <div className={classesList.join(' ')} onClick={changeClasses}>
      <p className={classes.header}>количество пересадок</p>
      <label className={classes.filter}>
        <input type="checkbox" checked={filter.All} onChange={filterAll} />
        <span>Все</span>
      </label>
      <label className={classes.filter}>
        <input type="checkbox" checked={filter.withoutTransfer} onChange={filterWithoutTransfer} />
        <span>Без пересадок</span>
      </label>
      <label className={classes.filter}>
        <input type="checkbox" checked={filter.oneTransfer} onChange={filterOneTransfer} />
        <span>1 пересадка</span>
      </label>
      <label className={classes.filter}>
        <input type="checkbox" checked={filter.twoTransfers} onChange={filterTwoTransfers} />
        <span>2 пересадки</span>
      </label>
      <label className={classes.filter}>
        <input type="checkbox" checked={filter.threeTransfers} onChange={filterThreeTransfers} />
        <span>3 пересадки</span>
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({ filter: state.filters });

export default connect(mapStateToProps, actions)(Filter);
