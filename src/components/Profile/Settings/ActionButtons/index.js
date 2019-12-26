import React from 'react';
import Button from "../../../UI/SolarForms/Button/Button";
import styled from "styled-components";


const StyledActionButtons = styled.div`
	display: flex;
`;
const StyledButtons = styled.div`
	flex: 1;
  padding: 0 15px;
`;

const ActionButtons = ({cancelButton, confirmButton}) => {

	return (
		<StyledActionButtons>
			<StyledButtons>
				{cancelButton && <Button
					variant='reverse'
					action={cancelButton.action}
					link={cancelButton.url}
					label={cancelButton.label}
				/>}
			</StyledButtons>
			<StyledButtons>
				{confirmButton && <Button
					action={confirmButton.action}
					link={confirmButton.url}
					label={confirmButton.label}
				/>}
			</StyledButtons>
		</StyledActionButtons>
	)
};

export default ActionButtons;
