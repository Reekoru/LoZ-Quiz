console.log(quiz[0].Question)
console.log(quiz[0].Options[quiz[0].Answer])
console.log(quiz[1].Question)
console.log(quiz[1].Options[quiz[1].Answer])

console.log(quiz.length)
let currentQuestion = 0;

$(function(){
    $(document).ready(() => {
        const NUM_QUESTIONS = quiz.length
    
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let questions = [];
        let options = [];
        let answers = [];
    
        // Get from array an store into file
        for(let i = 0; i < quiz.length; i++){
            questions.push(quiz[i].Question)
            options.push(quiz[i].Options)
            answers.push(quiz[i].Answer)
        }
        
        $("#numQuestions").text(NUM_QUESTIONS); // Set number of questoins on the instruction tab
        $("#questionOne").text(questions[currentQuestion]) // Replace text with question
        
        // Replace text of options with options of the question
        for(let i = 0; i <= 3; i++){
            $("#option" + String(i+1)).text(options[currentQuestion][i])
        }
    })

    $("#quizTitle")

    $("body").click(() => {
        currentQuestion++;
        console.log(currentQuestion)
    })
})