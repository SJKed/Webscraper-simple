//Calculator in commandline

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the first number? ', (answer1) => {
    rl.question('What is the second number? ', (answer2) => {
        rl.question('What is the operation? ', (answer3) => {
            if (answer3 == "+") {
                console.log(parseInt(answer1) + parseInt(answer2));
            } else if (answer3 == "-") {
                console.log(parseInt(answer1) - parseInt(answer2));
            } else if (answer3 == "*") {
                console.log(parseInt(answer1) * parseInt(answer2));
            } else if (answer3 == "/") {
                console.log(parseInt(answer1) / parseInt(answer2));
            } else {
                console.log("Invalid operation");
            }
            rl.close();
        }
        );
    }
    );
});
