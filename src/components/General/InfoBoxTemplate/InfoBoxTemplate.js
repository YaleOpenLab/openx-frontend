import React from 'react';
import styled from 'styled-components';
import {Variables} from "../../../styles/variables";

const StyledInfoBoxTemplate = styled.div`
	width: 317px;
`;

const StyledHeader = styled.div`
	font-size: 14px;
	text-transform: uppercase;
	color: ${Variables.Colors.thirdColorLighter};
	font-weight: lighter;
	padding: 5px;
`;

const StyledSeparator = styled.div`
	border-bottom: 1px solid silver;
`;

const StyledBody = styled.div`
	padding: 15px 30px;
	color: ${Variables.Colors.secondaryColor};
  text-align: left;
`;

const InfoBoxTemplate = ({title, content}) => {
	return (
		<StyledInfoBoxTemplate>
			<StyledHeader>
				{title}
			</StyledHeader>
			<StyledSeparator />
			<StyledBody>
				{content}
			</StyledBody>
		</StyledInfoBoxTemplate>
	)
};

export default InfoBoxTemplate;
