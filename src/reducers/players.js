export default (state = [
  {
    id: 1,
    name: '',
    score: [],
    cards: [],
    active: true,
  },
  {
    id: 2,
    name: '',
    score: [],
    cards: [],
    active: false,

  },
  {
    id: 3,
    name: '',
    score: [],
    cards: [],
    active: false,
  },
], { type, payload }) => {
  switch (type) {
    case 'PLAYER_CHANGE_NAME':
      return state.map((p) => {
        if (p.id === payload.id) {
          return { ...p, name: payload.value };
        }
        return p;
      });
    case 'PLAYER_SELECT':
      return state.map((p) => {
        if (p.id === payload.id) {
          return { ...p, active: true };
        }
        return { ...p, active: false };
      });
    case 'ADD_CARD_TO_PLAYER':
      return state.map((p) => {
        if (p.active) {
          return {
            ...p,
            cards: [...p.cards, payload.card],
          };
        }
        return p;
      });
    case 'REMOVE_CARD_PLAYER':
      return state.map((p) => {
        if (p.id === payload.playerId) {
          return {
            ...p,
            cards: p.cards.filter(card => (card.type !== payload.card.type || card.value !== payload.card.value)),
          };
        }
        return p;
      });
    case 'SAVE_ROUND':
      return state.map((p, i) => (
        {
          ...p,
          active: i === 0,
          cards: [],
          score: [...p.score, p.cards.reduce((a, c) => (a + c.score), 0)],
        }
      ));
    case 'PLAYERS_COUNT_CHANGE':
      return (state.length === 3) ?
      [...state, {
        id: 4,
        name: '',
        score: [],
        cards: [],
        active: false,
      }] : state.slice(0, -1);

    default:
      return state;
  }
};
