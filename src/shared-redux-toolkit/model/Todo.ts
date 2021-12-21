interface TodoI {
    id: number;
    text: string;
    active: boolean;
    done: boolean
}

export default class Todo {

    constructor(args?: TodoI) {
        Object.assign(this, args)
    }
}