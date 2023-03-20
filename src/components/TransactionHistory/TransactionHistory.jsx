import PropTypes from 'prop-types';
import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import { Table, Titles, Row } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <Titles>Type</Titles>
          <Titles>Amount</Titles>
          <Titles>Currency</Titles>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <Row key={id}>
            <TransactionHistoryItem
              type={type}
              amount={amount}
              currency={currency}
            />
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
