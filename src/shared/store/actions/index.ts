import { resolve } from 'path/posix';
import { createAction, createStandardAction } from 'typesafe-actions'
import {
    WEATHER_ERROR,
    WEATHER_GET,
    WEATHER_SET,
    MAP_READY
} from '../constants';
import cuid from 'cuid';




export const weatherGetAction = createAction(
    WEATHER_GET,
    (resolve) => (lat: number, lng: number) => resolve({ lat, lng })
)



// ------- demo create type safe action ------- //
export const add = createAction('todos/ADD', action => {
    // Note: "action" callback does not need "type" parameter
    return (title: string) => action({ id: cuid(), title, completed: false });
});
// add: (title: string) => { type: "todos/ADD"; payload: { id: string, title: string, completed: boolean; }; }

export const std_add = createStandardAction('todos/ADD').map(
    (title: string) => ({
        payload: { id: cuid(), title, completed: false },
    })
);
// add: (payload: string) => { type: "todos/ADD"; payload: { id: string, title: string, completed: boolean; }; }


// before
const withPayloadAndMeta = createAction('CREATE_ACTION', resolve => {
    return (id: number, token: string) => resolve(id, token);
});

// after v5
// const withPayloadAndMeta_new = createAction( 
//     'CREATE_ACTION',
//     (id: number, token: string) => id, // payload creator
//     (id: number, token: string) => token // meta creator
//   }) ();

// ------- demo create type safe action ------- //
