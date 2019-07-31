import {
  SUCCESS_PHASE,
  ERROR_PHASE,
  VALIDATE_CARD_PHASE,
  VALIDATE_CART_PHASE,
  FINALIZATION_PHASE,
  CHECK_OUT
} from '../actions';

const INITIAL_STATE = {
  loading: true,
  message: '',
  error: null,
  success: false,
  showCheckout: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_OUT:
      return {
        ...state,
        showCheckout: true
      };
    case VALIDATE_CART_PHASE:
      return {
        ...state,
        message: 'Validating Items in the stock...'
      };
    case VALIDATE_CARD_PHASE:
      return {
        ...state,
        message: 'Validating the credit card...'
      };
    case FINALIZATION_PHASE:
      return {
        ...state,
        message: 'Finalizing purchase...'
      };
    case SUCCESS_PHASE:
      return {
        ...state,
        message: 'The purchase was successfully completed',
        loading: false,
        success: true
      };
    case ERROR_PHASE:
      return {
        ...state,
        error: true,
        loading: false,
        message: 'Funds on your card were insufficient or na Error occurred.'
      };
    default:
      return state;
  }
};
