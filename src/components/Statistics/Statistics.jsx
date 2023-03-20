import PropTypes from 'prop-types';
import { StatisticItem } from '../StatisticItem/StatisticItem';
import { Statistic, Title, List, Item } from './Statistic.styled';
import { randomColor } from 'utils/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title.length > 0 && <Title className="title">{title}</Title>}
      <List className="stat-list">
        {stats.map(stats => (
          <Item
            key={stats.id}
            className="item"
            style={{ backgroundColor: randomColor() }}
          >
            <StatisticItem label={stats.label} percentage={stats.percentage} />
          </Item>
        ))}
      </List>
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
