export const StatisticItem = ({ stat: { label, percentage } }) => {
  return (
    <>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </>
  );
};
