//using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    console.log(btn);
    btn.addEventListener("click", function () {
        // console.log("here");
        question.classList.toggle("show-text");
        questions.forEach(function(item){
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
    })
})



// // traversing the dom
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         // console.log(e.currentTarget);
//         // console.log(e.currentTarget.parentElement);
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         // console.log(question);
//         question.classList.toggle("show-text");
//     })
// })