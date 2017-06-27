import {combineReducers} from "redux";
import game from './game';
import players from './players';
import cardDesk from './cardDesk';


export default combineReducers({
    game,
    players,
    cardDesk,
});
