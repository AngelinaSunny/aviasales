import { useSelector } from 'react-redux';
import { SpinnerCircularFixed } from 'spinners-react';
import { BarLoader } from 'react-spinners';

import { TicketsList } from '../TicketsList/TicketsList';
import { Filter } from '../Filter/Filter';
import { Tabs } from '../Tabs/Tabs';

import classes from './Main.module.scss';

export const Main = () => {
  const { error, stop, tickets } = useSelector((state) => state.services);

  return (
    <>
      {!stop && !error ? (
        <>
          <div className={classes['text-loader']}>Продолжаем загружать билеты...</div>
          <BarLoader className={classes.loader} color="rgba(33, 150, 243, 0.47)" width="100%" height="20px" />{' '}
        </>
      ) : null}
      <div className={classes.main}>
        <Filter />
        <Tabs />
        {stop || tickets.length > 0 ? (
          <TicketsList />
        ) : (
          <div className={classes.spinner}>
            <SpinnerCircularFixed color="#a0b0b9" secondaryColor="#2196f3" />
          </div>
        )}
      </div>
    </>
  );
};
