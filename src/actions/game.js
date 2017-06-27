export const start = playersCount => ({
  type: 'GAME_START',
  payload: {
    playersCount,
  },
});
