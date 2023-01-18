const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  console.log(`That is a cool name: ${answer1}`);
  
  
  rl.question("What's an activity you like doing? ",(answer2) => {
    console.log(`How fantastic ${answer2} is always a good time ${answer1}`);
   
    rl.question(`What music you like listening to when you are ${answer2} ${answer1}?`, (answer3) => {
    console.log(`Very good! ${answer3} is a good choice!`);

    rl.question(`What is you favourite meal of the day ${answer1}`, (answer4) => {
      console.log(`${answer4} is a favourable.`);

      rl.question(`What is your favourite thing to eat for ${answer4}.`, (answer5) => {
        console.log(`Great preference!`);});

        rl.question(`${answer1} what is your superpower? In a few words , tell us what you are amazing at!`), (answer6) => {
          console.log(`Well done ${answer1}, these were all the questions.`)
        }
        rl.close();
      
    });
  });
  
});

  


  //rl.close();
});

