const allCards = [
  {
    type: 'p',
    value: 'Q',
    score: 13,
    marked: false,
  },
  {
    type: 's',
    value: 'A',
    score: 6,
    marked: false,
  },
  {
    type: 's',
    value: 'K',
    score: 5,
    marked: false,
  },
  {
    type: 's',
    value: 'Q',
    score: 4,
    marked: false,
  },
  {
    type: 's',
    value: 'J',
    score: 3,
    marked: false,
  },
  {
    type: 's',
    value: '10',
    score: 2,
    marked: false,
  },
  {
    type: 's',
    value: '9',
    score: 1,
    marked: false,
  },
  {
    type: 's',
    value: '8',
    score: 1,
    marked: false,
  },
  {
    type: 's',
    value: '7',
    score: 1,
    marked: false,
  },
  {
    type: 's',
    value: '6',
    score: 1,
    marked: false,
  },
];


export default (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_CARD_TO_PLAYER':
      return state.map(card => ((card.type !== payload.card.type || card.value !== payload.card.value) ? card : { ...card, marked: true }));
    case 'GAME_START': {
      return (payload.playersCount === 3 ? allCards : allCards.slice(0, -1));
    }
    case 'SAVE_ROUND':
      return state.map(card => ({ ...card, marked: false }));
    case 'REMOVE_CARD_PLAYER':
      return state.map(card => ((card.type === payload.card.type && card.value === payload.card.value) ? card : { ...card, marked: false }));
    default:
      return state;
  }
};

export { allCards };
