import React from "react";
import styled from 'styled-components';
import {Variables} from "../../../../styles/variables";

const StyledSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    width: 100%;
`;

const StyledSelect = styled.select`
  height: ${Variables.Global.pixelBase * 6}px;
  border-radius: 5px;
  border: solid 1px ${Variables.Colors.inputColorLight};
  width: 100%;
  padding: 0 ${Variables.Global.pixelBase * 2}px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  font-family: ${Variables.Global.primaryFont};
  font-size: 15px;
  color: ${Variables.Colors.secondaryColor};
  cursor: pointer;
`;

const StyledLabel = styled.div`
    font-family: ${Variables.Global.secondaryFont};
    font-weight: 600;
    color: ${Variables.Colors.secondaryColor};;
    text-transform: uppercase;
    font-size: 10px;
    margin-bottom: 8px;
    letter-spacing: 2px;
`;

const StyledOption = styled('option')`
    height: 40px;
    cursor: pointer;
`;

const Select = ({label, value, items, onChange}) => (
	<StyledSelectContainer className="solar-radio-button">
		<StyledSelect
			name={label}
			value={value}
			onChange={onChange}
		>
			{items && items.map((item, index) => {
				return <StyledOption key={index} value={item.value}>{item.name}</StyledOption>
			})}
		</StyledSelect>
		<StyledLabel htmlFor={label}>{label}</StyledLabel>
	</StyledSelectContainer>
);

export default Select;
