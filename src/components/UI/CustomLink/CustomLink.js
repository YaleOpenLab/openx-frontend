import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const StyledCustomLinkContainer = styled.div`
	padding: 8px 0;
`;
const StyledCustomLink = styled(NavLink)`
	color: #4a90e2;
	font-weight: ${props => props.weight};
	font-size: ${props => props.font}px;
	cursor: pointer;
	&:active {
		opacity: 0.7;
	}
`;

const CustomLink = ({url, label, children, weight, font, styles}) => {
	return (
		<StyledCustomLinkContainer style={styles}>
			<StyledCustomLink to={url ? url : '#'} weight={weight ? weight : "bold"} font={font ? font : 14}>
				{children || label}
			</StyledCustomLink>
		</StyledCustomLinkContainer>
	)
};

export default CustomLink;
