import React from 'react';
import styled from 'styled-components';
import {StyledText, StyledHeader, StyledFieldSection} from "../Pages/styles";
import {Variables} from "../../../../styles/variables";
import CustomLink from "../../../UI/CustomLink/CustomLink";

const StyledTutorialStepContainer = styled.div`
	margin-bottom: 40px	;
`;

const StyledStepTitle = styled(StyledHeader)`
	text-transform: uppercase;
	margin-bottom: ${Variables.Global.pixelBase * 2}px;
`;

const StyledStepDescription = styled.div`
	font-size: 14px;
	color: ${Variables.Colors.secondaryColor};
	margin-bottom: ${Variables.Global.pixelBase}px;
`;

const StyledImageSection = styled.div`
	margin: 16px 0;
`;

const StyledImage = styled.div`
	
`;
const StyledImageDescription = styled.div`
		font-size: 13px;
		margin-bottom: 5px;
`;
const StyledImagePlaceholder = styled.div`
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		color: ${Variables.Colors.thirdColorLight};
		background: ${Variables.Colors.secondaryColorVeryLight};
		box-shadow: 1px 1px 4px 0px ${Variables.Colors.secondaryColorLight};
		font-size: 14px;
`;

const TutorialStep = ({step, description, link, image}) => {
	return (
		<StyledTutorialStepContainer>
			<StyledStepTitle>{step}</StyledStepTitle>
			<StyledText>{description}</StyledText>
			{link && <StyledFieldSection>
				<a href={link.url} target='_blank'>
                    {link.label}
                </a>
			</StyledFieldSection>}
			{image && <StyledImageSection>
				<StyledImageDescription>{image.description}</StyledImageDescription>
				{image.url ? <StyledImage src={image.url}/> : <StyledImagePlaceholder>image</StyledImagePlaceholder>}
			</StyledImageSection>}
		</StyledTutorialStepContainer>
	)
};

export default TutorialStep;
