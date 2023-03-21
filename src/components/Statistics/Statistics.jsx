import PropTypes from 'prop-types';
import { Statistic, Title, List, Item } from './Statistic.styled';
import { randomColor } from 'utils/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title.length > 0 && <Title className="title">{title}</Title>}
      <List>
        {stats.map(({ label, percentage, id }) => (
          <Item key={id} style={{ backgroundColor: randomColor() }}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </Item>
        ))}
      </List>
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
