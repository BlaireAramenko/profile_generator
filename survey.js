const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {};

rl.question("What's your name? Or whatever you like to be called! ", (answer) => {
  answers.name = answer;
  rl.question("What activity do you love to do? ", (answer) => {
    answers.activity = answer;
    rl.question("What kind of music or podcasts do you listen to? ", (answer) => {
      answers.music = answer;
      rl.question("If you could only eat one meal for the rest of your life, what would it be? ", (answer) => {
        answers.food = answer;
        rl.question("Where do you want to travel to next? ", (answer) => {
          answers.travel = answer;
          rl.question("What are you binging on Netflix right now? ", (answer) => {
            answers.netflix = answer;
            rl.question("What's your ideal date? ", (answer) => {
              answers.date = answer;
              console.log(`${answers.name} loves ${answers.activity}, listening to ${answers.music}, eating ${answers.food}, daydreaming about travelling to ${answers.travel}, and binge watching ${answers.netflix}. Ideal date? ${answers.date}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});