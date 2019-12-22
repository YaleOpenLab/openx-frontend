import React from "react";
import "./Button.scss";
import {NavLink} from "react-router-dom";

const Button = ({link, action, disabled, style, label, children, type}) => {
	const content = (
		<button
			className="solar-form-button solar-btn-normal"
			disabled={!!disabled}
			type={type ? type : 'submit'}
			style={style ? style : null}
		>
			{label || children}
		</button>
	);
	if (link) {
		return <NavLink to={link}>{content}</NavLink>
	}
	return <div onClick={action}>{content}</div>
};

export default Button;
