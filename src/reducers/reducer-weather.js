import { FETCH_WEATHER } from '../actions/index';


export default function(state=[], action){
    console.log('receiveding ', action.type);
    console.log('city', action.payload)

    switch(action.type){
        case FETCH_WEATHER:
            console.log('from reducer ', action.type)
            return state.concat([action.payload.data]);
            //es6 alternative
            // return [ action.type.data, ...state ];
    }
    return state
}