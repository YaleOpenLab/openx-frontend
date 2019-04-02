export const FETCH_RECEIVER = "FETCH_RECEIVER";
export const FETCH_RECEIVER_SUCCESS = "FETCH_RECEIVER_SUCCESS";
export const FETCH_RECEIVER_FAILURE = "FETCH_RECEIVER_FAILURE";

export const fetchReceiver = () => ({
  type: FETCH_RECEIVER,
});

export const fetchReceiverSuccess = receiver => ({
  type: FETCH_RECEIVER_SUCCESS,
  payload: receiver,
});

export const fetchReceiverFailure = message => ({
  type: FETCH_RECEIVER_FAILURE,
  payload: message,
});
