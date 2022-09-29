import styled from 'styled-components';

export const StatisticsHeader = styled.h2`
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[5]}px;
`;
export const StatisticsList = styled.ul``;
export const StatisticsItem = styled.li`
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
`;
