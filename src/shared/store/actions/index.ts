import { resolve } from 'path/posix';
import { createAction } from 'typesafe-actions'
import {
    WEATHER_ERROR,
    WEATHER_GET,
    WEATHER_SET,
    MAP_READY
} from '../constants';

// export const weatherGetAction = createAction(
//     WEATHER_GET,
//     ()=> ()=>resolve({})
// )
