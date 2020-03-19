import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Wrapper, BaseBar, OptionWrapper, IconPart, NamePart } from './style';

import BottomSheet from '../BottomSheet';
import VerticalNavBar from '../VerticalNavBar';

interface IOption {
  label: string;
  value: string;
  icon: any;
  action(): any;
  subOptions?: IOptions;
}

interface IOptions extends Array<IOption> {}

interface IBottomNavBar {
  options: IOptions;
  isMobile?: boolean;
  activeColor?: string;
  desactivateColor?: string;
  defaultSelected?: string;
}

const BottomNavBar: React.FC<IBottomNavBar> = props => {
  const [current, setCurrent] = React.useState(props.defaultSelected);
  const [isActiveSubMenu, setIsActiveSubMenu] = React.useState(false);
  const [optionsSubMenu, setOptionsSubMenu] = React.useState([]);

  const onClick = (selected: any) => {
    if (selected.action) {
      setCurrent(selected.value);
      selected.action(selected);
    } else if (selected.subOptions) {
      setOptionsSubMenu(selected.subOptions);
    }
  };

  return (
    <Wrapper>
      <BaseBar isMobile={props.isMobile || false}>
        {props.options.map((opt: any, i) => {
          const isSelected = current === opt.value;
          return (
            <OptionWrapper key={i} onClick={() => onClick(opt)}>
              <IconPart isSelected={isSelected}>
                {React.cloneElement(opt.icon, {
                  color: isSelected ? props.activeColor : props.desactivateColor,
                })}
              </IconPart>
              <NamePart isSelected={isSelected}>{opt.label}</NamePart>
            </OptionWrapper>
          );
        })}
      </BaseBar>
      <BottomSheet
        active={isActiveSubMenu}
        onClose={() => setIsActiveSubMenu(false)}
        isMobile={props.isMobile || false}
        h={260}
      >
        <VerticalNavBar options={optionsSubMenu} />
      </BottomSheet>
    </Wrapper>
  );
};

BottomNavBar.defaultProps = {
  options: [],
  defaultSelected: '/',
  activeColor: '#6C63FF',
  desactivateColor: '#BABFCD',
};

BottomNavBar.propTypes = {
  isMobile: PropTypes.bool,
  options: PropTypes.array.isRequired,
  defaultSelected: PropTypes.string,
  activeColor: PropTypes.string,
  desactivateColor: PropTypes.string,
};

export default BottomNavBar;
