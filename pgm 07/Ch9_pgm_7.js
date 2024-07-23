
var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Marseille");

question1.showQuestion();

var question2 = new QuizQuestion(
    "What is the largest ocean on Earth?",
    "Pacific"
);
question2.addOption("Atlantic");
question2.addOption("Indian");
question2.addOption("Arctic");
question2.addOption("Pacific");

question2.showQuestion();


var question3 = new QuizQuestion(
    "Who wrote 'Hamlet'?",
    "William Shakespeare"
);
question3.addOption("Charles Dickens");
question3.addOption("Jane Austen");
question3.addOption("William Shakespeare");
question3.addOption("Mark Twain");

question3.showQuestion();

