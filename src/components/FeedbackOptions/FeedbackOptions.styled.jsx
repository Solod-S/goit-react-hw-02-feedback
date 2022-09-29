import styled from 'styled-components';
export const OptionsList = styled.ul`
  display: flex;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
export const OptionsItem = styled.li`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
export const OptionsBtn = styled.button`
  :first-letter {
    text-transform: uppercase;
  }
  color: ${p => p.theme.colors.primaryText};
  font-family: ${p => p.theme.fontFamily.roboto};
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[3]}px;
  outline: 1px solid ${p => p.theme.colors.primaryText};
  transition: transform 250ms linear;
  cursor: pointer;
  :hover {
    color: ${p => p.theme.colors.hoverBtnColor};
    outline: 1px solid ${p => p.theme.colors.hoverBtnColor};
    transform: scale(1.1);
  }
`;
