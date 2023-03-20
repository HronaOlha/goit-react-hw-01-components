import PropTypes from 'prop-types';
import { StatisticItem } from '../StatisticItem/StatisticItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(stats => (
          <li key={stats.id} className="item">
            <StatisticItem label={stats.label} percentage={stats.percentage} />
          </li>
        ))}
      </ul>
    </section>
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
