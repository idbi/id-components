import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 10px;
  color: #7a95ff;
  border: 2px solid #b6c4ff;
  border-radius: 5px;
  width: 270px;
`;

export const Name = styled.h5`
  padding-bottom: 15px;
  font-size: 1em;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Kpi = styled.p`
  font-size: 1.4em;
  font-weight: 600;
  padding-right: 10px;
`;

export const OldKpi = styled.span`
  font-size: 2em;
  font-weight: 600;
  opacity: 0.5;
`;

export const Percentage = styled.span`
  display: flex;
  align-items: flex-end;
  padding-bottom: 5px;
  font-size: 1em;
  font-weight: 600;
`;
