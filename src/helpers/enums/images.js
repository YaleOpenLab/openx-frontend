import React from 'react';
import ProjectOneHero from '../../assets/images/project/HeroBar.png';
import ProjectOneMain from '../../assets/images/project/MainImage.png';
import styled from 'styled-components';

const imageList = {
	projectOneHero: { src: ProjectOneHero, description: 'hero' },
	projectOneMain: { src: ProjectOneMain, description: 'main' },
};

const StyledImage = styled.img`
    max-height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Image = ({imageKey}) => {
	return (
		<StyledImage src={imageKey} alt="image" />
	)
};

export default Image;
