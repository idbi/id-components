import styled, { css } from 'styled-components';

import { opacityEffect } from '../../animations';

interface IBaseBar {
  isMobile: boolean;
}

interface IIconPart {
  isSelected: boolean;
}

interface INamePart {
  isSelected: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BaseBar = styled.div<IBaseBar>`
  position: fixed;
  padding: 0 18px;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  box-shadow: 0 2px 60px 0px RGBA(86, 96, 128, 0.4);
  ${(props: any) => {
    if (props.isMobile) {
      return css`
        width: 100vw;
        bottom: 0;
      `;
    } else {
      return css`
        border-radius: 50px;
        width: 400px;
        bottom: 0;
        right: 0;
        margin-right: 12px;
        margin-bottom: 12px;
      `;
    }
  }};
`;

export const OptionWrapper = styled.div`
  vertical-align: middle;
  display: flex;
  flex-flow: column;
  align-content: center;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const IconPart = styled.div<IIconPart>`
  transition: 0.3s;
  ${(props: any) => {
    if (props.isSelected) {
      return css`
        transform: scale(1.02);
      `;
    } else {
      return css`
        transform: scale(1);
      `;
    }
  }};
`;

export const NamePart = styled.div<INamePart>`
  transition: 0.3s;
  font-size: 0.65em;
  color: #6c63ff;
  ${(props: any) => {
    if (props.isSelected) {
      return css`
        animation: ${opacityEffect} ease-in;
        display: block;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }};
`;
