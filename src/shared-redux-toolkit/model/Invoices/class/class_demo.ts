export default class Emoji {
    constructor(public icon: any) { //making it public , makes us able to manipulate directly outside of the classs

    }
}


export class Emoji_2 {
    constructor(private icon:any) { //making it private , makes user able to read but not change outside of the class        
    }

    getIcon(){
        return this.icon;
    }

    setIcon(icon:string){
        this.icon = icon;
    }
}



const sun = new Emoji('asd');
sun.icon = 123; // -> direct manipulation , can be hard to test, and hard to track

const moon = new Emoji_2('3' );

moon.getIcon();
//moon.icon -> doesnt work , since its private state

//every class will be compiled to function in javascript 