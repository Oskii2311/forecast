import { FETCH_WEATHER, ERROR_WEATHER } from "../actions/index";

export default function(state = [], action) {
    console.log(action.type)
    switch(action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];
        case ERROR_WEATHER:
            return state = [ ...state ];
    }

    return state;
}

