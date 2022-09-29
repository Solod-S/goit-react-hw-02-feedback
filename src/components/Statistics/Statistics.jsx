import React from 'react';
import {
  StatisticsHeader,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';

export const Statistics = props => {
  const { good, bad, neutral, total, positivePercentage } = props;
  return (
    <>
      <StatisticsHeader>Statistics</StatisticsHeader>
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {total}</StatisticsItem>
        <StatisticsItem>
          Positive feedback: {positivePercentage}%
        </StatisticsItem>
      </StatisticsList>
    </>
  );
};

// import React from 'react';
// import {
//   StatisticsHeader,
//   StatisticsList,
//   StatisticsItem,
// } from './Statistics.styled';

// export class Statistics extends React.Component {
//   render() {
//     const { good, bad, neutral, total, positivePercentage } = this.props;
//     return (
//       <>
//         <StatisticsHeader>Statistics</StatisticsHeader>
//         <StatisticsList>
//           <StatisticsItem>Good: {good}</StatisticsItem>
//           <StatisticsItem>Neutral: {neutral}</StatisticsItem>
//           <StatisticsItem>Bad: {bad}</StatisticsItem>
//           <StatisticsItem>Total: {total}</StatisticsItem>
//           <StatisticsItem>
//             Positive feedback: {positivePercentage}%
//           </StatisticsItem>
//         </StatisticsList>
//       </>
//     );
//   }
// }
// // export default Statistics;
