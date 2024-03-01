import { Reducer } from 'redux';
import { AppState } from '../../@types';
import { randomHexColor } from '../../utils/color';

const initialState: AppState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const colorReducer: Reducer<AppState> = (
  state = initialState,
  action = { type: '@INIT' }
) => {
  switch (action.type) {
    case 'color/RANDOM_FIRST_COLOR':
      return {
        ...state,
        nbColors: state.nbColors + 1,
        firstColor: randomHexColor(),
      };
    case 'color/RANDOM_ALL':
      return {
        ...state,
        nbColors: state.nbColors + 2,
        firstColor: randomHexColor(),
        lastColor: randomHexColor(),
      };
    case 'color/RANDOM_LAST_COLOR':
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: randomHexColor(),
      };
    case 'color/TO_LEFT':
      return {
        ...state,
        direction: '270deg',
      };
    case 'color/TO_RIGHT':
      return {
        ...state,
        direction: '90deg',
      };
      case 'color/REVERSE':
        return {
          ...state,
          nbColors: state.nbColors + 2,
          firstColor: state.lastColor,
          lastColor: state.firstColor,
        };

        case 'color/RESET':
          return {
            ...state,
            nbColors: state.nbColors + 2,
            firstColor: initialState.firstColor,
            lastColor: initialState.lastColor,
            direction: initialState.direction,
          };

    default:
      return state;
  }

};

export default colorReducer;
