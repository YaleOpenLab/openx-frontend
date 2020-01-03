import React from 'react';
import styled from 'styled-components';
import {Variables} from "../../../styles/variables";

const StyledNotAvailableContainer = styled.div`
	text-align: center;
	color: ${Variables.Colors.errorColor};
	font-size: 25px;
	text-transform: uppercase;
	font-weight: lighter;
`;

const NotAvailable = ({text}) => {
		return (
			<StyledNotAvailableContainer>
				{text}
			</StyledNotAvailableContainer>
		)
};

export default NotAvailable;
