import React from "react";
import styled from "styled-components";

const StyledToggleButton = styled.div`
	display: flex;
`;

const StyledToggleButtonLabel = styled.div`
	
`;


const StyledToggleButtonInput = styled.div`
	margin-left: 35px;
`;

const ToggleButton = ({label, handleChange, checked, onLabel, offLabel, classes, disabled}) => (
	<StyledToggleButton>
		<StyledToggleButtonLabel>{label}</StyledToggleButtonLabel>
		<StyledToggleButtonInput>
			<label className="solar-input-switch">
				<input
					type="checkbox"
					disabled={disabled}
					checked={checked}
					onChange={handleChange ? e => handleChange(e) : null}
				/>
				<div/>
				<span>
          {checked
						? onLabel
							? onLabel
							: "On"
						: offLabel
							? offLabel
							: "Off"}
        </span>
			</label>
		</StyledToggleButtonInput>
	</StyledToggleButton>
);

export default ToggleButton;
