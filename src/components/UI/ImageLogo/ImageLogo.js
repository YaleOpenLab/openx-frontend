import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes/routes";
import MainLogo from "../../../assets/images/MainLogo.png";
import styled from "styled-components";

const StyledLogoContainer = styled.div`
  height: 50px;
  padding: 7px;
  width: 163px;
`;

const StyledLogoImage = styled.img`
  height: 100%;
  max-width: 100%;
`;

const ImageLogo = props => (
  <StyledLogoContainer>
    <NavLink to={ROUTES.HOME}>
      <StyledLogoImage src={MainLogo} alt="OpenSolar" />
    </NavLink>
  </StyledLogoContainer>
);

export default ImageLogo;
