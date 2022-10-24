import { NumericFormat } from 'react-number-format';

import flight from '../../helpers/flight';

import classes from './Ticket.module.scss';

const Ticket = ({ price, carrier, segments }) => {
  const formatPrice = (
    <NumericFormat
      value={price}
      thousandsGroupStyle="lakh"
      thousandSeparator=" "
      displayType="text"
      renderText={(value) => <b>{value}</b>}
    />
  );

  return (
    <div className={classes.ticket}>
      <div className={classes['company-price']}>
        <div className={classes.price}>{formatPrice} P</div>
        <div className={classes.company}>
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="aviacompany" />
        </div>
      </div>
      <div className={classes['ticket-descr']}>{flight(segments[0])}</div>
      <div className={classes['ticket-descr']}>{flight(segments[1])}</div>
    </div>
  );
};
export default Ticket;
