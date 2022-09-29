import styled from 'styled-components';

export const NotificationMessage = styled.p`
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.l};
`;
