import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 18px 0;
  display: flex;
  flex-flow: column;
  transition: 0.3s;
  width: 100%;
`;

export const Option = styled.div`
  display: flex;
  padding: 12px 18px;
  align-items: center;
  vertical-align: middle;
  :hover {
    background-color: #5565fb22;
    cursor: pointer;
  }
`;

export const OptionName = styled.div`
  font-size: 1em;
  color: #333;
  margin-left: 8px;
`;
