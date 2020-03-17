import styled, { css } from 'styled-components';
import { opacityEffect } from '../../animations';

interface IContainers {
  active: boolean;
  isMobile: boolean;
}

export const Wrapper = styled.div<IContainers>`
  z-index: ${(props: any) => (props.active ? '12' : '-1')};
  opacity: ${(props: any) => (props.active ? '1' : '0')};
  position: fixed;
  display: block;
  overflow: hidden;
  background-color: #222222aa;
  width: 100vw;
  height: 100vh;
  animation: ${opacityEffect} 0.2s ease-in;
  top: 0;
  left: 0;
`;

export const WrapperBackground = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`;

export const WrapLoaderCard = styled.div<IContainers>`
  bottom: ${(props: any) => (props.active ? '0' : '-200px')};
  transition: 0.5s;
  width: ${(props: any) => (props.isMobile ? '100%' : '400px')};
  background-color: #ffffff;
  position: fixed;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  animation: ${opacityEffect} 0.2s ease-in;
  display: flex;
  margin-top: ${(props: any) => (props.isMobile ? '-50px' : '0')};
  ${(props: any) => {
    if (props.isMobile) {
      return css`
        left: 0;
      `;
    } else {
      return css`
        right: 0;
        margin-right: 18px;
      `;
    }
  }};
`;
