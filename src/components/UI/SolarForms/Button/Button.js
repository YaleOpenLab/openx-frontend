import React from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  border: none;
  text-transform: uppercase;
  font-family: $secondary-font;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  &:active {
  	opacity: 0.7;
  }
  &.default {
		background-color: #f5911e;
		color: #fff;
  }
  &.reversed {
		background: #ffffff00;
		color: #aaaeb3;
		border: 1px solid #c6c9cf;
  }
  &.secondary {
		background-color: #2961a2;
		color: #fff;
  }
  &:disabled {
		border: 1px solid #aaaeb3;
		background-color: #ededed;
		color: #aaaeb3;
  }
`;

const Button = ({link, action, disabled, style, label, children, type, variant}) => {
	const content = (
		<StyledButton
			className={variant ? variant : 'default'}
			disabled={disabled}
			type={type ? type : 'submit'}
			style={style ? style : null}
		>
			{label || children}
		</StyledButton>
	);
	if (link) {
		return <NavLink to={link}>{content}</NavLink>
	}
	return <div onClick={action}>{content}</div>
};

export default Button;
