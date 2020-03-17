import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Wrapper, Name, Row, Kpi, OldKpi, Percentage } from './style';
import MiniLoaderCircle from '../MiniLoaderCircle';
import { getDataByEndpoint } from '../../axios/index';

interface IKpiCard {
  url: string;
  name: string;
  payload: any;
  userToken: string;
}

const KpiCard: React.FC<IKpiCard> = props => {
  const { url, name = '', payload, userToken } = props;
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({ current: 0, old: 0, symbol: '' });

  React.useEffect(() => {
    if (!payload.page) {
      callEndpoint();
    }
  }, [payload]);

  const callEndpoint = async () => {
    setLoading(true);
    if (!payload) return;
    const r = await getDataByEndpoint(url, payload, userToken);
    setLoading(false);
    setData(r.data.data);
  };

  const { current, old, symbol } = data;
  const dif = current - old;
  let percentageDif = ((dif / old) * 100).toFixed(2);
  percentageDif = isNaN(Number(percentageDif)) || percentageDif === 'Infinity' ? '0' : percentageDif;
  const oldSymbol = dif > 0 ? '+' : '';
  return (
    <Wrapper>
      <React.Fragment>
        <Name>{name}</Name>
        {loading ? (
          <MiniLoaderCircle style={{ width: '30px' }} />
        ) : (
          <Row>
            <Kpi>
              {symbol} {current}
            </Kpi>
            <div style={{ display: 'flex' }}>
              <OldKpi>
                {oldSymbol} {percentageDif}
              </OldKpi>
              <Percentage>%</Percentage>
            </div>
          </Row>
        )}
      </React.Fragment>
    </Wrapper>
  );
};

KpiCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  payload: PropTypes.object.isRequired,
  userToken: PropTypes.string.isRequired,
};

export default KpiCard;
