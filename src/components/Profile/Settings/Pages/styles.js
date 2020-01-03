import styled from "styled-components";
import {Variables} from "../../../../styles/variables";

export const StyledHeader = styled.div`
	font-size: 20px;
	color: ${Variables.Colors.secondaryColor};
	margin-bottom: 16px;
`;

export const StyledText = styled.div`
	font-size: 14px;
	color: ${Variables.Colors.secondaryColor};
	margin-bottom: 8px;
`;

export const Highlight = styled.span`
		color: ${Variables.Colors.primaryColor}
`;

export const StyledSmallerHeader = styled.div`
	font-size: 14px;
	color: ${Variables.Colors.secondaryColor};
	margin-bottom: 8px;
`;

export const StyledSmallerText = styled.div`
	font-size: 12px;
	color: ${Variables.Colors.secondaryColor};
	margin-bottom: 8px;
`;

export const StyledSeparator = styled.div`
	margin: ${props => Variables.Global.pixelBase * props.size}px 0;
	width: 100%;
  border-bottom: ${props => props.noBorder ? '0' : '2px'} solid ${Variables.Colors.greyLight};
`;

StyledSeparator.defaultProps = {
	size: 1
};

export const StyledFieldSection = styled.div`
	display: flex;
`;

export const StyledFlexContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
`;
