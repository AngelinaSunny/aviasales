import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Ticket from '../Ticket';
import { sorting } from '../../helpers/sorting';
import { setFilters } from '../../helpers/setFilters';

import classes from './TicketsList.module.scss';

const TicketsList = () => {
  const [maxIndex, setMaxIndex] = useState(5);
  const { tickets } = useSelector((state) => state.services);
  const { fast, cheap } = useSelector((state) => state.tabs);
  const { filters } = useSelector((state) => state);

  let property = '';
  if (fast) {
    property = 'duration';
  } else if (cheap) {
    property = 'price';
  }
  const filtersItem = setFilters(filters, tickets);

  const sortTickets = sorting(filtersItem, property);

  const items = sortTickets.slice(0, maxIndex).map((item) => <Ticket key={uuidv4()} {...item} />);

  return (
    <div className={classes.tickets}>
      {items.length === 0 ? (
        <p>Рейсов, подходящих под заданные фильтры, не найдено</p>
      ) : (
        <>
          {items}
          <button
            type="button"
            className={classes['button-show']}
            onClick={() => {
              setMaxIndex((el) => el + 5);
            }}
          >
            показать еще 5 билетов
          </button>
        </>
      )}
      ;
    </div>
  );
};

export default TicketsList;
