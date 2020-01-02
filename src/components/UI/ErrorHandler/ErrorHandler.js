import React, {useEffect} from 'react';
import styled from 'styled-components';
import connect from "react-redux/es/connect/connect";
import {SnackbarProvider, withSnackbar} from "notistack";
import {hideErrorAction} from "../../../store/actions/actions";

const ErrorHandlerWrapper = styled.div`
	
`;

const ErrorHandler = withSnackbar(({children, error, enqueueSnackbar, onClose}) => {
	useEffect(() => {
		if(error.visible){
			enqueueSnackbar(error.message, {
				variant: error.type,
				autoHideDuration: 1500,
				onClose: onClose
			});
		}
	}, [error]);

	return (
			<ErrorHandlerWrapper>
				{children}
			</ErrorHandlerWrapper>
	);
});


const ErrorHandlerWithProvider = ({children, error, hideMessage}) => {
	return (
		<SnackbarProvider maxSnack={1}>
			<ErrorHandler error={error} onClose={hideMessage}>{children}</ErrorHandler>
		</SnackbarProvider>
	);
};

const mapStateToProps = state => ({
	error: state.error,
});

const mapDispatchToProps = dispatch => ({
	hideMessage: payload => dispatch(hideErrorAction(payload))
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ErrorHandlerWithProvider);
