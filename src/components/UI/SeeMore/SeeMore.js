import React, {useState} from 'react';
import styled from 'styled-components';
import infoIcon from '../../../assets/images/ic-info.svg'
import ActiveInfoIcon from '../../../assets/images/ic-info-active.svg'
import ClickAwayListener from "../../tools/ClickAwayListener/ClickAwayListener";

const StyledSeeMoreModal = styled.div`
	position: absolute;
  background: white;
  min-height: 20px;
  min-width: 100px;
  max-width: 700px;
  max-width: 450px;
  overflow: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 12px silver;
  border: 1px solid silver;
  z-index: 1000;
`;

const StyledInfoIconSection = styled.div`
  display: inline-flex;
`;

const StyledInfoIconDiv = styled.div`
	margin-left: 8px;
	cursor: pointer;
`;

const StyledInfoIcon = styled.img`
`;

const SeeMore = ({children, infoContent}) => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<StyledInfoIconSection>
				{children}
				<ClickAwayListener onClickAway={() => setOpen(false)}>
					<div>
						<StyledInfoIconDiv onClick={() => setOpen(!open)}>
							<StyledInfoIcon src={open ? ActiveInfoIcon : infoIcon}/>
						</StyledInfoIconDiv>
						{open && <StyledSeeMoreModal>
							{infoContent}
						</StyledSeeMoreModal>}
					</div>
				</ClickAwayListener>
			</StyledInfoIconSection>
		</div>
	)
};

export default SeeMore;
