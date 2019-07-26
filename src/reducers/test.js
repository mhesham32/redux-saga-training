const INITIAL_STATE = { count: 0 };

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
};
