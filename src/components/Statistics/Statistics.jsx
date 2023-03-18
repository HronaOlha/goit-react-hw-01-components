import { StatisticItem } from '../StatisticItem/StatisticItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title.length > 0 && <h2 class="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id} className="item">
            <StatisticItem stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};
