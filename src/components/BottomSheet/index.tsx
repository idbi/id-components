import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Wrapper, WrapperBackground, WrapLoaderCard } from './style';

interface IBottomSheet {
  active: boolean;
  children: any;
  onClose(): void;
  h?: number;
  isMobile?: boolean;
}

const BottomSheet: React.FC<IBottomSheet> = props => {
  return (
    <Wrapper active={props.active} isMobile={props.isMobile || false}>
      <WrapperBackground onClick={props.onClose} />
      <WrapLoaderCard active={props.active} isMobile={props.isMobile || false}>
        {props.children}
      </WrapLoaderCard>
    </Wrapper>
  );
};

BottomSheet.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  h: PropTypes.number,
  isMobile: PropTypes.bool,
};

export default BottomSheet;
