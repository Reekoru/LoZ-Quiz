/*
Change log:
August 31, 2021
* Added feature to read from other JavaScript File

September 7, 2021
* Added function to change question

September 9, 2021
* Added color to correct or wrong answer
* Made dure that current questions does not go over the number of questions
* Made instructions disappear and quiz appear when start button is clicked

September 11, 2021
* Added results page
*/

const NUM_QUESTIONS = quiz.length
let currentQuestion = 0;
let questions = [];
let options = [];
let answers = [];
let correctAnswers = 0
let canClick = true

$(function(){
    $(document).ready(() => {
        // Get from object an store into variables
        for(let i = 0; i < quiz.length; i++){
            questions.push(quiz[i].Question)
            options.push(quiz[i].Options)
            answers.push(quiz[i].Answer)
        }

        var path = window.location.pathname;
        var page = path.split("/").pop();

        // Check if page is the quiz page
        if(page == "quiz.html"){
            console.log(answers)
            $("#numQuestions").text(NUM_QUESTIONS); // Set number of questions on the instruction tab
            $("#numTotalQuestions").text(NUM_QUESTIONS); // Set number of questions on the quiz tab
            $("#currentQuestionText").text(currentQuestion + 1);
            $("#quizQuestion").text(questions[currentQuestion]) // Replace text with question
            
            // Replace text of options with options of the question
            for(let i = 0; i <= 3; i++){
                $("#option" + String(i+1)).text(options[currentQuestion][i])
            }
        }
        else if(page == "results.html"){
            $("#numQuestions").text(NUM_QUESTIONS); // Set number of questions on the instruction tab
        }
    })

    $(document).on("click", ".quizOptions", (e) =>{
        if(canClick){
            canClick = false // Disable clicking
            console.log(currentQuestion)
            var option = e.target
            var optionId = parseInt(option.id.replace( /^\D+/g, '')) // Extract number from string
            console.log("#"+optionId)
            if(optionId - 1 == answers[currentQuestion]){
                console.log("Correct Answer")
                correctAnswers++ 
                $(option).parent().css("background-color", "gray")    // Change background color
            }
            else{
                console.log("Wrong Answer")
                $(option).parent().css("background-color", "red")
                $("#quizOption" + (answers[currentQuestion] + 1).toString()).css("background-color", "gray") // Change background color
            }

            // Change to next question
            setTimeout(() => {
                $(option).parent().css("background-color", "") // Change css back to original
                $("#quizOption" + (answers[currentQuestion] + 1).toString()).css("background-color", "")
                if(currentQuestion < NUM_QUESTIONS - 1){
                    currentQuestion++ // Next question
                }
                else{
                    // Load result page
                    window.location.href = "results.html"
                }
                $("#currentQuestionText").text(currentQuestion + 1); // Replace text of current question
                
                canClick = true // Allow user to chose option again
                
                for(let i = 0; i <= 3; i++){
                    $("#option" + String(i+1)).text(options[currentQuestion][i])
                }
                $("#quizQuestion").text(questions[currentQuestion]) // Replace text with question
            }, 1000)
        }
    })
})

function startQuiz(){
    $("#instructionBox").css("display", "none");
    $("#quizBox").css("display", "block");
}