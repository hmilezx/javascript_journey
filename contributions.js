// // // welcome to my javascript journey 
// // // kubu tolo 
// // // another day another contribution 

// // // start off witrh a basic function 
// // // adding two numbers

// // function addNumbers(numberRua, numberDua) {
// //     return numberRua + numberDua;
// // }

// // function checkifEven(number)
// // {
// //     if (number % 2 === 0) {
// //         return true;
// //     }

// //     else {
// //         return number + 1;
// //     }
// // }


// // console.log(checkifEven(3));

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// let Name;

// function imthatGuy(name) {
//     const normalizedName = name.toLowerCase();
//      Name = name;
//     try{
        
//         if (normalizedName === "miles" || normalizedName === "joyce" || normalizedName === "cyrus")
//             console.log("You are that nigga");
//         else
//             console.log("kys"); 
        
//     }
//     finally{
//         return console.log(`${Name} was here`); // I forgot to add console log earlier so it ended up just returning smth which was not used 
//     }

// }
// function askName() {
// rl.question("what is your name nigga? (type exit to quit): ", (answer) => {
//     if (answer.toLowerCase() === "exit") {
//         console.log("goodbye nigga");
//         rl.close();
//         return;
//     }
//     imthatGuy(answer);
//     askName();
//     // rl.close();
// });
// }

// askName();

function chatAmIcooked() {

    return true;
}

function forthevibes(name) {

}


let cooked = chatAmIcooked();

console.log(`chat is  cooked? ${cooked}`);
