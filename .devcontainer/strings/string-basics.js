// is js there is no difference between ""and '' javascript treat both oc them same 

// ${ variable } is used to add any value from variable inside the string

const Discord  = new String('divansh')
// console.log( Discord.indexOf('i') );


const newDiscord = Discord.substring(3,6)
console.log(newDiscord);

const anoterstring = Discord.slice(-8, 3)
console.log(anoterstring);

const newStringTow = "       divansh      "
console.log(newStringTow);
console.log(newStringTow.trim());
console.log(newStringTow.replace('iv' , 'ivv' ).trim());
console.log(newStringTow.includes("divansh") )