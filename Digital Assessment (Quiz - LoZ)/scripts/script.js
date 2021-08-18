console.log(quiz[0].Question)
console.log(quiz[0].Options[quiz[0].Answer])
console.log(quiz[1].Question)
console.log(quiz[1].Options[quiz[1].Answer])

console.log(quiz.length)

$(document).ready(() => {
    // Set number of questoins on the instruction tab
    const numQuestions = quiz.length
    $("#numQuestions").text(numQuestions);
})