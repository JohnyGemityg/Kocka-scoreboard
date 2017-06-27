export const changeName = (id, value) => ({
  type: 'PLAYER_CHANGE_NAME',
  payload: {
    id,
    value,
  },
});

export const select = id => ({
  type: 'PLAYER_SELECT',
  payload: {
    id,
  },
});


export const togglePlayersCount = () => ({
  type: 'PLAYERS_COUNT_CHANGE',
});
