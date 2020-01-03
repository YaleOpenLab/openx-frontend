import React from 'react';
import styled from 'styled-components';
import {Variables} from "../../../styles/variables";
import Button from "../SolarForms/Button/Button";

const StyledModalBlacker = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	left:0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #00000054;
	z-index: 1000;
`;
const StyledConfirmModal = styled.div`
	width: 416px;
	min-height: 150px;
	position: absolute;
	background: white;
	z-index: 1001;
	border-radius: 5px;
	border: 1px solid ${Variables.Colors.secondaryColorLight};
	display: flex;
  justify-content: center;
  align-items: center;
	flex-direction: column;
  padding: 16px;
`;

const StyledModalTitle = styled.div`
	font-size: 14px;
	color: ${Variables.Colors.primaryColorLight}
`;

const StyledModalBody = styled.div`
	font-size: 14px;
	color: ${Variables.Colors.primaryColorLight}
`;

const StyledModalAction = styled.div`
	display: flex;
`;

const ConfirmModal = ({onCancel, onConfirm, title, body}) => {
	const handleModalClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleConfirm = () => {
		onConfirm();
		onCancel();
	};

	return (
		<StyledModalBlacker onClick={onCancel}>
			<StyledConfirmModal onClick={handleModalClick}>
				<StyledModalTitle>{title}</StyledModalTitle>
				<StyledModalBody>
					{body}
				</StyledModalBody>
				<StyledModalAction>
					<Button
						style={{width: 140, margin: '0 8px'}}
						label='confirm'
						action={handleConfirm}
					/>
					<Button
						variant='reversed'
						style={{width: 140, margin: '0 8px'}}
						label='cancel'
						action={onCancel}
					/>
				</StyledModalAction>
			</StyledConfirmModal>
		</StyledModalBlacker>
	)
};

export default ConfirmModal;
