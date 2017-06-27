export const addCardToActivePlayer = card => ({
  type: 'ADD_CARD_TO_PLAYER',
  payload: {
    card,
  },
});

export const removeCardFromPlayer = (playerId, card) => ({
  type: 'REMOVE_CARD_PLAYER',
  payload: {
    playerId,
    card,
  },
});

export const saveRound = () => ({
  type: 'SAVE_ROUND',
});

