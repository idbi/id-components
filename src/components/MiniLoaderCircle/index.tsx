import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Wrapper, GifImage } from './style';
// import loader from '../../static/miniloading.gif';

interface IMiniLoader {
  style?: object;
}

const MiniLoader: React.FC<IMiniLoader> = props => {
  const { style } = props;
  // return <Wrapper>{<GifImage style={style} src={loader} />}</Wrapper>;
  return <Wrapper>{'Cargando...'}</Wrapper>;
};

MiniLoader.propTypes = {
  style: PropTypes.object,
};

export default MiniLoader;
