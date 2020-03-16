import styled, { css } from 'styled-components';

interface IFill {
  fill: string;
}
export const Svg = styled.svg<IFill>`
  vertical-align: middle;
  margin: 0 0;
  transition: 0.3s fill;
  fill: ${(props: any) => (props.theme.colorIcon ? props.theme.colorIcon.primary : 'black')};
  ${(props: any) =>
    props.fill !== '' &&
    css<IFill>`
      fill: ${props.fill};
    `}
`;
