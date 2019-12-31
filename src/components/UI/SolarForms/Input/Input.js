import React from "react";
import styled from 'styled-components';
import {Variables} from "../../../../styles/variables";

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
  justify-content: flex-end;
  margin: 0 ${Variables.Global.pixelBase}px;
  width: 100%;
`;

const StyledInput = styled.input`
  height: ${Variables.Global.pixelBase * 6}px;
  border-radius: 5px;
  border: solid 1px ${props => props.error ? Variables.Colors.errorColor : Variables.Colors.inputColorLight};
  width: 100%;
  padding: ${Variables.Global.pixelBase} ${Variables.Global.pixelBase * 2};
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: ${Variables.Global.pixelBase * 3}px;
  text-align: center;
  font-family: ${Variables.Global.primaryFont};
  font-size: 15px;
  color: ${props => props.error ? Variables.Colors.errorColor : Variables.Colors.secondaryColor};
  
  $:focus {
  	border: solid 1px ${Variables.Colors.charcoalGrey};
  }
  $:focus + label {
  	border: solid 1px ${Variables.Colors.secondaryColor};
  }
  $::placeholder {
  	border: solid 1px ${Variables.Colors.inputPlaceholderColor};
  }
`;

const StyledLabel = styled.label`
  font-family: ${Variables.Global.secondaryFont};
  font-weight: 600;
  color: ${Variables.Colors.secondaryColorLighter};
  text-transform: uppercase;
  font-size: 10px;
  margin-bottom: ${Variables.Global.pixelBase}px;
  letter-spacing: 2px;
  height: 15px;
`;


const StyledErrorText = styled.div`
  font-family: ${Variables.Global.secondaryFont};
  color: ${Variables.Colors.errorColor};
  position: absolute;
  margin-top: -25px;
  font-size: 12px;
  width: 100%;
  padding: 6px;
	margin-top: 68px;
`;

const Input = ({field, type, disabled, label, errors, touched}) => {
	return (
		<StyledInputContainer>
			<StyledInput
				type={type ? type : 'text'}
				disabled={disabled}
				value={field.value}
				name={field.name}
				onChange={field.onChange}
				onBlur={field.onBlur}
				error={errors && touched}
			/>
			<StyledLabel htmlFor="address" >
				{label}
			</StyledLabel>
			{errors && touched &&
			<StyledErrorText>
				{errors}
			</StyledErrorText>}
		</StyledInputContainer>
	)
};

export default Input;
