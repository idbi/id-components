import * as React from 'react';

import { Svg } from './style';
interface IconProps {
  children: any;
  color?: string;
  size?: number;
  viewBox?: string;
}
const Icon: React.FC<IconProps> = props => {
  const { children, color, size, viewBox } = props;
  return (
    <Svg fill={color || ''} height={size || 24} width={size || 24} viewBox={viewBox || `0 0 32 32`}>
      {children}
    </Svg>
  );
};

export default Icon;
