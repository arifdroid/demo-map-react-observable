// 1st pure functions 

let num = 123;

function toStringNow(val: number) {
    num = val; // --> should not be use, considered as side effects
    //should not rely on any outside value to produce return value
    return val.toString();
}

// 2nd immutable data

const data = Object.freeze([1, 2, 3, 4, 5, 6]);

// 3rd Function as arguments

const addEmoji = (val: any) => val.toString() + ' emoji'
const emojiData = data.map(addEmoji) //just for demonstration purpose

// 4th Function as a return value, or function that return another function , react reselect is popular framework uses this



export { };