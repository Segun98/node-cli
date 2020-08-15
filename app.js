const readline = require('readline')
const fs = require("fs")
let rl = readline.createInterface(process.stdin, process.stdout)

console.log(`This app collects information about your project and displays it in a README.md

`);

let questions = ["Describe your project in two sentences: ", "Installation", "Usage"]

console.log(`Question 1:`);


rl.question(questions[0], (answer) => {
    fs.writeFileSync('README.md',
        `# Project Description
    
### ${answer}`)
    rl.close();
})


rl.on("close", () => {
    console.log(`answer recieved, check the generated README in this directory`);
    process.exit(0)
})