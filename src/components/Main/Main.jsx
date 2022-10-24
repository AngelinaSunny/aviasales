import { useSelector } from 'react-redux';
import { SpinnerCircularFixed } from 'spinners-react';
import { BarLoader } from 'react-spinners';

import TicketsList from '../TicketsList/TicketsList';
import Filter from '../Filter';
import Tabs from '../Tabs';

import classes from './Main.module.scss';

const Main = () => {
  const { notOk, stop } = useSelector((state) => state.services);

  return (
    <>
      {!stop && notOk < 1 ? (
        <>
          <div className={classes['text-loader']}>Продолжаем загружать билеты...</div>
          <BarLoader className={classes.loader} color="rgba(33, 150, 243, 0.47)" width="100%" height="20px" />{' '}
        </>
      ) : null}
      <div className={classes.main}>
        <Filter />
        <Tabs />
        {stop || notOk > 1 ? (
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

export default Main;
