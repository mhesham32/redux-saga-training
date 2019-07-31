export const CHECK_OUT = 'CHECK_OUT';
export const VALIDATE_CART_PHASE = 'VALIDATE_CART_PHASE';
export const VALIDATE_CARD_PHASE = 'VALIDATE_CARD_PHASE';
export const FINALIZATION_PHASE = 'FINALIZATION_PHASE';
export const SUCCESS_PHASE = 'SUCCESS_PHASE';
export const ERROR_PHASE = 'ERROR_PHASE';

export const setCheckoutPhase = phase => ({ type: phase });
export const checkout = () => ({ type: CHECK_OUT });
