export default (state = {
  started: false,
}, { type, payload }) => {
  switch (type) {
    case 'GAME_START':
      return {
        ...state,
        started: true,
      };
    default:
      return state;
  }
};
