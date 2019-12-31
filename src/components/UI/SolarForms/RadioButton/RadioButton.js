import React from "react";
import styled from 'styled-components';
import {Variables} from "../../../../styles/variables";

const StyledRadioButton = styled.div`
	display: flex;
`;
const StyledExplanationField = styled.div`
	margin-left: 25px;
	color: ${Variables.Colors.secondaryColorLighter}
	font-size: 10px;
`;

const RadioButton = ({name, checked, label, explanation, onChange}) => (
  <StyledRadioButton className="solar-radio-button">
    <input
      type="checkbox"
      id={name}
      name={name}
			onChange={onChange}
      className="solar-input-radio-button"
      checked={checked}
    />
    <label htmlFor={name}>{label}</label>
		<StyledExplanationField>{explanation}</StyledExplanationField>
  </StyledRadioButton>
);

export default RadioButton;
