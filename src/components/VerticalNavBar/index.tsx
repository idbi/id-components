import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Wrapper, Option, OptionName } from './style';

interface IOption {
  label: string;
  value: string;
  icon: any;
  action(): any;
}

interface IOptions extends Array<IOption> {}

interface IVerticalNavBar {
  options: IOptions;
}

const VerticalNavBar: React.FC<IVerticalNavBar> = props => {
  const handleClick = (selected: any) => {
    if (selected.action) {
      selected.action(selected);
    }
  };

  return (
    <Wrapper>
      {props.options.map((o, i) => {
        return (
          <Option key={i} onClick={() => handleClick(o)}>
            {o.icon}
            <OptionName>{o.label}</OptionName>
          </Option>
        );
      })}
    </Wrapper>
  );
};

VerticalNavBar.propTypes = {
  options: PropTypes.array.isRequired,
};

export default VerticalNavBar;
