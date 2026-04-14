//built-in-types: number,string,boolean,undefined,void,null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;


userId = 101;
firstName = "saad";
lastName = "bari";
isActivated = true;

fullName = firstName.concat(lastName)
console.log(`Your Id: ${userId}, userName: ${firstName},account Activated: ${isActivated}`)