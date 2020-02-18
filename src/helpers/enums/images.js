import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    max-height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Image = ({imageKey, altcontent}) => {
	return (
		<StyledImage src={imageKey} alt={altcontent} />
	)
};

export default Image;
