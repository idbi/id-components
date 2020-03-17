import * as React from 'react';
import * as PropTypes from 'prop-types';

import KpiCard from '../KpiCard';
import { Wrapper, KpiContainer } from './style';

interface IEndpoint {
  url: string;
  name: string;
}

interface IEndpoints extends Array<IEndpoint> {}

interface IKpiCardList {
  endpoints: IEndpoints;
  payload: any;
  userToken: string;
}

const KpiCardList: React.FC<IKpiCardList> = props => {
  const { endpoints = [], payload, userToken } = props;
  return (
    <Wrapper>
      {endpoints.map((e: IEndpoint, i: number) => (
        <KpiContainer key={i}>
          <KpiCard {...e} payload={payload} userToken={userToken} />
        </KpiContainer>
      ))}
    </Wrapper>
  );
};

KpiCardList.propTypes = {
  endpoints: PropTypes.array.isRequired,
  payload: PropTypes.object.isRequired,
  userToken: PropTypes.string.isRequired,
};

export default KpiCardList;
